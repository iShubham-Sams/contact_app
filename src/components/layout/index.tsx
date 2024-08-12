import { Outlet } from "react-router";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="grid grid-cols-[10%_90%] sm:grid-cols-[20%_80%] md:grid-cols-[15%_85%]">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
