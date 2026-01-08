import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Smartphone, Globe, Activity, Trophy } from 'lucide-react';

const Marquee = () => {
  return (
    <div className="bg-transparent text-white">
      
      <div className="w-full bg-neutral-900/50 border-y border-white/5 py-10 overflow-hidden relative">
        {/* Kənarlarda yumşaq keçid (fade) effekti */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex gap-16 items-center animate-scroll whitespace-nowrap min-w-full">
            {/* Logo Siyahısı (2 dəfə təkrarla ki, sonsuz görünsün) */}
            {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <span className="text-2xl font-black text-white">ROGUE</span>
                    <span className="text-2xl font-black text-white">GYMSHARK</span>
                    <span className="text-2xl font-black text-white">NIKE<span className="text-accent">PRO</span></span>
                    <span className="text-2xl font-black text-white">CROSSFIT</span>
                    <span className="text-2xl font-black text-white">UNDER<span className="text-gray-500">ARMOUR</span></span>
                    <span className="text-2xl font-black text-white">ADIDAS</span>
                    <span className="text-2xl font-black text-white">REEBOK</span>
                    <span className="text-2xl font-black text-white">BODYBUILDING<span className="text-accent">.COM</span></span>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default Marquee;