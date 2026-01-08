import React, { useState, useEffect } from 'react';
import { FaTrash, FaDumbbell, FaPen, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ExerciseCard from './ExerciseCard';

const DayContainer = ({ day, isActive, onClick, onDropExercise, onRemoveExercise, onUpdateSets, onRenameDay, onDeleteDay }) => {
  const [isOver, setIsOver] = useState(false);
  
  // YENİ: Accordion State (Default olaraq açıq olsun)
  const [isExpanded, setIsExpanded] = useState(true);

  // YENİ: Əgər bu gün "Aktiv" seçilirsə, mütləq açılsın (UX üçün vacibdir)
  useEffect(() => {
    if (isActive) {
      setIsExpanded(true);
    }
  }, [isActive]);

  // Drag Events
  const handleDragOver = (e) => { e.preventDefault(); setIsOver(true); };
  const handleDragLeave = () => { setIsOver(false); };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsOver(false);
    const data = e.dataTransfer.getData("exercise");
    // Drop edəndə həm də bu günü "Aktiv" edirik və açırıq
    if (data) {
        setIsExpanded(true); 
        onDropExercise(day.id, JSON.parse(data));
    }
  };

  // Accordion Toggle (Inputa basanda işləməsin deyə ayrıca funksiya)
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
    // Əgər bağlayırıqsa, aktivliyi itirməmək üçün onClick çağırmırıq. 
    // Amma açırıqsa, bu günü aktiv etmək yaxşı olar:
    if (!isExpanded) {
        onClick(day.id);
    }
  };

  return (
    <div 
      // Click edəndə bu günü "Aktiv" edirik (Inputdan kənar yerə basanda)
      onClick={() => onClick(day.id)}
      
      // Drop Events
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      
      // STİL
      className={`border rounded-xl transition-all duration-300 mb-4 overflow-hidden ${
        isActive 
          ? 'bg-[#121212] border-neon-green shadow-[0_0_20px_rgba(34,197,94,0.1)]' 
          : isOver 
            ? 'bg-zinc-900 border-zinc-600'
            : 'bg-[#121212] border-white/5 hover:border-white/10'
      }`}
    >
      
      {/* --- DAY HEADER (Clickable for Accordion) --- */}
      <div 
        className="flex justify-between items-center p-4 cursor-pointer select-none bg-zinc-900/30"
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-3 flex-1">
            {/* Chevron Icon */}
            <div className={`text-neon-green transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                <FaChevronDown size={12} />
            </div>

            {/* Day Name Input (StopPropagation vacibdir, yoxsa accordion bağlanar) */}
            <input 
                type="text" 
                className={`bg-transparent text-lg font-black italic w-full focus:outline-none transition-colors ${isActive ? 'text-white' : 'text-zinc-500'}`}
                placeholder="Name this day..."
                value={day.name}
                onClick={(e) => {
                    e.stopPropagation(); // Inputa basanda accordion bağlanmasın
                    onClick(day.id);     // Amma gün aktiv olsun
                }}
                onChange={(e) => onRenameDay(day.id, e.target.value)}
            />
        </div>

        <div className="flex items-center gap-4">
            {/* Summary Text (Bağlı olanda görünür) */}
            {!isExpanded && (
                <span className="text-xs font-mono text-zinc-600 uppercase">
                    {day.exercises.length} Exercises
                </span>
            )}

            {/* Delete Button */}
            <button 
                onClick={(e) => { e.stopPropagation(); onDeleteDay(day.id); }} 
                className="text-zinc-600 hover:text-red-500 transition-colors p-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
            >
                <FaTimes />
            </button>
        </div>
      </div>

      {/* --- EXERCISE LIST (Accordion Body) --- */}
      <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 pt-0">
            {/* Active Indicator Line */}
            {isActive && <div className="w-full h-[1px] bg-gradient-to-r from-neon-green/50 to-transparent mb-4"></div>}

            <div className="min-h-[50px]">
                {day.exercises.length === 0 ? (
                <div className="py-6 border-2 border-dashed border-zinc-800/50 rounded-lg flex flex-col items-center justify-center text-zinc-700">
                    <p className="text-[10px] uppercase font-bold tracking-widest">
                    {isActive ? "Ready for Drop" : "Select to Activate"}
                    </p>
                </div>
                ) : (
                day.exercises.map((item) => (
                    <ExerciseCard 
                    key={item.uniqueId} 
                    exercise={item}
                    dayId={day.id}
                    onRemove={onRemoveExercise}
                    onUpdateSets={onUpdateSets}
                    />
                ))
                )}
            </div>
        </div>
      </div>

    </div>
  );
};

export default DayContainer;