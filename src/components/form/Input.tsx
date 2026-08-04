import React from "react";

interface Props {
  label?: string;
  type?: "text" | "radio" | "email" | "password" | string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  required?: boolean;
  disabled?: boolean;
  name?: string;
};

const Input: React.FC<Props> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  inputClassName = "",
  labelClassName = "",
  required = false,
  disabled = false,
  name,
}) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && ( 
        <label className={`text-sm font-medium text-text-secondary ${labelClassName}`}> 
          {label} {required && <span className="text-danger">*</span>} 
        </label> 
      )}
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        required={required} 
        disabled={disabled} 
        className={`px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:outline-none text-text-primary ${inputClassName}`} 
      />
    </div>
  );
};

export default Input;