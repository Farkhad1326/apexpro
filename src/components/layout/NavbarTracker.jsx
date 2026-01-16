import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const NavbarTracker = () => {
  const navRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  // Mousun X mövqeyini izləmək üçün Motion Value
  const mouseX = useMotionValue(0);

  // Xəttin hərəkətini daha yumşaq (smooth) etmək üçün Spring (Yay) effekti
  // Bu o "bahalı maşın" hissini verən əsas hissədir
  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
    mass: 0.5
  });

  const handleMouseMove = (e) => {
    if (!navRef.current) return;
    
    // Mousun navbar daxilindəki dəqiq yerini hesablayırıq
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    
    mouseX.set(x);
  };

  return (
    <nav
      ref={navRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative h-16 w-full border-b border-white/5 bg-black/50 backdrop-blur-md px-8 flex items-center justify-between overflow-hidden"
    >
      {/* GÜMÜŞÜ XƏTT (TRACKER)
        - h-[1px]: Çox nazik
        - blur-sm: Parıltı vermək üçün
        - bg-gradient-to-r: Gümüşü effekt üçün mərkəzi ağ, kənarları şəffaf
      */}
      <motion.div
        style={{
          x: springX,
          opacity: opacity,
          left: -50, // Xəttin mərkəzləşdirilməsi
        }}
        className="absolute bottom-0 w-[100px] h-[2px] z-50 pointer-events-none"
      >
        {/* Əsas parlaq xətt */}
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        
        {/* Əlavə gümüşü parıltı (Glow) */}
        <div className="absolute top-0 left-0 w-full h-[4px] bg-white/20 blur-md" />
      </motion.div>

      {/* Navbar Linkləri (Nümunə) */}
      <div className="flex gap-8 text-sm font-medium text-zinc-400">
        <span className="hover:text-white cursor-pointer transition-colors">System</span>
        <span className="hover:text-white cursor-pointer transition-colors">Network</span>
        <span className="hover:text-white cursor-pointer transition-colors">Security</span>
      </div>

      <div className="text-primary font-black tracking-tighter italic">APEX HUD v1.0</div>
    </nav>
  );
};