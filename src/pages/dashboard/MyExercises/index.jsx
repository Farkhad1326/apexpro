import React, { useState } from 'react';

// Components
import ExercisesHeader from './components/ExercisesHeader';
import ExercisesTabs from './components/ExercisesTabs';
import CustomExercisesList from './components/CustomExercisesList';
import CreateExerciseModal from './components/CreateExerciseModal';
import DatabaseExercisesList from './components/DatabaseExercisesList'; // <--- YENİ IMPORT

const MyExercises = () => {
    const [activeTab, setActiveTab] = useState('custom');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="pb-20">
            {/* 1. Header & Modal Toggle */}
            <ExercisesHeader onCreate={() => setIsModalOpen(true)} />

            {/* 2. Tabs */}
            <ExercisesTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* 3. Content */}
            <div className="min-h-[400px]">
                {activeTab === 'custom' ? (
                    <CustomExercisesList />
                ) : (
                    // DATABASE TABI - ARTIQ KOMPONENTİ ÇAĞIRIRIQ
                    <DatabaseExercisesList />
                )}
            </div>

            {/* 4. Modal (Overlay) */}
            {isModalOpen && (
                <CreateExerciseModal onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};

export default MyExercises;