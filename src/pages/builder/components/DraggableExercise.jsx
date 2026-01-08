import React from 'react';
import { FaPlus } from 'react-icons/fa';

const DraggableExercise = ({ exercise, onAdd }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("exercise", JSON.stringify(exercise));
    e.dataTransfer.effectAllowed = "copy";
  };

  return (
    <div 
      draggable="true"
      onDragStart={handleDragStart}
      className="flex items-center gap-3 p-3 rounded-lg bg-[#18181b] border border-white/5 hover:border-neon-green/50 cursor-grab active:cursor-grabbing transition-all group"
    >
      <div className="w-12 h-12 bg-zinc-900 rounded overflow-hidden shrink-0 pointer-events-none">
        <img src={exercise.image} alt={exercise.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100" />
      </div>
      <div className="flex-1 min-w-0 pointer-events-none">
        <h4 className="font-bold text-sm text-zinc-300 group-hover:text-white truncate">{exercise.name}</h4>
        <p className="text-[10px] text-zinc-500 uppercase">{exercise.target}</p>
      </div>
      {/* Bu düyməyə basanda hərəkət avtomatik "Day 1"-ə düşəcək (Logic-də tənzimləyəcəyik) */}
      <button 
        onClick={() => onAdd(exercise)}
        className="w-8 h-8 flex items-center justify-center rounded bg-zinc-800 text-neon-green hover:bg-neon-green hover:text-black transition-all"
      >
        <FaPlus size={12} />
      </button>
    </div>
  );
};

export default DraggableExercise;