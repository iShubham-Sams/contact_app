import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../share/Input";
import Button from "../share/Button";
import RadioGroup from "../share/RadioButton";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addContact } from "../../redux/contactSlice";
import { toast } from "react-toastify";
import { Dispatch } from "react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name is too long"),
  status: z.enum(["active", "inactive"], { message: "Status is required" }),
});
type Contact = z.infer<typeof contactSchema>;

const CreateAndUpdateContactForm = ({ setModalOpen }: { setModalOpen: Dispatch<React.SetStateAction<boolean>> }) => {
  const contact = useAppSelector((val) => val.contact.userDetails);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<Contact> = (data) => {
    const addContactPayload = { ...data, index: (contact?.length ?? 0) + 1 };
    dispatch(addContact(addContactPayload));
    toast("Add Contact");
    setModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input id="firstName" label="First Name" type="text" register={register} required error={errors.firstName} />
      <Input id="lastName" label="Last Name" type="text" register={register} required error={errors.firstName} />
      <RadioGroup
        name="status"
        options={[
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
        ]}
        register={register}
        error={errors.status}
      />
      <div className="justify-end flex mt-4">
        <Button type="submit" size="lg">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CreateAndUpdateContactForm;
