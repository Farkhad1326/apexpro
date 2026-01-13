// src/pages/dashboard/MyExercises/components/ExercisesHeader.jsx
import React from 'react';
import { Plus } from 'lucide-react';

const ExercisesHeader = ({ onCreate }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Exercise Library</h1>
                <p className="text-zinc-500 text-sm">Manage your custom exercises or browse the database.</p>
            </div>

            <button
                onClick={onCreate}
                className="bg-lime-400 cursor-pointer text-black px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-lime-500 transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)] active:scale-95"
            >
                <Plus size={20} strokeWidth={3} />
                Create Custom Exercise
            </button>
        </div>
    );
};

export default ExercisesHeader;