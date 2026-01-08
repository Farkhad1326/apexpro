import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import MuscleMap from './MuscleMap'; // Yuxarıdakı faylı çağırır

const CreateExerciseModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    title: '',
    muscleGroup: '',
    equipment: '',
    recordingType: 'reps',
    instruction: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved:", formData);
    // Burda gələcəkdə save funksiyası olacaq
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Bağlama düyməsi */}
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-zinc-400 hover:text-white hover:bg-red-500/20 hover:rotate-90 transition"
        >
            <X size={20} />
        </button>

        {/* SOL TƏRƏF - Visual */}
        <div className="w-full md:w-5/12 bg-zinc-900/50 p-8 border-r border-zinc-800 flex flex-col items-center justify-center text-center">
           <h3 className="text-white font-bold text-lg mb-2">Target Muscle</h3>
           <p className="text-zinc-500 text-xs mb-6">Visual representation of the muscle group</p>
           
           <MuscleMap selectedGroup={formData.muscleGroup} />
           
           <div className="mt-6 text-xs text-zinc-600 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
             {formData.muscleGroup || "No muscle selected"}
           </div>
        </div>

        {/* SAĞ TƏRƏF - Form */}
        <div className="w-full md:w-7/12 p-8 bg-zinc-950">
          <h2 className="text-2xl font-bold text-white mb-6">Create Exercise</h2>
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Title */}
            <div>
              <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">Exercise Name</label>
              <input 
                type="text" 
                name="title"
                placeholder="e.g. Incline Bench Press" 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Muscle Group */}
              <div>
                <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">Muscle Group</label>
                <select 
                  name="muscleGroup"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400 transition cursor-pointer"
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="Chest">Chest</option>
                  <option value="Back">Back</option>
                  <option value="Legs">Legs</option>
                  <option value="Arms">Arms</option>
                  <option value="Abs">Abs</option>
                </select>
              </div>

              {/* Equipment */}
              <div>
                <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">Equipment</label>
                <select 
                  name="equipment"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400 transition cursor-pointer"
                  onChange={handleChange}
                >
                  <option value="None">Bodyweight</option>
                  <option value="Dumbbell">Dumbbell</option>
                  <option value="Barbell">Barbell</option>
                  <option value="Machine">Machine</option>
                </select>
              </div>
            </div>

            {/* Instruction */}
            <div>
              <label className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">Instructions (Optional)</label>
              <textarea 
                name="instruction"
                rows="3"
                placeholder="Tips on form and execution..." 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-lime-400 transition resize-none"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 flex justify-end gap-3 border-t border-zinc-900 mt-4">
              <button 
                type="button" 
                onClick={onClose} 
                className="px-5 py-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition font-medium text-sm"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-6 py-2.5 bg-lime-400 text-black font-bold rounded-lg hover:bg-lime-500 hover:shadow-[0_0_15px_rgba(163,230,53,0.3)] transition flex items-center gap-2"
              >
                <Save size={18} />
                Save Custom Exercise
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default CreateExerciseModal;