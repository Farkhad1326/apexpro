import React from 'react';
import { Activity, Flame, Timer, Dumbbell } from 'lucide-react';
import { NumberTicker } from "@/components/ui/magicui/number-ticker";
const stats = [
    {
        label: "Active Streak",
        value: 12, // Rəqəm olmalıdır
        suffix: " Days",
        trend: "+2 days",
        icon: Flame,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
    {
        label: "Total Volume",
        value: 24,
        suffix: " tons",
        trend: "+8%",
        icon: Dumbbell,
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        label: "Training Hours",
        value: 8,
        suffix: " hrs",
        trend: "This week",
        icon: Timer,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        label: "Workouts",
        value: 5,
        suffix: "",
        trend: "Target: 6",
        icon: Activity,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
];

const StatsGrid = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden bg-zinc-900/50 border border-white/5 p-5 rounded-2xl hover:border-white/10 transition-all group hover:bg-zinc-900/80"
                >
                    {/* Arxa fon parıltısı (Aceternity style sadə effekt) */}
                    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity ${stat.bg}`} />

                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className={`p-2 rounded-lg bg-white/5 ${stat.color} group-hover:scale-110 transition-transform`}>
                            <stat.icon size={20} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                            {stat.trend}
                        </span>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-baseline gap-1 text-2xl font-black text-white tracking-tight">
                            {/* Magic UI: Number Ticker */}
                            <NumberTicker value={stat.value} className="text-white" />
                            <span className="text-sm font-medium text-zinc-500">{stat.suffix}</span>
                        </div>
                        <p className="text-xs font-medium text-zinc-400 mt-1 uppercase tracking-wide opacity-60">
                            {stat.label}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsGrid;