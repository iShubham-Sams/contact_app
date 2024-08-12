import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hook";
import { deleteContact } from "../../redux/contactSlice";
import Button from "../share/Button";

type ContactCardProps<T> = {
  val: T;
  statusClass: string;
};
const ContactCard = <T extends { firstName: string; lastName: string; index: number }>({ val, statusClass }: ContactCardProps<T>) => {
  const dispatch = useAppDispatch();
  return (
    <div key={val.index} className="drop-shadow-sm p-4 border rounded-md">
      <h3 className="text-lg font-semibold">
        {val.firstName} {val.lastName}
      </h3>
      <div className="flex items-center gap-2">
        <span className="font-semibold">Status</span>
        <div className={statusClass}></div>
      </div>
      <div className="mt-2">
        <Button variant="secondary">Edit</Button>
        <Button
          variant="danger"
          onClick={() => {
            dispatch(deleteContact(val.index));
            toast("Delete contact");
          }}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ContactCard;
