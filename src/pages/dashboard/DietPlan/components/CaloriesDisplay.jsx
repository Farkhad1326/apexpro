import React from 'react';
import { Flame, Zap } from 'lucide-react';

// --- SHADCN COMPONENTS ---
import { Card, CardContent } from "@/components/ui/shared/card";
import { Progress } from "@/components/ui/shared/progress";
import { Badge } from "@/components/ui/shared/badge";

const CaloriesDisplay = ({ consumed, target }) => {
  // Hesablamalar
  const percentage = Math.min(100, Math.round((consumed / target) * 100));
  const remaining = target - consumed;
  const isSurplus = remaining < 0; // Hədəfi keçibmi?

  return (
    <Card className="border-white/10 bg-gradient-to-r from-zinc-900 via-zinc-900 to-black overflow-hidden relative group">
      
      {/* Arxa Plan Effekti: Dolduqca artan "yanğın" parıltısı */}
      <div 
        className="absolute top-0 left-0 h-full w-full bg-primary/5 blur-3xl transition-opacity duration-700"
        style={{ opacity: percentage / 100 }}
      />

      <CardContent className="p-6 relative z-10 flex flex-col justify-between h-full gap-4">
        
        {/* TOP: Label & Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Flame size={20} className="fill-current" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest leading-none">
                Net Calories
              </h3>
              <p className="text-[10px] text-zinc-500 font-mono mt-0.5">
                Daily Fuel Limit
              </p>
            </div>
          </div>
          
          <Badge 
            variant="outline" 
            className={`border-white/5 font-mono text-xs ${isSurplus ? 'bg-red-500/10 text-red-500' : 'bg-primary/5 text-primary'}`}
          >
            {isSurplus ? 'WARNING: SURPLUS' : 'NOMINAL'}
          </Badge>
        </div>

        {/* MIDDLE: Big Numbers */}
        <div className="flex items-end gap-3 mt-2">
          <span className="text-5xl font-black text-white tracking-tighter leading-none">
            {consumed}
          </span>
          <div className="flex flex-col mb-1.5">
            <span className="text-xs text-zinc-500 font-bold uppercase">kcal</span>
            <span className="text-xs text-zinc-600 font-mono">/ {target}</span>
          </div>
        </div>

        {/* BOTTOM: Progress Bar & Remaining */}
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
            <span>Fuel Level</span>
            <span className={isSurplus ? "text-red-500" : "text-white"}>
              {isSurplus ? `+${Math.abs(remaining)} Over` : `${remaining} Remaining`}
            </span>
          </div>
          
          {/* Custom Styled Progress Bar */}
          <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden border border-white/5 relative">
             {/* Animasiyalı Doldurma Xətti */}
             <div 
               className={`h-full transition-all duration-1000 ease-out relative ${isSurplus ? 'bg-red-500' : 'bg-primary'}`}
               style={{ width: `${percentage}%` }}
             >
                {/* Parıltı zolağı (Shimmer Effect) */}
                <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
             </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default CaloriesDisplay;