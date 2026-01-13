import React from 'react';

const RoutinesTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex border-b border-zinc-800">
            <button
                onClick={() => setActiveTab('my-plans')}
                className={`px-6 py-3 text-sm cursor-pointer font-bold transition-all relative ${activeTab === 'my-plans' ? 'text-lime-400' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
                My Plans
                {activeTab === 'my-plans' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.5)]" />}
            </button>
            <button
                onClick={() => setActiveTab('find-plan')}
                className={`px-6 py-3 cursor-pointer text-sm font-bold transition-all relative ${activeTab === 'find-plan' ? 'text-lime-400' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
                Find Plan
                {activeTab === 'find-plan' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.5)]" />}
            </button>
        </div>
    );
};

export default RoutinesTabs;