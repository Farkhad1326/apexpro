import React, { useState, useMemo } from 'react';
import { Search, Database, Activity, Tag, ChevronDown, Info } from 'lucide-react';
import { useExercise } from '../../../../context/ExerciseContext';

// Modalın import edilməsi (Yolu yoxla, əgər dashboard/components içindədirsə bu yol düzdür)
import ExerciseDetailModal from '../../components/ExerciseDetailModal';

const DatabaseExercisesList = () => {
    const { databaseExercises } = useExercise();

    // State-lər
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(50); // İlk 50 dənəni göstər

    // YENİ: Seçilmiş hərəkət (Modalı açmaq üçün)
    const [selectedExercise, setSelectedExercise] = useState(null);

    // Kateqoriyalar
    const categories = ["All", "Chest", "Back", "Legs", "Shoulders", "Arms", "Abs", "Cardio"];

    // --- SMART FILTERING LOGIC ---
    const filteredData = useMemo(() => {
        return databaseExercises.filter(ex => {
            // 1. Axtarış
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = ex.name.toLowerCase().includes(searchLower);

            // 2. Kateqoriya
            let matchesCategory = true;
            if (filterCategory !== "All") {
                const targetMuscle = (ex.bodyPart || ex.target || "").toLowerCase();
                const selectedCat = filterCategory.toLowerCase();

                if (selectedCat === 'legs') {
                    matchesCategory = targetMuscle.includes('leg') ||
                        targetMuscle.includes('quad') ||
                        targetMuscle.includes('calv') ||
                        targetMuscle.includes('glute') ||
                        targetMuscle.includes('hamstring');
                } else if (selectedCat === 'arms') {
                    matchesCategory = targetMuscle.includes('arm') ||
                        targetMuscle.includes('bicep') ||
                        targetMuscle.includes('tricep');
                } else {
                    matchesCategory = targetMuscle.includes(selectedCat);
                }
            }

            return matchesSearch && matchesCategory;
        });
    }, [databaseExercises, searchTerm, filterCategory]);

    // "Load More" funksiyası
    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 50);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">

            {/* --- SEARCH & FILTER BAR --- */}
            <div className="flex flex-col md:flex-row gap-4 bg-[#121212] p-4 rounded-2xl border border-white/5 shadow-lg">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                    <input
                        type="text"
                        placeholder={`Search ${databaseExercises.length}+ exercises...`}
                        className="w-full bg-black border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-lime-400 focus:outline-none transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => {
                                setFilterCategory(cat);
                                setVisibleCount(50);
                            }}
                            className={`px-4 py-2 cursor-pointer rounded-xl text-sm font-bold whitespace-nowrap transition-all border ${filterCategory === cat
                                    ? 'bg-lime-400 text-black border-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.3)]'
                                    : 'bg-zinc-900 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- EXERCISE GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredData.length > 0 ? (
                    filteredData.slice(0, visibleCount).map((ex) => (
                        <div
                            key={ex.id || ex.name}
                            onClick={() => setSelectedExercise(ex)} // CLICK EVENTİ BURADA
                            className="bg-[#121212] border border-white/5 rounded-xl p-5 hover:border-lime-400/50 hover:bg-zinc-900/50 transition-all cursor-pointer group relative"
                        >

                            {/* Hover İkonu (Dekorativ) */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Info className="text-lime-400" size={20} />
                            </div>

                            {/* Header */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 overflow-hidden flex-shrink-0 border border-blue-500/20">
                                    {ex.image || ex.gifUrl ? (
                                        <img
                                            src={ex.image || ex.gifUrl}
                                            alt={ex.name}
                                            className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:opacity-100 transition-opacity"
                                            loading="lazy"
                                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} // Fallback logic
                                        />
                                    ) : (
                                        <Database size={24} />
                                    )}
                                </div>
                                <div className="min-w-0 pr-6">
                                    <h3 className="font-bold text-white text-lg truncate capitalize group-hover:text-lime-400 transition-colors">{ex.name}</h3>
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">Library</span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm border-b border-white/5 pb-2">
                                    <span className="text-zinc-500 flex items-center gap-2"><Activity size={14} /> Target</span>
                                    <span className="text-zinc-200 font-medium capitalize">{ex.bodyPart || ex.target || "General"}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm border-b border-white/5 pb-2">
                                    <span className="text-zinc-500 flex items-center gap-2"><Tag size={14} /> Equipment</span>
                                    <span className="text-zinc-200 font-medium capitalize">{ex.equipment || "None"}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center flex flex-col items-center">
                        <Database className="text-zinc-700 mb-4" size={48} />
                        <p className="text-zinc-400 text-lg">No exercises found.</p>
                        <p className="text-zinc-600 text-sm">Try adjusting your search or category.</p>
                    </div>
                )}
            </div>

            {/* --- LOAD MORE BUTTON --- */}
            {filteredData.length > visibleCount && (
                <div className="flex justify-center pt-6">
                    <button
                        onClick={handleLoadMore}
                        className="flex items-center gap-2 bg-zinc-900 border border-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-zinc-800 transition-all"
                    >
                        Load More Exercises <ChevronDown size={18} />
                    </button>
                </div>
            )}

            <div className="text-center text-zinc-600 text-xs pb-4">
                Showing {Math.min(visibleCount, filteredData.length)} of {filteredData.length} exercises
            </div>

            {/* --- EXERCISE DETAIL MODAL --- */}
            {selectedExercise && (
                <ExerciseDetailModal
                    exercise={selectedExercise}
                    onClose={() => setSelectedExercise(null)}
                    onAddToRoutine={(ex) => console.log("Add to routine clicked:", ex.name)}
                />
            )}
        </div>
    );
};

export default DatabaseExercisesList;