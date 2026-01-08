import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', // primary, secondary, outline, ghost
  size = 'md', // sm, md, lg, full
  to, // Əgər linkdirsə
  onClick, 
  className = '',
  disabled = false,
  type = 'button'
}) => {
  
  // Ümumi baza stili
  const baseStyles = "inline-flex items-center justify-center font-black uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Varyantlar (Rənglər)
  const variants = {
    primary: "bg-neon-green text-black hover:bg-white hover:scale-[1.02]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-neon-green text-neon-green hover:bg-neon-green hover:text-black",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
    danger: "bg-red-600/10 text-red-500 border border-red-600/20 hover:bg-red-600 hover:text-white"
  };

  // Ölçülər
  const sizes = {
    sm: "text-[10px] px-3 py-1.5",
    md: "text-xs px-6 py-3",
    lg: "text-sm px-8 py-4",
    full: "w-full text-sm py-4"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Əgər "to" varsa, Link qaytarırıq
  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  // Yoxsa adi Button
  return (
    <button 
      type={type} 
      className={combinedClasses} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;