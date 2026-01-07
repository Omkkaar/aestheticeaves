import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white border border-primary hover:bg-white hover:text-primary",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
    text: "bg-transparent text-primary hover:text-secondary underline decoration-1 underline-offset-4"
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