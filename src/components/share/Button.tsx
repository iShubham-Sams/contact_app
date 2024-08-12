import { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "md" | "sm" | "lg";
  disabled?: boolean;
  className?: string;
};
const Button = ({ children, onClick, className, type = "button", variant = "primary", size = "md", disabled = false }: ButtonProps) => {
  const baseClasses = "text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ";

  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500  dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
  };

  const sizes = {
    sm: "px-2.5 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const buttonClasses = classNames(
    baseClasses,
    variants[variant],
    sizes[size],
    {
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  return (
    <button type={type} className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
