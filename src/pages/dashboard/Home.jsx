import React from 'react';

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Overview</h1>
        <p className="text-zinc-400">Welcome back, Warrior</p>
      </div>
      
      {/* Progress Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
           <h3 className="text-zinc-400 text-sm">Monthly Workouts</h3>
           <p className="text-4xl font-bold text-white mt-2">0</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
           <h3 className="text-zinc-400 text-sm">Total Volume</h3>
           <p className="text-4xl font-bold text-white mt-2">0 <span className="text-lg text-zinc-600">kg</span></p>
        </div>
        <div className="bg-gradient-to-br from-lime-400 to-lime-600 p-6 rounded-2xl text-black">
           <h3 className="text-black/70 text-sm font-bold">Go Premium</h3>
           <p className="text-2xl font-bold mt-1">Unlock Analytics</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;