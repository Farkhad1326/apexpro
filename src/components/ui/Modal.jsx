import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, title, children }) => {
  // Modal açıq olanda scroll-u dondurmaq
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Arxa Fon (Qaranlıq) */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Qutusu */}
      <div className="relative bg-[#18181b] border border-white/10 w-full max-w-lg rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Başlıq */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <h3 className="text-xl font-black italic text-white uppercase tracking-wider">{title}</h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Məzmun */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;