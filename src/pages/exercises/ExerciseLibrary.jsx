import React, { useState, useEffect } from 'react';
import { exercises } from '../../data/exercises'; // Sənin o faylın!
import { FaSearch, FaDumbbell, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ITEMS_PER_PAGE = 24;

const ExerciseLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  // Axtarış Məntiqi
  useEffect(() => {
    const results = exercises.filter(ex =>
      ex.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExercises(results);
    setCurrentPage(1); // Axtarış edəndə birinci səhifəyə qayıt
  }, [searchTerm]);

  // Pagination Məntiqi
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentExercises = filteredExercises.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredExercises.length / ITEMS_PER_PAGE);

  // Səhifə dəyişəndə yuxarı qalx
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-transparent text-white pt-24 pb-20 font-sans selection:bg-neon-green selection:text-black">

      {/* --- HEADER & SEARCH --- */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h4 className="text-neon-green font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
            /// Knowledge Base
        </h4>
        <h1 className="text-5xl md:text-6xl font-black italic mb-8">
          EXERCISE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-600">INDEX</span>
        </h1>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-green to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative flex items-center bg-zinc-900 rounded-lg border border-white/10 p-1">
            <FaSearch className="text-zinc-500 ml-4" />
            <input
              type="text"
              placeholder="Search movement (e.g. Bench Press)..."
              className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-3 placeholder-zinc-600 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* --- GRID --- */}
      <div className="container mx-auto px-4">

        {/* Count Info */}
        <div className="mb-6 text-zinc-500 text-sm font-mono text-right border-b border-white/5 pb-2">
          SHOWING {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredExercises.length)} OF {filteredExercises.length} UNITS
        </div>

        {currentExercises.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentExercises.map((ex) => (
              <div key={ex.id} className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-neon-green/50 transition-all duration-300 hover:-translate-y-1">

                {/* Image Container */}
                <div className="h-48 overflow-hidden bg-black relative">
                  <img
                    src={ex.image}
                    alt={ex.name}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  {/* Badge */}
                  <div className="absolute top-2 left-2 bg-black/80 backdrop-blur text-neon-green text-[10px] font-black px-2 py-1 rounded border border-white/10 uppercase tracking-wider">
                    {ex.target || "General"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-zinc-200 group-hover:text-white transition-colors line-clamp-2 min-h-[3rem]">
                    {ex.name}
                  </h3>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span>ID: #{ex.id}</span>
                    <FaDumbbell className="group-hover:text-neon-green transition-colors" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-zinc-600">No exercises found.</h3>
          </div>
        )}

        {/* --- PAGINATION --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neon-green hover:text-black transition-colors"
            >
              <FaChevronLeft />
            </button>

            <span className="font-mono text-neon-green font-bold">
              PAGE {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neon-green hover:text-black transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ExerciseLibrary;