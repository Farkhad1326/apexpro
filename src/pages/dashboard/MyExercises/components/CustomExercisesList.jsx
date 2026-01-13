// src/pages/dashboard/MyExercises/components/CustomExercisesList.jsx
import React from 'react';
import { Dumbbell, Trash2, Tag, Activity } from 'lucide-react';
import { useExercise } from '../../../../context/ExerciseContext'; // Path-ə diqqət et

const CustomExercisesList = () => {
    const { customExercises, deleteCustomExercise } = useExercise();

    if (customExercises.length === 0) {
        return (
            <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-white/5 border-dashed">
                <Dumbbell className="mx-auto text-zinc-700 mb-4" size={48} />
                <h3 className="text-xl font-bold text-white">No Custom Exercises</h3>
                <p className="text-zinc-500">Create your own exercises to add them to your routines.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4">
            {customExercises.map((ex) => (
                <div key={ex.id} className="bg-[#121212] border border-white/5 rounded-xl p-5 hover:border-lime-400/30 transition-all group relative">
                    {/* Delete Button */}
                    <button
                        onClick={() => {
                            if (window.confirm('Delete this exercise?')) deleteCustomExercise(ex.id)
                        }}
                        className="absolute top-4 right-4 text-zinc-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    >
                        <Trash2 size={18} />
                    </button>

                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center text-lime-400">
                            <Dumbbell size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">{ex.name}</h3>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">Custom</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm border-b border-white/5 pb-2">
                            <span className="text-zinc-500 flex items-center gap-2"><Activity size={14} /> Main Muscle</span>
                            <span className="text-zinc-200 font-medium">{ex.bodyPart || "General"}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm border-b border-white/5 pb-2">
                            <span className="text-zinc-500 flex items-center gap-2"><Tag size={14} /> Equipment</span>
                            <span className="text-zinc-200 font-medium">{ex.equipment || "None"}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomExercisesList;