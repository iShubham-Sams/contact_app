import { useAppSelector } from "../../redux/hook";

const Navbar = () => {
  const user = useAppSelector((val) => val.user.userDetails?.email);
  return (
    <section className="flex justify-between py-4 px-[5rem] border-b-2 border-b-black col-span-2">
      <span className="font-extrabold text-2xl text-orange-400 ">Contact App</span>
      <span className="bg-orange-100 h-8 w-8 rounded-full flex justify-center items-center font-semibold text-lg">
        <p>{user?.trim()[0]}</p>
      </span>
    </section>
  );
};

export default Navbar;
