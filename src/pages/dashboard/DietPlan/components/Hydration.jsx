import React from 'react';
import { Plus, Droplets } from 'lucide-react';

// --- SHADCN COMPONENTS ---
import { Card, CardContent } from "@/components/ui/shared/card";
import { Button } from "@/components/ui/shared/button";

const Hydration = ({ current, target, addWater }) => {
  const percentage = Math.min(100, Math.round((current / target) * 100));

  return (
    <Card className="bg-blue-950/20 border-blue-500/20 relative overflow-hidden h-full min-h-[250px] flex flex-col justify-between group">
      
      {/* Background Water Fill Effect */}
      <div 
        className="absolute bottom-0 left-0 w-full bg-blue-600/10 transition-all duration-1000 ease-in-out z-0"
        style={{ height: `${percentage}%` }}
      />
      
      {/* Decorative Icon */}
      <div className="absolute top-4 right-4 text-blue-500 opacity-20 transition-transform group-hover:scale-110 duration-500">
         <Droplets size={48} />
      </div>

      <CardContent className="relative z-10 p-6 flex flex-col h-full justify-between">
        
        {/* Info Header */}
        <div>
          <h3 className="text-blue-200 font-bold uppercase tracking-widest text-xs mb-1">
            Hydration Status
          </h3>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black text-white">{current}</span>
            <span className="text-lg text-blue-300 font-medium">ml</span>
          </div>
          <p className="text-xs text-blue-400 font-mono mt-1 opacity-80">
            Target: {target} ml
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-6">
          <Button 
            onClick={() => addWater(250)}
            className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95 transition-all"
          >
            <Plus size={18} className="mr-2" /> Add 250ml
          </Button>
        </div>

      </CardContent>
    </Card>
  );
};

export default Hydration;