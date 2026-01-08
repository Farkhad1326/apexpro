import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// DÜZƏLİŞ: İkon adları düzəldildi və çatışmayan ClipboardList əlavə edildi
import { Plus, Search, ListFilter, ClipboardList } from 'lucide-react'; 
import BrowseWorkouts from '../workouts/BrowseWorkouts'; 

const MyRoutines = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('my-plans'); 
    const [routines, setRoutines] = useState([]); 

    return (
        <div className="space-y-6">
            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Training Plans</h1>
                    <p className="text-zinc-500 text-sm">Create, find, and manage your workout routines.</p>
                </div>
                
                <button 
                    onClick={() => navigate('/builder')}
                    className="bg-lime-400 text-black px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-lime-500 transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)] active:scale-95"
                >
                    <Plus size={20} strokeWidth={3} />
                    Create Plan
                </button>
            </div>

            {/* --- TABS --- */}
            <div className="flex border-b border-zinc-800">
                <button 
                    onClick={() => setActiveTab('my-plans')}
                    className={`px-6 py-3 text-sm font-bold transition-all relative ${activeTab === 'my-plans' ? 'text-lime-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                    My Plans
                    {activeTab === 'my-plans' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.5)]" />}
                </button>
                <button 
                    onClick={() => setActiveTab('find-plan')}
                    className={`px-6 py-3 text-sm font-bold transition-all relative ${activeTab === 'find-plan' ? 'text-lime-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                    Find Plan
                    {activeTab === 'find-plan' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.5)]" />}
                </button>
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="min-h-[400px]">
                {activeTab === 'my-plans' ? (
                    routines.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Rutinlər siyahısı bura gələcək */}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-zinc-800">
                                <ClipboardList className="text-zinc-700" size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">No Training Plans Found</h2>
                            <p className="text-zinc-500 max-w-sm mb-8">Start your fitness journey by creating a custom plan or choosing from our library.</p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                                <button 
                                    onClick={() => setActiveTab('find-plan')}
                                    className="flex-1 bg-zinc-900 text-white border border-zinc-800 px-6 py-4 rounded-2xl hover:bg-zinc-800 hover:border-zinc-700 transition-all flex flex-col items-center gap-2 group"
                                >
                                    <Search className="text-lime-400 group-hover:scale-110 transition-transform" size={24} />
                                    <span className="font-bold">Select a Premade Plan</span>
                                </button>
                                
                                <button 
                                    onClick={() => navigate('/builder')}
                                    className="flex-1 bg-zinc-900 text-white border border-zinc-800 px-6 py-4 rounded-2xl hover:bg-zinc-800 hover:border-zinc-700 transition-all flex flex-col items-center gap-2 group"
                                >
                                    <Plus className="text-lime-400 group-hover:scale-110 transition-transform" size={24} />
                                    <span className="font-bold">Build Your Own Plan</span>
                                </button>
                            </div>
                        </div>
                    )
                ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <BrowseWorkouts embedded={true} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyRoutines;