import React from 'react';
import { Play, CalendarDays, Target } from 'lucide-react';
import { ShinyButton } from '@/components/ui/magicui/shiny-button';  // Adjust path if needed; use alias like @/ for cleanliness
const NextMission = () => {
    return (
        // Əgər Aceternity BackgroundGradient varsa, bu div-i onunla əvəz et
        <div className="h-full p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent relative overflow-hidden group">

            {/* Neon Glow Effect (CSS ilə Aceternity effekti) */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

            <div className="relative h-full bg-zinc-950/90 backdrop-blur-sm rounded-[23px] p-6 flex flex-col justify-between overflow-hidden">

                {/* Dekorativ Naxış */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Target size={80} className="text-white" />
                </div>

                <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Next Protocol</span>
                    </div>

                    <h2 className="text-3xl font-black text-white italic leading-none mb-1">
                        UPPER BODY
                    </h2>
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700 italic leading-none">
                        DESTRUCTION
                    </h2>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 border-l-2 border-primary/20 pl-3">
                        <div>
                            <span className="block text-zinc-600 uppercase text-[9px]">Duration</span>
                            <span className="text-white">45 MIN</span>
                        </div>
                        <div>
                            <span className="block text-zinc-600 uppercase text-[9px]">Intensity</span>
                            <span className="text-primary">HIGH</span>
                        </div>
                    </div>

                    {/* Magic UI: Shiny Button */}
                    <ShinyButton className="w-full bg-primary" onClick={() => console.log("Started!")}>
                        <div className="flex items-center justify-center gap-2">
                            START SESSION <Play size={14} className="fill-current" />
                        </div>
                    </ShinyButton>
                </div>
            </div>
        </div>
    );
};

export default NextMission;