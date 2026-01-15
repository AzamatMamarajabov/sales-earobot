import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-500 hover:bg-brand-600 shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    secondary: "border-transparent text-brand-900 bg-brand-100 hover:bg-brand-200",
    outline: "border-gray-600 text-gray-300 hover:bg-white/5 hover:text-white hover:border-white",
    gold: "border-transparent text-black bg-gold-gradient hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] shadow-[0_0_15px_rgba(245,158,11,0.3)]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;