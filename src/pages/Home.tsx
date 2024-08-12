import { HiArrowUpRight } from "react-icons/hi2";
import Button from "../components/share/Button";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          <span className=" w-full">Welcome to Taiyo contact management app</span>
        </h1>
        <p className="text-xl text-gray-400 mt-4">Manage your contact on one place</p>
      </div>
      <Button
        onClick={() => {
          navigate("/auth/login");
        }}
        className="flex gap-2">
        Explore <HiArrowUpRight />{" "}
      </Button>
    </div>
  );
};

export default Home;
