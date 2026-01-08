import React from 'react';

// Props: title (başlıq), value (rəqəm), unit (ölçü vahidi), icon (lucide ikonu)
const StatCard = ({ title, value, unit, icon: Icon }) => {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex items-start justify-between hover:border-zinc-700 transition-colors">
      <div>
        <h3 className="text-zinc-400 text-sm font-medium mb-1">{title}</h3>
        <div className="flex items-baseline gap-1">
          <p className="text-3xl font-bold text-white">{value}</p>
          {unit && <span className="text-zinc-500 text-sm">{unit}</span>}
        </div>
      </div>
      
      {/* Əgər ikon göndərilibsə, onu göstər */}
      {Icon && (
        <div className="p-3 bg-zinc-800/50 rounded-xl text-lime-400">
          <Icon size={22} />
        </div>
      )}
    </div>
  );
};

export default StatCard;