import React from 'react';
import { Bell, Search } from 'lucide-react';
import StatsGrid from './components/StatsGrid';
import ActivityChart from './components/ActivityChart';
import NextMission from './components/NextMission';
import BlurIn from "@/components/ui/magicui/blur-in"; // Magic UI

const DashboardHome = () => {
  return (
    <div className="space-y-6 pb-10">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          {/* Magic UI: BlurIn Text */}
          <BlurIn
            word="Welcome back, Commander."
            className="text-3xl font-black text-white tracking-tight"
            duration={0.8}
          />
          <p className="text-zinc-400 text-sm mt-1">Systems nominal. Ready for deployment.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all">
            <Search size={18} />
          </button>
          <button className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all relative">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#D4F458]"></span>
          </button>
          <div className="h-11 px-4 flex items-center justify-center rounded-xl bg-zinc-900 border border-white/5 text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
            {new Date().toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short' })}
          </div>
        </div>
      </div>

      {/* 2. STATS ROW (Magic UI inside) */}
      <StatsGrid />

      {/* 3. BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[400px]">
        
        {/* Chart Section */}
        <div className="lg:col-span-2 h-[300px] lg:h-auto">
          <ActivityChart />
        </div>

        {/* Next Mission Section (Aceternity inside) */}
        <div className="lg:col-span-1 h-auto">
          <NextMission />
        </div>
        
      </div>
      
    </div>
  );
};

export default DashboardHome;