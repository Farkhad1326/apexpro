import React, { useState, useEffect } from 'react';
import { Settings, Save } from 'lucide-react';

// --- SHADCN IMPORTS ---
// Əgər "shared" qovluğun yoxdursa, "shared"-i silib birbaşa "@/components/ui/dialog" yaz
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/shared/dialog";
import { Input } from "@/components/ui/shared/input";
import { Button } from "@/components/ui/shared/button";
import { Label } from "@/components/ui/shared/label"; 

const TargetSettingsModal = ({ isOpen, onClose, currentGoals, onSave }) => {
  const [formData, setFormData] = useState(currentGoals);

  useEffect(() => {
    if (isOpen) {
      setFormData(currentGoals);
    }
  }, [isOpen, currentGoals]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseInt(value) || 0
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-950 border-white/10 text-white sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            <Settings className="text-primary" size={20} />
            Configure Targets
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Inputs Loop */}
          {['calories', 'protein', 'carbs', 'fats', 'water'].map((key) => (
            <div key={key} className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right text-zinc-400 capitalize">
                {key} {key === 'calories' ? '' : key === 'water' ? '(ml)' : '(g)'}
              </Label>
              <Input
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="col-span-3 bg-zinc-900 border-white/10"
              />
            </div>
          ))}
        </div>

        <Button onClick={handleSave} className="w-full bg-primary text-black font-bold hover:bg-white">
          <Save size={16} className="mr-2" /> Save Configuration
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default TargetSettingsModal;