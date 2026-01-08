import React, { useState } from 'react';
import { exercises } from '../../data/exercises';
import { FaSearch, FaSave, FaPlus, FaLayerGroup, FaDumbbell, FaList } from 'react-icons/fa';
import Button from '../../components/ui/Button';

import DraggableExercise from './components/DraggableExercise';
import DayContainer from './components/DayContainer';

const RoutineBuilder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [workoutName, setWorkoutName] = useState("");
  
  // --- YENİ: MOBİL ÜÇÜN GÖRÜNÜŞ STATE-İ ---
  // 'builder' = Sağ tərəf (Proqram) görünür
  // 'library' = Sol tərəf (Axtarış) görünür
  const [mobileView, setMobileView] = useState('builder'); 

  // State: Günlər
  const [days, setDays] = useState([
    { id: 1, name: "Day 1", exercises: [] }
  ]);
  const [activeDayId, setActiveDayId] = useState(1);

  // Axtarış
  const filteredExercises = exercises.filter(ex => 
    ex.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- LOGIC ---

  const addDay = () => {
    if (days.length >= 7) return;
    const newId = Date.now();
    const newDay = { id: newId, name: `Day ${days.length + 1}`, exercises: [] };
    setDays([...days, newDay]);
    setActiveDayId(newId);
  };

  const addExerciseToActiveDay = (exercise) => {
    const newSet = { id: Date.now(), kg: 0, reps: 10, rest: 60 };
    const newEntry = {
      ...exercise,
      uniqueId: Date.now() + Math.random(),
      sets: [newSet, { ...newSet, id: Date.now() + 1 }, { ...newSet, id: Date.now() + 2 }]
    };

    setDays(days.map(day => {
      if (day.id === activeDayId) {
        return { ...day, exercises: [...day.exercises, newEntry] };
      }
      return day;
    }));

    // Mobildə hərəkət əlavə edəndən sonra avtomatik "Builder" görünüşünə qaytar
    // (İstəyə bağlıdır, istəməsən bu sətri silə bilərsən)
    if (window.innerWidth < 1024) {
        setMobileView('builder');
    }
  };

  const updateExerciseSets = (dayId, exerciseUniqueId, newSets) => {
    setDays(days.map(day => {
      if (day.id === dayId) {
        const updatedExercises = day.exercises.map(ex => 
          ex.uniqueId === exerciseUniqueId ? { ...ex, sets: newSets } : ex
        );
        return { ...day, exercises: updatedExercises };
      }
      return day;
    }));
  };

  const removeExercise = (dayId, uniqueId) => {
    setDays(days.map(day => 
      day.id === dayId 
        ? { ...day, exercises: day.exercises.filter(ex => ex.uniqueId !== uniqueId) } 
        : day
    ));
  };

  const deleteDay = (dayId) => {
    if (days.length === 1) return alert("You need at least one day.");
    const newDays = days.filter(d => d.id !== dayId);
    setDays(newDays);
    if (activeDayId === dayId) setActiveDayId(newDays[0].id);
  };

  const renameDay = (id, name) => {
    setDays(days.map(d => d.id === id ? { ...d, name } : d));
  };


  return (
    <div className="min-h-screen bg-transparent text-white pt-24 pb-20 px-4 font-sans selection:bg-neon-green selection:text-black flex flex-col h-screen">
      
      {/* --- HEADER --- */}
      {/* Flex-shrink-0 verdik ki, scroll edəndə bu hissə sıxılmasın */}
      <div className="container mx-auto mb-4 flex-shrink-0">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-4">
          <div>
            <h1 className="text-2xl md:text-5xl font-black italic uppercase text-white leading-none">
              Split <span className="text-neon-green">Builder</span>
            </h1>
          </div>
          <div className="w-full md:w-auto flex gap-3">
            <input 
              type="text" 
              placeholder="Split Name..." 
              className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-neon-green focus:outline-none w-full md:w-64"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
            />
            <Button variant="primary" size="md" onClick={() => console.log({ workoutName, days })}>
              <FaSave className="mr-2" /> Save
            </Button>
          </div>
        </div>

        {/* --- MOBILE TABS (YALNIZ MOBİLDƏ GÖRÜNÜR) --- */}
        <div className="flex lg:hidden bg-zinc-900 p-1 rounded-lg mt-4 mb-2">
            <button 
                onClick={() => setMobileView('builder')}
                className={`flex-1 py-2 text-xs font-black uppercase tracking-widest rounded flex items-center justify-center gap-2 transition-all ${mobileView === 'builder' ? 'bg-neon-green text-black' : 'text-zinc-500'}`}
            >
                <FaLayerGroup /> My Split
            </button>
            <button 
                onClick={() => setMobileView('library')}
                className={`flex-1 py-2 text-xs font-black uppercase tracking-widest rounded flex items-center justify-center gap-2 transition-all ${mobileView === 'library' ? 'bg-white text-black' : 'text-zinc-500'}`}
            >
                <FaList /> Exercises
            </button>
        </div>
      </div>

      {/* --- MAIN CONTENT (Auto height adjustment) --- */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden min-h-0 pb-4">
        
        {/* === LEFT: LIBRARY === */}
        {/* ŞƏRTİ GÖRÜNTÜ: Mobildə 'library' seçilibsə VƏ YA Desktopdursa ('lg:flex') görünür */}
        <div className={`
            lg:w-[35%] bg-[#0e0e0e] border border-white/5 rounded-2xl flex-col overflow-hidden h-full
            ${mobileView === 'library' ? 'flex w-full' : 'hidden lg:flex'}
        `}>
          <div className="p-4 border-b border-white/5 bg-zinc-900/30 flex-shrink-0">
            <div className="relative group">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-neon-green" />
              <input 
                type="text" 
                placeholder="Search database..." 
                className="w-full bg-[#18181b] border border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-sm focus:border-neon-green focus:outline-none transition-colors text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 custom-scrollbar space-y-2">
            {filteredExercises.slice(0, 50).map(ex => (
              <DraggableExercise 
                key={ex.id} 
                exercise={ex} 
                onAdd={addExerciseToActiveDay} 
              />
            ))}
            {/* Scroll-un sonu üçün boşluq */}
            <div className="h-10"></div>
          </div>
        </div>


        {/* === RIGHT: ACTIVE SPLIT AREA === */}
        {/* ŞƏRTİ GÖRÜNTÜ: Mobildə 'builder' seçilibsə VƏ YA Desktopdursa ('lg:flex') görünür */}
        <div className={`
            lg:w-[65%] flex-col h-full
            ${mobileView === 'builder' ? 'flex w-full' : 'hidden lg:flex'}
        `}>
           
           {/* Top Stats Bar */}
           <div className="flex items-center justify-between mb-4 px-2 flex-shrink-0">
             <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
               <FaLayerGroup /> {days.length} DAYS
             </div>
             
             {/* Mobildə "Exercise əlavə et" düyməsi - Kitabxanaya atır */}
             <button 
               onClick={() => setMobileView('library')}
               className="lg:hidden text-xs font-bold uppercase tracking-wider text-neon-green border border-neon-green/20 px-3 py-1 rounded-full"
             >
               + Add Exercise
             </button>

             {/* Desktopda "Gün əlavə et" */}
             <button 
               onClick={addDay}
               disabled={days.length >= 7}
               className="hidden lg:flex text-xs font-bold uppercase tracking-wider text-neon-green hover:text-white transition-colors items-center gap-1 disabled:opacity-50"
             >
               <FaPlus /> Add Day
             </button>
           </div>

           {/* Days List (Scrollable) */}
           <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">
             {days.map((day) => (
               <DayContainer 
                 key={day.id} 
                 day={day}
                 isActive={activeDayId === day.id}
                 onClick={setActiveDayId}
                 onDropExercise={(dayId, ex) => {
                   setActiveDayId(dayId);
                   addExerciseToActiveDay(ex);
                 }}
                 onRemoveExercise={removeExercise}
                 onUpdateSets={updateExerciseSets}
                 onRenameDay={renameDay}
                 onDeleteDay={deleteDay}
               />
             ))}
             
             {/* Empty State / Add Button */}
             <button 
                onClick={addDay}
                className="w-full py-6 border border-dashed border-zinc-800 rounded-xl text-zinc-600 hover:border-neon-green hover:text-neon-green transition-all flex flex-col items-center gap-2 group mb-10"
             >
               <FaPlus className="group-hover:scale-110 transition-transform" />
               <span className="text-xs font-black uppercase tracking-widest">Add Another Day</span>
             </button>
           </div>

        </div>

      </div>
    </div>
  );
};

export default RoutineBuilder;