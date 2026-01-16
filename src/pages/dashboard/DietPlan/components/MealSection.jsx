import React from 'react';
import { Plus, Trash2, Flame } from 'lucide-react';

// --- SHADCN UI COMPONENTS ---
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/shared/card";
import { Button } from "@/components/ui/shared/button";
import { Badge } from "@/components/ui/shared/badge";
import { Separator } from "@/components/ui/shared/separator";

const MealSection = ({ title, icon, items, onAdd, onRemove }) => {
  // Ümumi kalori hesabı
  const sectionCalories = items.reduce((acc, item) => acc + item.calculatedCalories, 0);

  return (
    <Card className="border-white/5 bg-zinc-900/30 backdrop-blur-sm overflow-hidden">
      
      {/* HEADER */}
      <CardHeader className="flex flex-row items-center justify-between py-4 px-5 space-y-0 pb-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-xl">
            {icon}
          </div>
          <div>
            <CardTitle className="text-base font-bold text-white tracking-tight">
              {title}
            </CardTitle>
            <p className="text-xs text-muted-foreground font-mono">
              {items.length} items logged
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
           {sectionCalories > 0 && (
             <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20 gap-1 px-2 py-1 h-auto">
               <Flame size={12} className="fill-current" />
               {sectionCalories} kcal
             </Badge>
           )}
           <Button 
             variant="default" 
             size="icon" 
             onClick={onAdd}
             className="h-8 w-8 rounded-full bg-primary text-black hover:bg-white transition-colors"
           >
             <Plus size={16} />
           </Button>
        </div>
      </CardHeader>
      
      <Separator className="bg-white/5 mb-2" />

      {/* CONTENT LIST */}
      <CardContent className="px-2 pb-2">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground opacity-50 gap-2">
             <div className="w-12 h-1 border border-dashed border-zinc-700 rounded-full"></div>
             <p className="text-xs italic">No fuel loaded yet.</p>
          </div>
        ) : (
          <div className="space-y-1">
            {items.map((item, index) => (
              <div key={item.id}>
                <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/5">
                  
                  {/* Sol tərəf */}
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 rounded-full bg-zinc-800 group-hover:bg-primary transition-colors"></div>
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-none mb-1">{item.name}</h4>
                      <div className="flex items-center gap-2">
                         <Badge variant="secondary" className="h-5 text-[10px] px-1.5 bg-white/10 text-zinc-300 hover:bg-white/20">
                            {item.servingSize}{item.unit}
                         </Badge>
                         <span className="text-[10px] text-muted-foreground font-mono">
                           {item.calculatedCalories} kcal
                         </span>
                      </div>
                    </div>
                  </div>

                  {/* Sağ tərəf: Makrolar və Silmə */}
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex flex-col items-end text-[10px] font-mono text-zinc-500 opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-white font-bold">{item.calculatedProtein}g P</span>
                      <span>{item.calculatedCarbs}C / {item.calculatedFats}F</span>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => onRemove(item.id)}
                      className="h-8 w-8 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
                {/* Sonuncu element deyilsə, araya xətt qoymaya bilərik, ya da çox incə qoya bilərik */}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MealSection;