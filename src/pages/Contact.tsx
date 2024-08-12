import { useState } from "react";
import Button from "../components/share/Button";
import { Modal } from "../components/share/Modal";
import CreateAndUpdateContactForm from "../components/contact/createAndupdateContactForm";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "../redux/hook";
import classNames from "classnames";
import ContactCard from "../components/contact/contactCard";
import { VscError } from "react-icons/vsc";
import { ContactDetails } from "../types";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const contact = useAppSelector((val) => val.contact.userDetails);
  const [editContact, setEditContact] = useState<ContactDetails | null>(null);
  const setModalOpen = () => {
    setEditContact(null);
    setOpen(false);
  };
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
      {(contact?.length ?? 0) > 0 ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {contact?.map((val) => {
            const baseClass = "h-3 w-3 rounded-full";
            const activeInactive = {
              active: "bg-green-400",
              inactive: "bg-red-400",
            };
            const statusClass = classNames(baseClass, activeInactive[val.status]);
            return <ContactCard val={val} key={val.index} statusClass={statusClass} setEditContact={setEditContact} setModalOpen={setOpen} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center my-[5rem]">
          <div className="flex justify-center items-center p-4 bg-gray-300 rounded-xl w-[20rem] gap-2">
            <VscError size={40} />
            <h3>No Contact Found Please add contact from Create Contact Button</h3>
          </div>
        </div>
      )}
      <Modal modalOpen={open} setModalOpen={setModalOpen}>
        <CreateAndUpdateContactForm setModalOpen={setOpen} editContactValue={editContact} setEditContact={setEditContact} />
      </Modal>
    </div>
  );
};

export default Contact;
