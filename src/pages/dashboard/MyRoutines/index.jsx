import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoutine } from '../../../context/RoutineContext'; // Context-ə çıxış (Path-ə diqqət)
import BrowseWorkouts from '../../workouts/BrowseWorkouts'; // Find Plan üçün

// Child Components (Yeni yaratdıqlarımız)
import RoutinesHeader from './components/RoutinesHeader';
import RoutinesTabs from './components/RoutinesTabs';
import ActivePlansList from './components/ActivePlansList';
import EmptyState from './components/EmptyState';

const MyRoutines = () => {
    const navigate = useNavigate();
    const { myRoutines } = useRoutine(); // Qlobal datanı çəkirik

    // Local State (Tab keçidləri üçün)
    const [activeTab, setActiveTab] = useState('my-plans');

    // --- MƏNTİQ HİSSƏSİ (Logic Layer) ---

    // 1. Datanı filterləyirik (Custom vs Library)
    const customPlans = myRoutines.filter(r => r.isCustom === true);
    const libraryPlans = myRoutines.filter(r => r.isCustom !== true);

    // 2. Ümumiyyətlə plan varmı?
    const hasAnyPlans = myRoutines.length > 0;

    // --- GÖRÜNÜŞ HİSSƏSİ (Render Layer) ---
    return (
        <div className="space-y-6 pb-20">

            {/* A. Header (Başlıq və Create Button) */}
            <RoutinesHeader onCreate={() => navigate('/builder')} />

            {/* B. Tablar (My Plans | Find Plan) */}
            <RoutinesTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* C. Məzmun (Dəyişən hissə) */}
            <div className="min-h-[400px]">

                {/* Əgər 'My Plans' tabındayıqsa: */}
                {activeTab === 'my-plans' ? (
                    hasAnyPlans ? (
                        // Plan varsa Siyahını göstər
                        <ActivePlansList
                            customPlans={customPlans}
                            libraryPlans={libraryPlans}
                        />
                    ) : (
                        // Plan yoxdursa Boş Ekranı göstər
                        <EmptyState
                            onFindClick={() => setActiveTab('find-plan')}
                            onCreateClick={() => navigate('/builder')}
                        />
                    )
                ) : (
                    // Əgər 'Find Plan' tabındayıqsa:
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <BrowseWorkouts embedded={true} />
                    </div>
                )}

            </div>
        </div>
    );
};

export default MyRoutines;