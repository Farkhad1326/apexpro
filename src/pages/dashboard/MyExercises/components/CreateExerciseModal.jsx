import React, { useState } from 'react';
import { X, Save, Dumbbell } from 'lucide-react';
import { useExercise } from '../../../../context/ExerciseContext';
import MuscleMap from './MuscleMap'; // <--- YENİ IMPORT

const EQUIPMENTS = ["Barbell", "Dumbbell", "Machine", "Cable", "Bodyweight", "Kettlebell", "Band"];

const CreateExerciseModal = ({ onClose }) => {
    const { addCustomExercise } = useExercise();

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        bodyPart: '', // Default boş olsun ki, istifadəçi seçsin
        equipment: 'Barbell',
        type: 'reps'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim()) return alert("Please enter exercise name");
        if (!formData.bodyPart) return alert("Please select a target muscle from the map");

        addCustomExercise(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

            {/* Modal Content - Enini artırdıq (max-w-2xl) ki, Map yerləşsin */}
            <div className="relative bg-[#0f0f11] w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/5 bg-zinc-900/50">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Dumbbell className="text-lime-400" size={20} />
                        New Custom Exercise
                    </h2>
                    <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row">

                    {/* SOL TƏRƏF: Form Inputs */}
                    <div className="p-6 md:w-1/2 space-y-5 border-b md:border-b-0 md:border-r border-white/5">
                        <form id="exercise-form" onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Exercise Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Super Bench Press"
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime-400 focus:outline-none transition-colors"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    autoFocus
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Equipment</label>
                                <select
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-lime-400 focus:outline-none transition-colors appearance-none"
                                    value={formData.equipment}
                                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                                >
                                    {EQUIPMENTS.map(eq => <option key={eq} value={eq}>{eq}</option>)}
                                </select>
                            </div>

                            {/* Seçilən əzələni mətn kimi də göstəririk */}
                            <div>
                                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Selected Muscle</label>
                                <div className={`w-full px-4 py-3 rounded-xl border flex items-center gap-2 ${formData.bodyPart ? 'border-lime-400 bg-lime-400/10 text-lime-400' : 'border-white/10 bg-black text-zinc-500'}`}>
                                    <div className={`w-2 h-2 rounded-full ${formData.bodyPart ? 'bg-lime-400' : 'bg-zinc-600'}`}></div>
                                    {formData.bodyPart || "None selected"}
                                </div>
                                <p className="text-[10px] text-zinc-500 mt-1">Tap on the body map to select.</p>
                            </div>
                        </form>
                    </div>

                    {/* SAĞ TƏRƏF: Visual Muscle Selector */}
                    <div className="p-6 md:w-1/2 flex flex-col items-center justify-center bg-black/20">
                        <MuscleMap
                            selectedMuscle={formData.bodyPart}
                            onSelect={(muscle) => setFormData({ ...formData, bodyPart: muscle })}
                        />
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 border-t border-white/5 bg-zinc-900/30 flex gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 bg-zinc-800 text-white font-bold py-3 rounded-xl hover:bg-zinc-700 transition-colors"
                    >
                        Cancel
                    </button>
                    {/* Form submitini id vasitəsilə tetikləyirik */}
                    <button
                        form="exercise-form"
                        type="submit"
                        className="flex-1 bg-lime-400 text-black font-bold py-3 rounded-xl hover:bg-lime-500 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(163,230,53,0.3)]"
                    >
                        <Save size={18} /> Save Exercise
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateExerciseModal;