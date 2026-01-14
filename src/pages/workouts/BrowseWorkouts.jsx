import React, { useState, useEffect } from 'react';
import { workouts } from '../../data/workouts';
import WorkoutCard from '../workouts/components/WorkoutCard';
import FilterSidebar from '../workouts/components/FilterSidebar';
import ProtocolRules from '../workouts/components/ProtocolRules';
import { FaSearch, FaSortAmountDown, FaTimes } from 'react-icons/fa';

// Shadcn komponentləri (sənin path qaydasına uyğun)
import { Input } from "@/components/ui/shared/input";
import { Button } from "@/components/ui/shared/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shared/select";

const SORT_OPTIONS = [
  { label: "Recommended", value: "default" },
  { label: "Rating: High to Low", value: "rating-desc" },
  { label: "Difficulty: Easy to Hard", value: "level-asc" },
  { label: "Difficulty: Hard to Easy", value: "level-desc" },
];

const levelWeights = { "Beginner": 1, "Intermediate": 2, "Advanced": 3, "All": 0 };

const BrowseWorkouts = ({ embedded = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);

  const isFilterActive = searchTerm !== "" || selectedGoal !== "All" || sortBy !== "default";

  useEffect(() => {
    let result = [...workouts];

    if (searchTerm) {
      result = result.filter(w => w.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (selectedGoal !== "All") {
      result = result.filter(w => w.meta.goal.includes(selectedGoal));
    }

    switch (sortBy) {
      case 'rating-desc':
        result.sort((a, b) => b.meta.rating - a.meta.rating);
        break;
      case 'level-asc':
        result.sort((a, b) => levelWeights[a.meta.level] - levelWeights[b.meta.level]);
        break;
      case 'level-desc':
        result.sort((a, b) => levelWeights[b.meta.level] - levelWeights[a.meta.level]);
        break;
      default:
        break;
    }
    setFilteredWorkouts(result);
  }, [searchTerm, selectedGoal, sortBy]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedGoal("All");
    setSortBy("default");
  };

  return (
    <div className={`${embedded ? "w-full" : "min-h-screen bg-black text-white pb-20 relative overflow-hidden selection:bg-neon-green selection:text-black"}`}>
      
      {!embedded && (
        <div className="fixed top-20 -left-20 z-0 pointer-events-none opacity-[0.03]">
          <h1 
            className="text-[30vw] font-black italic tracking-tighter leading-none"
            style={{ 
              color: 'transparent', 
              WebkitTextStroke: '2px #ccff00' 
            }}
          >
            APEX
          </h1>
        </div>
      )}

      <div className={`${embedded ? "w-full" : "container mx-auto px-4 relative z-10"}`}>
        
        <div className={`${embedded ? "pt-4 pb-8" : "pt-24 pb-16"} max-w-4xl`}>
          {!embedded && (
            <>
              <h4 className="text-neon-green font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
                /// Workout Library
              </h4>
              <h1 className="text-5xl md:text-7xl font-black text-white italic mb-8 leading-tight uppercase">
                Forge Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-green-600">
                  Legacy
                </span>
              </h1>
            </>
          )}

          {/* Search – Shadcn Input */}
          <div className="relative group max-w-2xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-green to-emerald-500 rounded transition duration-500 opacity-30 group-hover:opacity-100 blur"></div>
            <div className="relative flex items-center bg-zinc-900 rounded p-1">
              <div className="pl-4 pr-2 text-gray-400">
                <FaSearch size={20} />
              </div>
              <Input
                type="text"
                placeholder="Search protocols (e.g. Hypertrophy)..."
                className="w-full bg-transparent text-white px-2 py-4 text-lg font-medium focus:outline-none placeholder-zinc-600 border-none h-auto focus:ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="px-4 text-zinc-500 hover:text-white transition-colors">
                  <FaTimes />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className={`flex flex-col lg:flex-row ${embedded ? "gap-8" : "gap-16"} pt-8 mb-20`}>
          
          <div className="lg:w-1/4">
            <FilterSidebar 
              selectedGoal={selectedGoal}
              setSelectedGoal={setSelectedGoal}
              isFilterActive={isFilterActive}
              resetFilters={resetFilters}
            />
          </div>

          <main className="lg:w-3/4">
            
            <div className="flex flex-col sm:flex-row justify-between items-end border-b border-zinc-800 pb-6 mb-10 gap-4">
              <div>
                <p className="text-zinc-400 font-mono text-xs mb-1 uppercase tracking-widest">System Results</p>
                <p className="text-3xl font-bold text-white uppercase tracking-tighter italic">
                  {filteredWorkouts.length} <span className="text-zinc-600 text-lg not-italic">Protocols</span>
                </p>
              </div>

              {/* Sort – Shadcn Select */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger 
                  className={`flex items-center gap-3 bg-zinc-900/80 border px-5 py-3 rounded transition-colors w-[220px] h-auto ${
                    sortBy !== 'default' ? 'border-neon-green/50 text-white' : 'border-zinc-700 text-zinc-400'
                  }`}
                >
                  <FaSortAmountDown className={sortBy !== 'default' ? "text-neon-green" : ""} />
                  <SelectValue placeholder="Sort By" className="text-[10px] font-black uppercase tracking-widest" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-300">
                  {SORT_OPTIONS.map(opt => (
                    <SelectItem 
                      key={opt.value} 
                      value={opt.value}
                      className="text-xs uppercase focus:bg-zinc-800 focus:text-white"
                    >
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {filteredWorkouts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
                {filteredWorkouts.map(program => (
                  <WorkoutCard key={program.id} data={program} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-dashed border-zinc-800 rounded-lg bg-zinc-900/20">
                <h3 className="text-2xl font-black text-zinc-300 mb-2 uppercase italic">System Offline</h3>
                <p className="text-zinc-500 mb-6">No protocols matched your query.</p>
                <Button 
                  onClick={resetFilters}
                  className="px-8 py-3 bg-neon-green text-black font-black uppercase tracking-widest hover:bg-white transition-all transform active:scale-95 h-auto text-xs"
                >
                  Reset Parameters
                </Button>
              </div>
            )}
          </main>
        </div>

        {!embedded && <ProtocolRules />}

      </div>
    </div>
  );
};

export default BrowseWorkouts;