import React from 'react';
import { Clock, BarChart } from 'lucide-react';

const RoutineCard = ({ title, difficulty, duration, exerciseCount }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-lime-400 transition-all cursor-pointer group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition">{title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-bold ${
          difficulty === 'Advanced' ? 'bg-red-500/10 text-red-400' : 
          difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' : 
          'bg-green-500/10 text-green-400'
        }`}>
          {difficulty}
        </span>
      </div>
      
      <div className="flex items-center gap-4 text-zinc-400 text-sm">
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{duration} min</span>
        </div>
        <div className="flex items-center gap-1">
          <BarChart size={16} />
          <span>{exerciseCount} Exercises</span>
        </div>
      </div>
    </div>
  );
};

export default RoutineCard;