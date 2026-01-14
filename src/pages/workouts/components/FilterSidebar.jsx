import React from 'react';
import { FaDumbbell, FaFire, FaBolt, FaRunning, FaTimes } from 'react-icons/fa';
import { BiBody } from 'react-icons/bi';

// Shadcn Button (sənin path qaydana uyğun)
import { Button } from "@/components/ui/shared/button";

// Sabit Kateqoriyalar Siyahısı
const CATEGORIES = [
  { name: "All", icon: <FaDumbbell /> },
  { name: "Building Muscle", icon: <BiBody /> },
  { name: "Fat Loss", icon: <FaFire /> },
  { name: "Strength", icon: <FaBolt /> },
  { name: "Endurance", icon: <FaRunning /> },
  { name: "Flexibility", icon: <BiBody /> },
];

const FilterSidebar = ({ selectedGoal, setSelectedGoal, isFilterActive, resetFilters }) => {
  return (
    <aside className="lg:w-1/4 lg:sticky lg:top-32 h-fit space-y-10">
      
      {/* Category Filter */}
      <div>
        {/* Header with RESET Button */}
        <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-2">
          <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
            <span className="text-neon-green">01.</span> TARGET
          </h3>

          {/* YALNIZ FILTR AKTIV OLANDA GÖRÜNÜR */}
          {isFilterActive && (
            <Button
              onClick={resetFilters}
              variant="outline"
              size="sm"
              className="text-[10px] font-bold bg-red-500/10 text-red-500 border border-red-500/20 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition-all flex items-center gap-1 animate-pulse h-auto"
            >
              <FaTimes />
              RESET SYSTEM
            </Button>
          )}
        </div>
        
        <div className="flex flex-col space-y-2 border-l border-zinc-800 ml-2">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.name}
              onClick={() => setSelectedGoal(cat.name)}
              variant="ghost"
              className={`group relative pl-6 py-3 text-left text-sm uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-3 justify-start h-auto rounded-none w-full ${
                selectedGoal === cat.name 
                  ? 'text-white bg-transparent hover:bg-transparent' 
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-transparent'
              }`}
            >
              {/* Active Indicator Line (Neon Bar) */}
              <span className={`absolute left-0 top-0 bottom-0 w-[3px] bg-neon-green transition-all duration-300 ${
                selectedGoal === cat.name ? 'h-full shadow-[0_0_10px_#ccff00]' : 'h-0'
              }`}></span>

              <span className={`text-lg ${selectedGoal === cat.name ? 'text-neon-green' : 'opacity-50'}`}>
                {cat.icon}
              </span>
              {cat.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Gələcəkdə bura başqa filtrlər də (məs: Equipment) əlavə edə bilərik */}
    </aside>
  );
};

export default FilterSidebar;