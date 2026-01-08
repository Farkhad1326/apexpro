import React from 'react';

const Badge = ({ 
  children, 
  variant = 'neon', // neon, dark, outline, glass
  size = 'md', 
  className = '' 
}) => {

  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-widest rounded-sm whitespace-nowrap";

  const variants = {
    neon: "bg-neon-green text-black",
    dark: "bg-black text-white border border-zinc-800",
    outline: "border border-neon-green text-neon-green bg-transparent",
    glass: "bg-white/10 backdrop-blur-md text-white border border-white/10",
    zinc: "bg-zinc-800 text-zinc-300"
  };

  const sizes = {
    sm: "text-[9px] px-2 py-0.5",
    md: "text-[10px] px-3 py-1",
    lg: "text-xs px-4 py-1.5"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;