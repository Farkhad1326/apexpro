import React from 'react';
import { PenTool, Database } from 'lucide-react';
// Diqqət: DashboardPlanCard ortaq komponent olduğu üçün onu tapmalıyıq.
// Əgər o fayl 'src/pages/dashboard/components/DashboardPlanCard.jsx' yerindədirsə:
import DashboardPlanCard from "../../components/DashboardPlanCard";
const ActivePlansList = ({ customPlans, libraryPlans }) => {
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
            
            {/* 1. Custom Plans (Öz yaratdıqların) */}
            {customPlans.length > 0 && (
                <div>
                    <div className="flex items-center gap-2 mb-4 text-neon-green">
                        <PenTool size={18} />
                        <h3 className="text-sm font-black uppercase tracking-widest">My Custom Builds</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                        {customPlans.map(routine => (
                            <DashboardPlanCard key={routine.id} routine={routine} isCustom={true} />
                        ))}
                    </div>
                </div>
            )}

            {/* 2. Library Plans (Yaddaşa atılanlar) */}
            {libraryPlans.length > 0 && (
                <div>
                    <div className="flex items-center gap-2 mb-4 text-blue-400">
                        <Database size={18} />
                        <h3 className="text-sm font-black uppercase tracking-widest">Saved From Library</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                        {libraryPlans.map(routine => (
                            <DashboardPlanCard key={routine.id} routine={routine} isCustom={false} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActivePlansList;