import React, { useState, useEffect } from 'react';
import { Calendar, Flame, ChevronRight, Utensils } from 'lucide-react';

// --- SHADCN UI ---
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shared/accordion";
import { Badge } from "@/components/ui/shared/badge";
import { ScrollArea } from "@/components/ui/shared/scroll-area";
import { Card } from "@/components/ui/shared/card";

const DietHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // 1. LocalStorage-dən bütün datanı oxuyuruq
    const allKeys = Object.keys(localStorage);
    
    // 2. Yalnız "biofuel_meals_" ilə başlayanları filtrləyirik
    const mealKeys = allKeys.filter(key => key.startsWith('biofuel_meals_'));

    // 3. Datanı formata salırıq
    const parsedHistory = mealKeys.map(key => {
      const dateStr = key.replace('biofuel_meals_', ''); // "2024-01-16"
      const meals = JSON.parse(localStorage.getItem(key));
      
      // Həmin günün ümumi kalorisini hesablayaq
      let totalCals = 0;
      let totalProt = 0;
      
      Object.values(meals).forEach(mealGroup => {
        mealGroup.forEach(item => {
          totalCals += item.calculatedCalories || 0;
          totalProt += item.calculatedProtein || 0;
        });
      });

      return {
        date: dateStr,
        meals,
        stats: { calories: totalCals, protein: totalProt }
      };
    });

    // 4. Tarixə görə sıralayırıq (Ən yeni tarix yuxarıda)
    parsedHistory.sort((a, b) => new Date(b.date) - new Date(a.date));

    setHistory(parsedHistory);
  }, []);

  if (history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-zinc-500 border border-dashed border-white/10 rounded-3xl bg-zinc-900/20">
        <Utensils size={48} className="mb-4 opacity-20" />
        <p>No mission logs found yet.</p>
        <span className="text-xs">Start tracking your daily fuel to see history here.</span>
      </div>
    );
  }

  return (
    <Card className="bg-zinc-900/30 border-white/5 p-1">
      <ScrollArea className="h-[600px] w-full pr-4">
        <Accordion type="single" collapsible className="w-full space-y-2">
          
          {history.map((day) => (
            <AccordionItem key={day.date} value={day.date} className="border border-white/5 rounded-xl bg-black/20 px-2 overflow-hidden">
              
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center justify-between w-full pr-4">
                  
                  {/* Sol Tərəf: Tarix */}
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                       <Calendar size={18} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-white">
                        {new Date(day.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                      <p className="text-xs text-zinc-500 font-mono">
                        {new Date(day.date).toLocaleDateString('en-GB', { weekday: 'long' })}
                      </p>
                    </div>
                  </div>

                  {/* Sağ Tərəf: Statistika */}
                  <div className="flex items-center gap-3">
                     <div className="text-right hidden sm:block">
                        <span className="text-xs text-zinc-500 block">Total Intake</span>
                        <span className="text-sm font-black text-white">{day.stats.calories} kcal</span>
                     </div>
                     <Badge variant="outline" className="bg-zinc-800 border-zinc-700 text-zinc-400 gap-1">
                        <Flame size={12} /> {day.stats.protein}g Prot
                     </Badge>
                  </div>

                </div>
              </AccordionTrigger>
              
              <AccordionContent className="pb-4 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {/* Yemək Qruplarını Göstəririk */}
                   {['breakfast', 'lunch', 'dinner', 'snack'].map((type) => (
                      day.meals[type] && day.meals[type].length > 0 && (
                        <div key={type} className="bg-white/5 rounded-lg p-3">
                           <h4 className="text-xs font-bold uppercase text-zinc-500 mb-2 tracking-wider">{type}</h4>
                           <div className="space-y-1">
                              {day.meals[type].map((food, idx) => (
                                <div key={idx} className="flex justify-between text-sm">
                                   <span className="text-zinc-300 truncate w-2/3">{food.name}</span>
                                   <span className="text-zinc-500 font-mono text-xs">{food.calculatedCalories}kcal</span>
                                </div>
                              ))}
                           </div>
                        </div>
                      )
                   ))}
                </div>
              </AccordionContent>

            </AccordionItem>
          ))}

        </Accordion>
      </ScrollArea>
    </Card>
  );
};

export default DietHistory;