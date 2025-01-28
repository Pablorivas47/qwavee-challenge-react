
import React, { useState } from 'react';

interface PasswordInputProps {
  id: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  'aria-label'?: string;
}
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput: React.FC<PasswordInputProps> = ({
  id, placeholder, required, name, 'aria-label': ariaLabel,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <section className="relative">
      <input
        type={showPassword ? "text" : "password"}
        id={id}
        className="w-full font-normal text-[15px] text-black bg-[#f2f2f2] rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2"
        placeholder={placeholder}
        name={name}
        required={required}
        aria-label={ariaLabel}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center px-2"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <FaEyeSlash className="text-gray-600" />
        ) : (
          <FaEye className="text-gray-600" />
        )}
      </button>
      <span className="sr-only">
        {showPassword ? "Password is visible" : "Password is hidden"}
      </span>
    </section>
  );
};

export default PasswordInput;