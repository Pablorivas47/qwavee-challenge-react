import React from 'react';

interface SwitcherProps {
  on: boolean;
  onClick: () => void;
  className?: string;
}

const Switcher: React.FC<SwitcherProps> = ({ on, onClick, className }) => {
  return (
    <label className={`themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center ${className}`}>
      <input
        type="checkbox"
        checked={on}
        onChange={onClick}
        className="sr-only"
      />
      <span
        className={`slider flex items-center h-[20px] w-[40px] rounded-full p-1 duration-200 ${
          on ? 'bg-[#212b36]' : 'bg-[#F2F2F2]'
        }`}
      >
        <span
          className={`dot h-[16px] w-[16px] rounded-full bg-white duration-200 ${
            on ? 'translate-x-[20px]' : ''
          }`}
        ></span>
      </span>
    </label>
  );
};

export default Switcher;
