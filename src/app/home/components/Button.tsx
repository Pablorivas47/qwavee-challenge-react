import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  backgroundColor?: string;
  color?: string;
  fontsize?: number;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, backgroundColor = '#002F5F', color = '#ffffff', fontsize = '14px' }) => {
  return (
    <button
      style={{
        padding: '10px 20px',
        backgroundColor,
        color,
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'normal',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
