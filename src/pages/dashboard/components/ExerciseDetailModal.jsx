import React from 'react';
import { X, Play, Target, Dumbbell, Activity, Info, Plus } from 'lucide-react';
// MuscleMap-in yerini dəqiq yoxla. Əgər MyExercises içindədirsə, yolunu düzəltməli ola bilərik.
// Mən fərz edirəm ki, sən onu hələ MyExercises içində saxlamısan:
import MuscleMap from '../MyExercises/components/MuscleMap'; 

const ExerciseDetailModal = ({ exercise, onClose, onAddToRoutine }) => {
    if (!exercise) return null;

    // Badge Rəngləri
    const getDifficultyColor = (diff) => {
        switch(diff?.toLowerCase()) {
            case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
            default: return 'bg-zinc-800 text-zinc-400';
        }
    };

    return (
        <div className="fixed inset-0 z-[250] flex items-center justify-center px-4 animate-in fade-in duration-200">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
            
            {/* Modal Container */}
            <div className="relative bg-[#0f0f11] w-full max-w-4xl h-[90vh] md:h-auto md:max-h-[85vh] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
                
                {/* --- HEADER --- */}
                <div className="flex items-center justify-between p-5 border-b border-white/5 bg-zinc-900/50 z-10">
                    <div>
                        <h2 className="text-2xl font-bold text-white leading-none mb-1">{exercise.name}</h2>
                        <span className="text-zinc-500 text-sm font-medium uppercase tracking-wider">{exercise.bodyPart} • {exercise.equipment}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Gələcəkdə "Add" funksiyası üçün */}
                        {onAddToRoutine && (
                             <button 
                                onClick={() => onAddToRoutine(exercise)}
                                className="hidden md:flex bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-lg font-bold items-center gap-2 transition-colors"
                             >
                                <Plus size={18} /> Add to Routine
                             </button>
                        )}
                        <button onClick={onClose} className="p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* --- SCROLLABLE CONTENT --- */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        {/* LEFT COLUMN: Visuals */}
                        <div className="lg:w-5/12 space-y-6">
                            
                            {/* Image / GIF Display */}
                            <div className="aspect-video w-full bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden relative group">
                                <img 
                                    src={exercise.image || "/placeholder_exercise.jpg"} 
                                    alt={exercise.name}
                                    className="w-full h-full object-cover mix-blend-screen opacity-90"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/400x300/18181b/52525b?text=No+Image"; // Fallback image
                                    }}
                                />
                                {/* Play Icon Overlay (Dekorativ) */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <Play fill="white" size={20} className="ml-1 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Muscle Map Integration */}
                            <div className="bg-zinc-900/50 rounded-2xl p-4 border border-white/5 flex flex-col items-center">
                                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Target Muscles</span>
                                {/* ReadOnly rejimdə xəritəni göstəririk */}
                                <div className="scale-75 -my-4">
                                    <MuscleMap 
                                        selectedMuscle={exercise.bodyPart} 
                                        readOnly={true} 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Details */}
                        <div className="lg:w-7/12 space-y-8">
                            
                            {/* Tags Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <div className={`px-3 py-2 rounded-lg border text-xs font-bold uppercase flex flex-col items-center justify-center text-center gap-1 ${getDifficultyColor(exercise.difficulty)}`}>
                                    <Activity size={16} />
                                    {exercise.difficulty}
                                </div>
                                <div className="px-3 py-2 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase flex flex-col items-center justify-center text-center gap-1">
                                    <Target size={16} />
                                    {exercise.mechanics || "Compound"}
                                </div>
                                <div className="px-3 py-2 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase flex flex-col items-center justify-center text-center gap-1">
                                    <Dumbbell size={16} />
                                    {exercise.force || "Push"}
                                </div>
                            </div>

                            {/* Specific Target & Secondary */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <Target className="text-lime-400" size={20} /> Muscle Focus
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {/* Primary */}
                                    <span className="px-3 py-1 bg-lime-400/10 border border-lime-400/20 text-lime-400 rounded-full text-sm font-bold">
                                        {exercise.target}
                                    </span>
                                    {/* Secondary */}
                                    {exercise.secondaryMuscles?.map((muscle, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-400 rounded-full text-sm">
                                            {muscle}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Instructions */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-white">How to Perform</h3>
                                <div className="space-y-4 relative pl-4 border-l-2 border-zinc-800">
                                    {exercise.instructions?.map((step, idx) => (
                                        <div key={idx} className="relative">
                                            <span className="absolute -left-[21px] top-0.5 w-3 h-3 rounded-full bg-zinc-700 border-2 border-[#0f0f11]"></span>
                                            <p className="text-zinc-400 text-sm leading-relaxed">
                                                <span className="text-white font-bold mr-1">Step {idx + 1}:</span>
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pro Tips */}
                            {exercise.tips && exercise.tips.length > 0 && (
                                <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-5">
                                    <h4 className="text-blue-400 font-bold flex items-center gap-2 mb-3">
                                        <Info size={18} /> Pro Tips
                                    </h4>
                                    <ul className="space-y-2">
                                        {exercise.tips.map((tip, idx) => (
                                            <li key={idx} className="text-zinc-400 text-sm flex items-start gap-2">
                                                <span className="text-blue-500 mt-1">•</span> {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                
                {/* Mobile Footer Button */}
                {onAddToRoutine && (
                    <div className="md:hidden p-4 border-t border-white/5 bg-zinc-900/50">
                        <button 
                            onClick={() => onAddToRoutine(exercise)}
                            className="w-full bg-lime-400 text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                        >
                            <Plus size={20} /> Add to Routine
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExerciseDetailModal;