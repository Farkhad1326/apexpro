import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaDumbbell, FaSignal } from 'react-icons/fa'; // İkonlar

const WorkoutCard = ({ data }) => {
  // Data yoxdursa, heç nə göstərmə (Xəta qarşısını almaq üçün)
  if (!data) return null;

  const { id, title, thumbnail, image, meta } = data;
  
  // Əsas şəkli seçirik (thumbnail varsa onu, yoxsa böyük şəkli)
  const displayImage = thumbnail || image;

  return (
    <Link 
      to={`/workouts/${id}`} 
      className="group relative block h-[400px] w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-xl transition-transform duration-300 hover:-translate-y-2"
    >
      {/* --- Arxa Fon Şəkli --- */}
      <div className="absolute inset-0">
        <img 
          src={displayImage} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
        />
        {/* Qara rəngli qradient (Mətn oxunsun deyə) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* --- Kartın Üstündəki Məlumatlar --- */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        
        {/* Üst Etiketlər (Level & Goal) */}
        <div className="mb-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider">
          <span className={`rounded px-2 py-1 ${getLevelColor(meta.level)}`}>
            {meta.level}
          </span>
          <span className="rounded bg-white/20 px-2 py-1 backdrop-blur-sm">
            {meta.goal}
          </span>
        </div>

        {/* Başlıq */}
        <h3 className="mb-1 text-2xl font-bold leading-tight group-hover:text-neon-green transition-colors">
          {title}
        </h3>
        
        <p className="mb-4 text-sm text-gray-300">by {meta.author}</p>

        {/* Alt Detallar (Gün, Ekipman) */}
        <div className="flex items-center justify-between border-t border-white/20 pt-4 text-sm text-gray-300">
          <div className="flex items-center gap-1">
            <FaClock className="text-neon-green" />
            <span>{meta.days} Days/Week</span>
          </div>
          <div className="flex items-center gap-1">
            <FaDumbbell className="text-neon-green" />
            <span>{meta.equipment}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Səviyyəyə görə rəng seçən köməkçi funksiya
const getLevelColor = (level) => {
  switch (level?.toLowerCase()) {
    case 'beginner': return 'bg-green-500/80 text-white';
    case 'intermediate': return 'bg-yellow-500/80 text-black';
    case 'advanced': return 'bg-red-500/80 text-white';
    default: return 'bg-gray-500/80 text-white';
  }
};

export default WorkoutCard;