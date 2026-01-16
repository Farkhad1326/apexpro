import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, Check, Flame } from 'lucide-react';

// --- EXISTING COMPONENTS (Sənin UI Kitabxanan) ---
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/shared/dialog";
import { Input } from "@/components/ui/shared/input";
import { Button } from "@/components/ui/shared/button";
import { Badge } from "@/components/ui/shared/badge"; // Əgər varsa, yoxdursa div ilə əvəz edərik
import { Separator } from "@/components/ui/shared/separator";

// --- DATA ---
import { foodDatabase } from '../data/foodDatabase';

const FoodSearchModal = ({ isOpen, onClose, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState(null); // Seçilmiş yemək
  const [weight, setWeight] = useState(""); // Daxil edilən qram

  // Modal bağlananda state-i təmizlə
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
      setSelectedFood(null);
      setWeight("");
    }
  }, [isOpen]);

  // Axtarış funksiyası
  const filteredFood = foodDatabase.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Qram dəyişəndə hesablamaq
  const handleWeightChange = (e) => {
    const val = e.target.value;
    // Yalnız rəqəmə icazə veririk
    if (!isNaN(val)) setWeight(val);
  };

  // Hesablanmış Makrolar (Preview)
  const calculatePreview = () => {
    if (!selectedFood || !weight) return null;
    const ratio = parseFloat(weight) / 100;
    return {
      cals: Math.round(selectedFood.calories * ratio),
      prot: Math.round(selectedFood.protein * ratio),
      carbs: Math.round(selectedFood.carbs * ratio),
      fats: Math.round(selectedFood.fats * ratio),
    };
  };

  const preview = calculatePreview();

  const handleConfirm = () => {
    if (selectedFood && weight) {
      onAdd(selectedFood, parseFloat(weight));
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-zinc-950 border-white/10 text-white p-0 gap-0 overflow-hidden">
        
        {/* HEADER */}
        <DialogHeader className="p-4 border-b border-white/5 bg-zinc-900/50">
          <DialogTitle className="flex items-center gap-2 text-lg font-bold tracking-tight">
            {selectedFood ? (
              <button 
                onClick={() => setSelectedFood(null)} 
                className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm"
              >
                <ChevronLeft size={16} /> Back
              </button>
            ) : (
              <span className="flex items-center gap-2">
                <Search size={18} className="text-primary" /> Add Fuel
              </span>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="p-4 min-h-[300px] max-h-[500px] flex flex-col">
          
          {/* VIEW 1: SEARCH LIST */}
          {!selectedFood ? (
            <>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                <Input 
                  placeholder="Search database (e.g. Chicken, Rice)..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 bg-zinc-900/50 border-white/10 focus-visible:ring-primary"
                  autoFocus
                />
              </div>

              <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                {filteredFood.length > 0 ? (
                  filteredFood.map((food) => (
                    <div 
                      key={food.id}
                      onClick={() => {
                        setSelectedFood(food);
                        setWeight(food.defaultServing.toString()); // Default qramı qoyuruq
                      }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors border border-transparent hover:border-white/5"
                    >
                      <div>
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">{food.name}</p>
                        <p className="text-xs text-zinc-500">{food.calories} kcal / 100{food.unit}</p>
                      </div>
                      <Badge variant="outline" className="text-[10px] bg-zinc-900 border-zinc-800 text-zinc-400">
                        {food.category}
                      </Badge>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 text-zinc-600 text-sm">
                    No matching fuel found.
                  </div>
                )}
              </div>
            </>
          ) : (
            
            /* VIEW 2: CALCULATOR (WEIGHT INPUT) */
            <div className="flex flex-col h-full animate-in slide-in-from-right-4 duration-300">
              
              {/* Selected Item Header */}
              <div className="flex items-start justify-between mb-6">
                 <div>
                    <h2 className="text-xl font-black text-white">{selectedFood.name}</h2>
                    <span className="text-xs text-zinc-400 bg-white/5 px-2 py-1 rounded mt-1 inline-block">
                      Base: {selectedFood.calories} kcal / 100{selectedFood.unit}
                    </span>
                 </div>
                 <div className="text-right">
                    <p className="text-3xl font-black text-primary tracking-tight">
                      {preview ? preview.cals : 0}
                    </p>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Total Kcal</p>
                 </div>
              </div>

              <Separator className="bg-white/5 mb-6" />

              {/* Input Section */}
              <div className="space-y-4 flex-1">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Serving Size ({selectedFood.unit})</label>
                  <div className="flex items-center gap-2">
                    <Input 
                      type="number" 
                      value={weight}
                      onChange={handleWeightChange}
                      className="text-lg font-bold bg-zinc-900 border-white/10 h-12 focus-visible:ring-primary"
                      placeholder="0"
                      autoFocus
                    />
                    <span className="text-zinc-500 font-bold">{selectedFood.unit}</span>
                  </div>
                </div>

                {/* Macro Live Preview */}
                {preview && (
                   <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="bg-zinc-900/50 p-3 rounded-lg border border-white/5 text-center">
                        <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Protein</span>
                        <span className="text-lg font-bold text-white">{preview.prot}g</span>
                      </div>
                      <div className="bg-zinc-900/50 p-3 rounded-lg border border-white/5 text-center">
                        <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Carbs</span>
                        <span className="text-lg font-bold text-blue-400">{preview.carbs}g</span>
                      </div>
                      <div className="bg-zinc-900/50 p-3 rounded-lg border border-white/5 text-center">
                        <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Fats</span>
                        <span className="text-lg font-bold text-red-400">{preview.fats}g</span>
                      </div>
                   </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-3">
                <Button 
                   variant="outline" 
                   className="flex-1 border-white/10 hover:bg-white/5"
                   onClick={() => setSelectedFood(null)}
                >
                  Cancel
                </Button>
                <Button 
                   className="flex-[2] bg-primary text-black font-bold hover:bg-white"
                   disabled={!weight || parseFloat(weight) <= 0}
                   onClick={handleConfirm}
                >
                  <Check size={18} className="mr-2" /> Add to Log
                </Button>
              </div>

            </div>
          )}
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default FoodSearchModal;