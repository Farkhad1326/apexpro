// src/pages/dashboard/MyExercises/components/ExercisesTabs.jsx
import React from 'react';

const ExercisesTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex border-b border-zinc-800 mb-6">
            <button
                onClick={() => setActiveTab('custom')}
                className={`px-6 py-3 cursor-pointer text-sm font-bold transition-all relative ${activeTab === 'custom' ? 'text-lime-400' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
                My Custom Exercises
                {activeTab === 'custom' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.5)]" />}
            </button>
            <button
                onClick={() => setActiveTab('database')}
                className={`px-6 py-3 cursor-pointer text-sm font-bold transition-all relative ${activeTab === 'database' ? 'text-lime-400' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
                Exercise Database
                {activeTab === 'database' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.5)]" />}
            </button>
        </div>
    );
};

export default ExercisesTabs;