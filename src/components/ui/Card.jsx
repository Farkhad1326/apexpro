import React from 'react';

const Card = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`
      relative bg-[#121212] border border-white/5 rounded-xl overflow-hidden
      ${hoverEffect ? 'transition-all duration-300 hover:border-neon-green/30 hover:shadow-[0_0_20px_rgba(204,255,0,0.05)] hover:-translate-y-1' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;