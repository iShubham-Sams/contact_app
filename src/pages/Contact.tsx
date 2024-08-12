import { useState } from "react";
import Button from "../components/share/Button";
import { Modal } from "../components/share/Modal";
import CreateAndUpdateContactForm from "../components/contact/createAndupdateContactForm";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "../redux/hook";
import classNames from "classnames";
import ContactCard from "../components/contact/contactCard";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const contact = useAppSelector((val) => val.contact.userDetails);
  return (
    <div className="h-[90vh] p-4">
      <ToastContainer />
      <div className="flex items-center justify-center">
        <Button
          onClick={() => {
            setOpen(true);
          }}>
          Crete Contact
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {contact?.map((val) => {
          const baseClass = "h-3 w-3 rounded-full";
          const activeInactive = {
            active: "bg-green-400",
            inactive: "bg-red-400",
          };
          const statusClass = classNames(baseClass, activeInactive[val.status]);
          return <ContactCard val={val} statusClass={statusClass} />;
        })}
      </div>
      <Modal modalOpen={open} setModalOpen={setOpen}>
        <CreateAndUpdateContactForm setModalOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default Contact;
