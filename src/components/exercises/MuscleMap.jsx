import React from 'react';

const MuscleMap = ({ selectedGroup }) => {
  // Seçilən hissə üçün rəng (Lime), seçilməyən üçün (Zinc-700)
  const getColor = (groupName) => selectedGroup === groupName ? '#a3e635' : '#3f3f46';

  return (
    <div className="w-full h-full flex items-center justify-center bg-zinc-900/50 rounded-xl p-4 min-h-[300px]">
      <svg viewBox="0 0 100 200" className="h-64 w-auto drop-shadow-lg">
        {/* Baş */}
        <circle cx="50" cy="20" r="10" fill="#3f3f46" />
        
        {/* Sinə (Chest) */}
        <path d="M35 35 Q50 45 65 35 V60 H35 Z" fill={getColor('Chest')} />
        
        {/* Qarın (Abs) */}
        <rect x="40" y="62" width="20" height="28" rx="2" fill={getColor('Abs')} />
        
        {/* Qollar (Arms) */}
        <rect x="15" y="35" width="15" height="60" rx="5" fill={getColor('Arms')} />
        <rect x="70" y="35" width="15" height="60" rx="5" fill={getColor('Arms')} />
        
        {/* Ayaqlar (Legs) */}
        <path d="M35 95 L47 95 L45 175 L37 175 Z" fill={getColor('Legs')} />
        <path d="M53 95 L65 95 L63 175 L55 175 Z" fill={getColor('Legs')} />
        
        {/* Kürək (Back) - Şərti olaraq arxa tərəfi seçəndə bütün gövdəni rəngləyə bilərik və ya başqa məntiq */}
      </svg>
    </div>
  );
};

export default MuscleMap;