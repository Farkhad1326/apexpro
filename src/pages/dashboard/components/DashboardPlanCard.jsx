import React, { useState } from 'react';
import { ChevronDown, Calendar, Dumbbell, Trash2, Info } from 'lucide-react';
import { useRoutine } from '../../../context/RoutineContext'; // Context yolu

const DashboardPlanCard = ({ routine, isCustom }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { deleteRoutine } = useRoutine();

    // Təhlükəsizlik üçün
    const schedule = routine.schedule || [];

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleDelete = (e) => {
        e.stopPropagation();
        if(window.confirm("Are you sure you want to remove this plan?")) {
            deleteRoutine(routine.id);
        }
    };

    return (
        <div className="w-full bg-[#121212] border border-white/5 rounded-2xl overflow-hidden mb-4 transition-all duration-300 hover:border-white/10">
            
            {/* --- HEADER --- */}
            <div 
                onClick={toggleOpen}
                className="flex items-center p-4 cursor-pointer group relative overflow-hidden"
            >
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${isCustom ? 'bg-neon-green' : 'bg-blue-500'}`} />

                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 mr-4 border border-white/10">
                    <img 
                        src={routine.image || routine.thumbnail} 
                        alt={routine.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        {isCustom && <span className="text-[10px] font-bold uppercase bg-neon-green/20 text-neon-green px-2 py-0.5 rounded">Custom</span>}
                        {!isCustom && <span className="text-[10px] font-bold uppercase bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">Library</span>}
                        <h3 className="text-lg font-bold text-white truncate">{routine.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {routine.meta?.days || schedule.length} Days</span>
                        <span className="flex items-center gap-1"><Dumbbell size={12} /> {routine.meta?.goal || "General"}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 ml-4">
                    <button 
                        onClick={handleDelete}
                        className="p-2 text-zinc-600 hover:text-red-500 transition-colors z-10"
                        title="Delete Plan"
                    >
                        <Trash2 size={18} />
                    </button>
                    <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white/10 text-white' : 'text-zinc-500'}`}>
                        <ChevronDown size={20} />
                    </div>
                </div>
            </div>

            {/* --- BODY --- */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 pt-0 border-t border-white/5 bg-[#0a0a0a]">
                    
                    <div className="flex gap-3 p-3 mb-4 bg-white/5 rounded-lg border border-white/5">
                        <Info className="text-zinc-400 flex-shrink-0 mt-0.5" size={16} />
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            <strong className="text-zinc-200 block mb-1">Instruction:</strong>
                            Focus on form over weight. Keep rest periods consistent (60-90s). Warm up properly before starting the first compound movement.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {schedule.map((day, index) => (
                            <div key={day.id || index} className="relative pl-4 border-l border-white/10">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-700 ring-4 ring-[#0a0a0a]" />
                                <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">{day.name || `Day ${index + 1}`}</h4>
                                
                                {day.exercises && day.exercises.length > 0 ? (
                                    <div className="grid grid-cols-1 gap-2">
                                        {day.exercises.map((ex, i) => (
                                            <div key={i} className="flex items-center justify-between bg-zinc-900/50 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded bg-black flex items-center justify-center text-xs font-bold text-zinc-500">
                                                        {i + 1}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-zinc-200">{ex.name}</p>
                                                        <p className="text-[10px] text-zinc-500 uppercase">{ex.muscle}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right text-xs font-mono text-zinc-400">
                                                    {ex.sets ? (
                                                        <span>{ex.sets.length} SETS × {ex.sets[0]?.reps || '10'} REPS</span>
                                                    ) : (
                                                        <span>3 SETS × 10 REPS</span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-xs text-zinc-600 italic">Rest Day or No exercises added.</p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardPlanCard;