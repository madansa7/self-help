import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", variant = 'primary', href }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 transform active:scale-[0.97] text-center w-full md:w-auto";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5 px-10 py-4 shadow-sm",
    secondary: "bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white px-10 py-4"
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};