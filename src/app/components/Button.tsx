import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  backgroundColor?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, backgroundColor = '#002F5F', color = '#ffffff' }) => {
  return (
    <button
      className={`
        px-5 py-2 rounded-md border-none cursor-pointer text-[10px]  phone:text-[14px] font-normal transition-all duration-300
        bg-[${backgroundColor}] text-[${color}]
        hover:bg-[#00529B] hover:scale-110 active:scale-95
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

