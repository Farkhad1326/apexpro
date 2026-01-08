import React from 'react';

const BackgroundLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#050505] overflow-x-hidden selection:bg-neon-green selection:text-black">
      
      {/* --- GRADIENT LAYER (Sağ tərəfdə, Gamma kimi) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Əsas gradient - sağdan gələn yumşaq qarışıq */}
        <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 60% 80% at 85% 50%, 
                  rgba(139, 92, 246, 0.28) 0%,
                  rgba(59, 130, 246, 0.22) 30%,
                  rgba(16, 185, 129, 0.16) 50%,
                  transparent 70%
                )
              `
            }}
        />

        {/* GRID TEXTURE (Çox zəif tor - Texnoloji hissiyyat üçün) */}
        <div className="absolute inset-0 z-10 opacity-[0.08]" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
               backgroundSize: '100px 100px' 
             }}
        />

      </div>

      {/* --- VIGNETTE (Kenarları qaraltmaq) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050505_88%)]" />

      {/* --- CONTENT --- */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default BackgroundLayout;