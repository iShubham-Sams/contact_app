import { useState } from "react";
import Button from "../components/share/Button";
import { Modal } from "../components/share/Modal";
import CreateAndUpdateContactForm from "../components/contact/createAndupdateContactForm";
import { ToastContainer } from "react-toastify";

const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-[120vh] p-4">
      <ToastContainer />
      <div className="flex items-center justify-center">
        <Button
          onClick={() => {
            setOpen(true);
          }}>
          Crete Contact
        </Button>
        <Modal modalOpen={open} setModalOpen={setOpen}>
          <CreateAndUpdateContactForm setModalOpen={setOpen} />
        </Modal>
      </div>
    </div>
  );
};

export default Contact;
