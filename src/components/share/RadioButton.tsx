import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface RadioGroupProps {
  name: string;
  options: { value: string; label: string }[];
  register: UseFormRegister<any>;
  error?: FieldError;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, register, error }) => {
  return (
    <div className="flex gap-4">
      <label>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <div>
        {options.map((option) => (
          <div key={option.value} className="space-x-2">
            <input type="radio" id={option.value} value={option.value} {...register(name)} />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
        {error && <p className="text-red-500 text-sm">{error.message}</p>}
      </div>
    </div>
  );
};

export default RadioGroup;
