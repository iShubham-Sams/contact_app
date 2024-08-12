import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUser, loginUserZodSchema } from "../utils/loginZod";
import Button from "../components/share/Button";
import Input from "../components/share/Input";
import { useNavigate } from "react-router";
import { fakeAuthProvider } from "../utils/fakeAuth";
import { toast, ToastContainer } from "react-toastify";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>({
    resolver: zodResolver(loginUserZodSchema),
  });

  const onSubmit: SubmitHandler<LoginUser> = async (data) => {
    setLoading(true);
    await fakeAuthProvider.signin(data.email);
    setLoading(false);
    toast("User login successfully");
    await new Promise((r) => setTimeout(r, 1000));
    redirect("/contact");
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <ToastContainer />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input id="email" label="Email" type="email" register={register} required error={errors.email} />
          <Input id="password" label="Password" type="password" register={register} required error={errors.password} />
          <Button type="submit" className="w-full" disabled={loading}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
