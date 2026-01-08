import React from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const ExerciseCard = ({ exercise, dayId, onRemove, onUpdateSets }) => {
  
  // Set əlavə etmək
  const addSet = () => {
    const newSet = { 
      id: Date.now() + Math.random(), 
      kg: 0, 
      reps: 10, 
      rest: 60 
    };
    const updatedSets = [...exercise.sets, newSet];
    onUpdateSets(dayId, exercise.uniqueId, updatedSets);
  };

  // Seti silmək
  const removeSet = (setId) => {
    if (exercise.sets.length === 1) return; // Ən azı 1 set qalmalıdır
    const updatedSets = exercise.sets.filter(s => s.id !== setId);
    onUpdateSets(dayId, exercise.uniqueId, updatedSets);
  };

  // Set dəyərini dəyişmək (Kg, Reps, Rest)
  const updateSetField = (setId, field, value) => {
    const updatedSets = exercise.sets.map(s => 
      s.id === setId ? { ...s, [field]: parseFloat(value) || 0 } : s
    );
    onUpdateSets(dayId, exercise.uniqueId, updatedSets);
  };

  return (
    <div className="bg-[#202024] rounded-xl border border-white/5 overflow-hidden mb-3 animate-in slide-in-from-bottom-2">
      
      {/* Header: Name & Remove */}
      <div className="flex justify-between items-center p-4 bg-[#27272a] border-b border-white/5">
        <div className="flex items-center gap-3">
          <img src={exercise.image} alt="" className="w-8 h-8 rounded object-cover opacity-80" />
          <h4 className="font-bold text-sm text-white">{exercise.name}</h4>
        </div>
        <button 
          onClick={() => onRemove(dayId, exercise.uniqueId)} 
          className="text-zinc-600 hover:text-red-500 transition-colors"
        >
          <FaTrash size={12} />
        </button>
      </div>

      {/* Sets Table (Jefit Style) */}
      <div className="p-2">
        {/* Table Head */}
        <div className="grid grid-cols-10 gap-2 mb-2 px-2 text-[10px] uppercase font-bold text-zinc-500 text-center">
          <div className="col-span-1">Set</div>
          <div className="col-span-3">Kg</div>
          <div className="col-span-3">Reps</div>
          <div className="col-span-2">Rest</div>
          <div className="col-span-1"></div>
        </div>

        {/* Sets Rows */}
        <div className="space-y-1">
          {exercise.sets.map((set, index) => (
            <div key={set.id} className="grid grid-cols-10 gap-2 items-center px-2 py-1">
              
              {/* Set Number */}
              <div className="col-span-1 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-400 text-xs flex items-center justify-center font-mono">
                  {index + 1}
                </div>
              </div>

              {/* KG Input */}
              <div className="col-span-3">
                <input 
                  type="number" 
                  className="w-full bg-black/40 border border-zinc-700 rounded text-center text-sm text-white py-1 focus:border-neon-green focus:outline-none transition-colors font-mono"
                  placeholder="0"
                  value={set.kg === 0 ? '' : set.kg}
                  onChange={(e) => updateSetField(set.id, 'kg', e.target.value)}
                />
              </div>

              {/* Reps Input */}
              <div className="col-span-3">
                <input 
                  type="number" 
                  className="w-full bg-black/40 border border-zinc-700 rounded text-center text-sm text-white py-1 focus:border-neon-green focus:outline-none transition-colors font-mono"
                  value={set.reps}
                  onChange={(e) => updateSetField(set.id, 'reps', e.target.value)}
                />
              </div>

               {/* Rest Input */}
               <div className="col-span-2">
                <input 
                  type="number" 
                  className="w-full bg-black/40 border border-zinc-700 rounded text-center text-xs text-zinc-400 py-1 focus:border-neon-green focus:outline-none transition-colors font-mono"
                  value={set.rest}
                  onChange={(e) => updateSetField(set.id, 'rest', e.target.value)}
                />
              </div>

              {/* Delete Set Button */}
              <div className="col-span-1 flex justify-center">
                <button 
                  onClick={() => removeSet(set.id)}
                  className="text-zinc-700 hover:text-red-500 transition-colors disabled:opacity-0"
                  disabled={exercise.sets.length === 1}
                >
                  <FaMinus size={10} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Add Set Button */}
        <button 
          onClick={addSet}
          className="w-full mt-3 py-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-neon-green hover:bg-zinc-800/50 rounded transition-all flex items-center justify-center gap-2"
        >
          <FaPlus size={10} /> Add Set
        </button>

      </div>
    </div>
  );
};

export default ExerciseCard;