import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../share/Input";
import Button from "../share/Button";
import RadioGroup from "../share/RadioButton";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addContact, editContact } from "../../redux/contactSlice";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ContactDetails } from "../../types";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name is too long"),
  status: z.enum(["active", "inactive"], { message: "Status is required" }),
});
type Contact = z.infer<typeof contactSchema>;
type EditContact = (ContactDetails & { index: number }) | null;

const CreateAndUpdateContactForm = ({ setModalOpen, setEditContact, editContactValue }: { setModalOpen: Dispatch<React.SetStateAction<boolean>>; setEditContact: Dispatch<SetStateAction<EditContact>>; editContactValue?: EditContact }) => {
  const contact = useAppSelector((val) => val.contact.userDetails);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: editContactValue?.firstName,
      lastName: editContactValue?.lastName,
      status: editContactValue?.status,
    },
  });

  const onSubmit: SubmitHandler<Contact> = (data) => {
    if (editContactValue) {
      if (contact) {
        let indexToEdit = contact?.findIndex((val) => val.index === editContactValue.index);
        let contactsCopy = [...contact];
        contactsCopy[indexToEdit] = { ...data, index: editContactValue.index };
        dispatch(editContact(contactsCopy));
        toast("Contact Edit Successfully");
        setEditContact(null);
        reset();
        setModalOpen(false);
      }
    } else {
      const addContactPayload = { ...data, index: contact?.length ?? 0 };
      dispatch(addContact(addContactPayload));
      toast("Add Contact");
      reset();
      setModalOpen(false);
    }
  };
  useEffect(() => {
    if (editContactValue) {
      setValue("firstName", editContactValue.firstName);
      setValue("lastName", editContactValue.lastName);
      setValue("status", editContactValue.status);
    }
    return () => {
      reset();
    };
  }, [editContactValue?.firstName, editContactValue?.lastName, editContactValue?.status, reset, setValue]);

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
          {editContactValue ? "Save Edit Contact" : "Save Contact"}
        </Button>
      </div>
    </form>
  );
};

export default CreateAndUpdateContactForm;
