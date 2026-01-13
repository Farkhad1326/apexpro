import React, { useState } from 'react';

const MuscleMap = ({ selectedMuscle, onSelect, readOnly = false }) => {
    const [view, setView] = useState('front'); // 'front' or 'back'

    // Rəngləndirmə funksiyası
    const getColor = (muscleName) => {
        if (selectedMuscle === muscleName) return "#a3e635"; // Neon Green (Seçili)
        return "#3f3f46"; // Zinc-700 (Seçilməyib)
    };

    const handleClick = (muscleName) => {
        if (!readOnly && onSelect) {
            onSelect(muscleName);
        }
    };

    const commonProps = {
        stroke: "#18181b", // Zinc-900 (Sərhəd rəngi)
        strokeWidth: "2",
        className: readOnly ? "" : "hover:opacity-80 cursor-pointer transition-colors duration-200"
    };

    return (
        <div className="flex flex-col items-center">
            
            {/* View Toggles */}
            <div className="flex bg-zinc-900 p-1 rounded-lg mb-4 border border-white/10">
                <button 
                    type="button"
                    onClick={() => setView('front')}
                    className={`px-4 py-1 text-xs font-bold uppercase rounded transition-all ${view === 'front' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
                >
                    Front
                </button>
                <button 
                    type="button"
                    onClick={() => setView('back')}
                    className={`px-4 py-1 text-xs font-bold uppercase rounded transition-all ${view === 'back' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
                >
                    Back
                </button>
            </div>

            {/* SVG BODY */}
            <svg 
                viewBox="0 0 200 300" 
                className="w-48 h-72 drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
            >
                {view === 'front' ? (
                    <g transform="translate(50, 0)">
                        {/* HEAD (Sadəcə dekorativ) */}
                        <circle cx="50" cy="25" r="15" fill="#27272a" />

                        {/* SHOULDERS (Deltoids) */}
                        <path 
                            d="M 20 45 Q 10 50 10 70 L 25 70 L 30 50 Z" 
                            fill={getColor("Shoulders")} 
                            onClick={() => handleClick("Shoulders")} 
                            {...commonProps} 
                        />
                        <path 
                            d="M 80 45 Q 90 50 90 70 L 75 70 L 70 50 Z" 
                            fill={getColor("Shoulders")} 
                            onClick={() => handleClick("Shoulders")} 
                            {...commonProps} 
                        />

                        {/* CHEST (Pectorals) */}
                        <path 
                            d="M 30 50 L 70 50 L 75 80 L 50 90 L 25 80 Z" 
                            fill={getColor("Chest")} 
                            onClick={() => handleClick("Chest")} 
                            {...commonProps} 
                        />

                        {/* ARMS (Biceps/Triceps/Forearms) */}
                        <path 
                            d="M 10 70 L 5 120 L 20 120 L 25 70 Z" 
                            fill={getColor("Arms")} 
                            onClick={() => handleClick("Arms")} 
                            {...commonProps} 
                        />
                         <path 
                            d="M 90 70 L 95 120 L 80 120 L 75 70 Z" 
                            fill={getColor("Arms")} 
                            onClick={() => handleClick("Arms")} 
                            {...commonProps} 
                        />

                        {/* ABS (Abdominals) */}
                        <path 
                            d="M 35 90 L 65 90 L 65 140 L 35 140 Z" 
                            fill={getColor("Abs")} 
                            onClick={() => handleClick("Abs")} 
                            {...commonProps} 
                        />

                        {/* LEGS (Quadriceps) */}
                        <path 
                            d="M 35 140 L 65 140 L 65 160 L 90 160 L 85 240 L 55 240 L 50 170 L 45 240 L 15 240 L 10 160 L 35 160 Z" 
                            fill={getColor("Legs")} 
                            onClick={() => handleClick("Legs")} 
                            {...commonProps} 
                        />
                    </g>
                ) : (
                    <g transform="translate(50, 0)">
                        {/* HEAD */}
                        <circle cx="50" cy="25" r="15" fill="#27272a" />

                        {/* BACK (Traps & Lats) */}
                        <path 
                            d="M 30 50 L 70 50 L 80 100 L 50 140 L 20 100 Z" 
                            fill={getColor("Back")} 
                            onClick={() => handleClick("Back")} 
                            {...commonProps} 
                        />

                        {/* SHOULDERS (Rear Delts) */}
                        <path 
                            d="M 20 50 L 10 60 L 10 80 L 30 60 Z" 
                            fill={getColor("Shoulders")} 
                            onClick={() => handleClick("Shoulders")} 
                            {...commonProps} 
                        />
                        <path 
                            d="M 80 50 L 90 60 L 90 80 L 70 60 Z" 
                            fill={getColor("Shoulders")} 
                            onClick={() => handleClick("Shoulders")} 
                            {...commonProps} 
                        />

                         {/* ARMS (Triceps) */}
                         <path 
                            d="M 10 80 L 5 120 L 20 120 L 25 80 Z" 
                            fill={getColor("Arms")} 
                            onClick={() => handleClick("Arms")} 
                            {...commonProps} 
                        />
                         <path 
                            d="M 90 80 L 95 120 L 80 120 L 75 80 Z" 
                            fill={getColor("Arms")} 
                            onClick={() => handleClick("Arms")} 
                            {...commonProps} 
                        />

                        {/* LEGS (Hamstrings/Glutes) */}
                        <path 
                            d="M 35 140 L 65 140 L 70 160 L 90 160 L 85 240 L 55 240 L 50 170 L 45 240 L 15 240 L 10 160 L 30 160 Z" 
                            fill={getColor("Legs")} 
                            onClick={() => handleClick("Legs")} 
                            {...commonProps} 
                        />
                    </g>
                )}
            </svg>
            
            <p className="mt-2 text-xs text-zinc-500 font-mono">
                {selectedMuscle ? `Target: ${selectedMuscle}` : "Select a muscle group"}
            </p>
        </div>
    );
};

export default MuscleMap;