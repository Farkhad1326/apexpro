import React, { useState } from 'react';
import { Plus, Settings, Activity, History, Zap, CheckCircle2, Save } from 'lucide-react';

// --- HOOK ---
import { useNutrition } from './hooks/useNutrition';

// --- COMPONENTS ---
import CaloriesDisplay from './components/CaloriesDisplay'; 
import MacroRing from './components/MacroRing';
import MealSection from './components/MealSection';
import Hydration from './components/Hydration';
import FoodSearchModal from './components/FoodSearchModal';
import TargetSettingsModal from './components/TargetSettingsModal';
import DietHistory from './components/DietHistory';

// --- SHADCN UI ---
import { Button } from "@/components/ui/shared/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shared/tabs"; 

const DietPlan = () => {
  const { 
    meals, totals, goals, addFood, removeFood, waterIntake, addWater, updateGoals 
  } = useNutrition();

  // STATES
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMealType, setActiveMealType] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  // --- YENİ: Tab və Save Logikası ---
  const [activeTab, setActiveTab] = useState("tracker"); // Tabı idarə etmək üçün
  const [isSaving, setIsSaving] = useState(false); // Düyməyə basanda fırlanan effekt

  const handleOpenSearch = (mealType) => {
    setActiveMealType(mealType);
    setIsModalOpen(true);
  };

  const handleAddFoodFromModal = (foodItem, weight) => {
    if (activeMealType) {
      addFood(activeMealType, foodItem, weight);
    }
    setIsModalOpen(false);
    setActiveMealType(null);
  };

  // --- YENİ: Günü Tamamlamaq Funksiyası ---
  const handleFinishDay = () => {
    setIsSaving(true);

    // Sadəcə vizual effekt (Sanki serverə yazır)
    setTimeout(() => {
      setIsSaving(false);
      // Avtomatik Tarixçəyə keçirik
      setActiveTab("history");
    }, 800);
  };

  return (
    <div className="space-y-6 pb-24 md:pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
           <div className="flex items-center gap-4 text-primary mb-2">
              <div className="flex items-center gap-2">
                 <Activity size={18} />
                 <span className="text-xs font-bold uppercase tracking-[0.2em]">System Status: Online</span>
              </div>
              <div className="h-3 w-[1px] bg-zinc-700"></div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                 Log: {new Date().toLocaleDateString('en-GB').split('/').join('.')}
              </span>
           </div>

           <h1 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter leading-none">
             Bio-Fuel <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Logistics</span>
           </h1>
           <p className="text-zinc-400 text-sm mt-1 max-w-md">
             Real-time metabolic tracking and fuel management system.
           </p>
        </div>

        <Button 
           variant="outline" 
           onClick={() => setIsSettingsOpen(true)}
           className="hidden md:flex border-white/10 hover:bg-white/5 gap-2"
        >
           <Settings size={16} /> Targets
        </Button>
      </div>

      {/* TABS SYSTEM */}
      {/* value={activeTab} və onValueChange={setActiveTab} əlavə etdik ki, kodla dəyişə bilək */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        
        <TabsList className="grid w-full md:w-[400px] grid-cols-2 bg-zinc-900 border border-white/5 mb-6">
          <TabsTrigger value="tracker" className="data-[state=active]:bg-primary data-[state=active]:text-black font-bold">
            <Zap size={16} className="mr-2" /> Active Protocol
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-primary data-[state=active]:text-black font-bold">
            <History size={16} className="mr-2" /> Mission Logs
          </TabsTrigger>
        </TabsList>

        {/* --- ACTIVE TRACKER --- */}
        <TabsContent value="tracker" className="space-y-6">
          
          {/* Main Stats */}
          <section className="w-full">
             <CaloriesDisplay consumed={totals.calories} target={goals.calories} />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <MacroRing label="Protein" current={totals.protein} target={goals.protein} color="#D4F458" />
             <MacroRing label="Carbohydrates" current={totals.carbs} target={goals.carbs} color="#60a5fa" />
             <MacroRing label="Fats" current={totals.fats} target={goals.fats} color="#f87171" />
          </section>

          {/* Timeline & Water */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                 <h3 className="text-lg font-bold text-white uppercase tracking-tight">Fuel Timeline</h3>
              </div>
              <MealSection title="Breakfast" icon="☕" items={meals.breakfast} onAdd={() => handleOpenSearch('breakfast')} onRemove={(id) => removeFood('breakfast', id)} />
              <MealSection title="Lunch" icon="🍗" items={meals.lunch} onAdd={() => handleOpenSearch('lunch')} onRemove={(id) => removeFood('lunch', id)} />
              <MealSection title="Dinner" icon="🌙" items={meals.dinner} onAdd={() => handleOpenSearch('dinner')} onRemove={(id) => removeFood('dinner', id)} />
              <MealSection title="Pre-Workout / Snacks" icon="⚡" items={meals.snack} onAdd={() => handleOpenSearch('snack')} onRemove={(id) => removeFood('snack', id)} />
            </div>

            <div className="space-y-6">
               <div className="sticky top-6 h-auto space-y-6">
                 <Hydration current={waterIntake} target={goals.water} addWater={addWater} />
                 
                 {/* YENİ: SAVE BUTTON (FINISH DAY) */}
                 <div className="p-1 rounded-2xl bg-gradient-to-b from-zinc-800 to-black border border-white/10 shadow-2xl">
                    <div className="p-5 flex flex-col items-center text-center gap-3">
                        <div className="bg-primary/10 p-3 rounded-full text-primary mb-1">
                            <CheckCircle2 size={32} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider">Mission Complete?</h4>
                            <p className="text-xs text-zinc-400 mt-1">
                                Lock in today's data and archive it to the mission logs.
                            </p>
                        </div>
                        <Button 
                            onClick={handleFinishDay}
                            disabled={isSaving}
                            className="w-full mt-2 bg-primary text-black font-bold hover:bg-white transition-all h-12 text-md"
                        >
                            {isSaving ? "Archiving..." : (
                                <>
                                    <Save size={18} className="mr-2" /> Finish & Log Day
                                </>
                            )}
                        </Button>
                    </div>
                 </div>

               </div>
            </div>
          </div>
          
          {/* Mobile FAB */}
          <button 
             onClick={() => handleOpenSearch('snack')}
             className="fixed bottom-24 right-6 md:hidden z-50 w-14 h-14 bg-primary text-black rounded-full shadow-[0_0_20px_rgba(212,244,88,0.4)] flex items-center justify-center active:scale-90 transition-transform"
          >
            <Plus size={28} />
          </button>

        </TabsContent>

        {/* --- HISTORY VIEW --- */}
        <TabsContent value="history">
           <DietHistory />
        </TabsContent>

      </Tabs>

      {/* MODALS */}
      <FoodSearchModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddFoodFromModal}
      />
      <TargetSettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentGoals={goals}
        onSave={updateGoals}
      />
    </div>
  );
};

export default DietPlan;