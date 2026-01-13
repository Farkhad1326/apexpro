import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaDumbbell, FaBookmark, FaCheck } from 'react-icons/fa'; // İkonlar
import { useRoutine } from '../../../context/RoutineContext'; // 1. Context-i çağırırıq

const WorkoutCard = ({ data }) => {
  // Data yoxdursa, heç nə göstərmə
  if (!data) return null;

  // 2. Context-dən lazımi funksiya və datanı alırıq
  const { addRoutine, myRoutines } = useRoutine();

  const { id, title, thumbnail, image, meta } = data;
  const displayImage = thumbnail || image;

  // 3. Bu planın artıq yaddaşda olub-olmadığını yoxlayırıq
  const isSaved = myRoutines.some(routine => routine.id === id);

  // 4. Save düyməsinin funksiyası
  const handleSave = (e) => {
    e.preventDefault(); // Link-in işləməsini dayandırır (səhifə dəyişməsin)
    e.stopPropagation(); // Event-in yuxarı qalxmasını dayandırır

    if (!isSaved) {
      addRoutine(data); // Rutini əlavə et
    }
  };

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
        {/* Qara rəngli qradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* --- SAVE BUTTON (YENİ) --- */}
      <button 
        onClick={handleSave}
        className={`absolute top-4 right-4 z-20 p-3 rounded-full backdrop-blur-md border transition-all duration-300 group/btn
          ${isSaved 
            ? 'bg-neon-green text-black border-neon-green' 
            : 'bg-black/30 text-white border-white/20 hover:bg-neon-green hover:text-black hover:border-neon-green'
          }`}
        title={isSaved ? "Already in your plans" : "Save to My Plans"}
      >
        {isSaved ? <FaCheck size={18} /> : <FaBookmark size={18} />}
      </button>

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