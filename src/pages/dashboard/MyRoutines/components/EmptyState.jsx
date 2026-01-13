import React from 'react';
import { ClipboardList, Search, Plus } from 'lucide-react';

const EmptyState = ({ onFindClick, onCreateClick }) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-zinc-800">
                <ClipboardList className="text-zinc-700" size={40} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">No Training Plans Found</h2>
            <p className="text-zinc-500 max-w-sm mb-8">Start your fitness journey by creating a custom plan or choosing from our library.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <button 
                    onClick={onFindClick}
                    className="flex-1 bg-zinc-900 text-white border border-zinc-800 px-6 py-4 rounded-2xl hover:bg-zinc-800 hover:border-zinc-700 transition-all flex flex-col items-center gap-2 group"
                >
                    <Search className="text-lime-400 group-hover:scale-110 transition-transform" size={24} />
                    <span className="font-bold">Select a Premade Plan</span>
                </button>
                
                <button 
                    onClick={onCreateClick}
                    className="flex-1 bg-zinc-900 text-white border border-zinc-800 px-6 py-4 rounded-2xl hover:bg-zinc-800 hover:border-zinc-700 transition-all flex flex-col items-center gap-2 group"
                >
                    <Plus className="text-lime-400 group-hover:scale-110 transition-transform" size={24} />
                    <span className="font-bold">Build Your Own Plan</span>
                </button>
            </div>
        </div>
    );
};

export default EmptyState;