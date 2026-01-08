import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Database, Search } from 'lucide-react';
import CreateExerciseModal from '../../components/exercises/CreateExerciseModal'; // Bayaq yaratdığımız modalı çağırırıq

const MyExercises = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header və Tablar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">My Exercises</h1>
          <p className="text-zinc-400">Manage your custom created exercises</p>
        </div>
        
        <div className="flex gap-3">
          {/* 1. PUBLIC BAZAYA APARAN LINK */}
          <button 
            onClick={() => navigate('/exercises')} // Bu bizi Public Exercise Library-ə atır
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-zinc-300 border border-zinc-700 rounded-lg hover:bg-zinc-800 hover:text-white transition"
          >
            <Database size={18} />
            Exercise Database
          </button>

          {/* 2. CUSTOM EXERCISE YARATMAQ */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-lime-400 text-black font-bold rounded-lg hover:bg-lime-500 transition"
          >
            <Plus size={18} />
            Create Custom
          </button>
        </div>
      </div>

      {/* Custom Exercises Siyahısı */}
      <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 min-h-[300px] p-8 text-center flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-4 text-zinc-600">
            <Dumbbell size={32} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">No Custom Exercises Yet</h3>
        <p className="text-zinc-500 max-w-md mx-auto mb-6">
          You can create your own exercises if you can't find them in our public database.
        </p>
        <button 
           onClick={() => setIsModalOpen(true)}
           className="text-lime-400 hover:underline"
        >
          Create your first exercise &rarr;
        </button>
      </div>

      {/* Modal - Şəkil 2-dəki Form */}
      <CreateExerciseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default MyExercises;