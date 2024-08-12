import { FaRegChartBar } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";

const sidebarLink = [
  { title: "Contacts", link: "/contact", icon: <IoIosContact /> },
  { title: "Charts and Maps", link: "/charts/map", icon: <FaRegChartBar /> },
];

const Sidebar = () => {
  return (
    <section className="border-r-2 border-r-black p-4">
      <div className="grid gap-4 text-pretty ">
        {sidebarLink.map((val, ind) => {
          return (
            <Link to={val.link} key={ind} className="text-lg hover:text-blue-400 text-pretty flex items-center gap-2">
              {val.icon}
              <span className="hidden sm:block">{val.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
