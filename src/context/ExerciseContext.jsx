import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
// Database-dən gələn statik hərəkətləri də bura import edə bilərik (məsələn: exercises.js)
import { exercises as defaultExercises } from '../data/exercises';

const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
    const { user } = useAuth();

    // 1. Custom Exercises (Yalnız istifadəçinin yaratdıqları)
    const [customExercises, setCustomExercises] = useState([]);

    // 2. Database Exercises (Statik baza)
    const [databaseExercises] = useState(defaultExercises);

    // Load from LocalStorage
    useEffect(() => {
        if (user) {
            const savedEx = localStorage.getItem(`apex_custom_exercises_${user.email}`);
            if (savedEx) {
                setCustomExercises(JSON.parse(savedEx));
            }
        }
    }, [user]);

    // Save to LocalStorage
    const saveCustomExercises = (exercises) => {
        if (user) {
            localStorage.setItem(`apex_custom_exercises_${user.email}`, JSON.stringify(exercises));
        }
    };

    // Add Function
    const addCustomExercise = (exercise) => {
        const newExercise = {
            ...exercise,
            id: Date.now(), // Unikal ID
            isCustom: true  // Custom olduğunu bilmək üçün
        };
        const updatedList = [newExercise, ...customExercises];
        setCustomExercises(updatedList);
        saveCustomExercises(updatedList);
    };

    // Delete Function
    const deleteCustomExercise = (id) => {
        const updatedList = customExercises.filter(ex => ex.id !== id);
        setCustomExercises(updatedList);
        saveCustomExercises(updatedList);
    };

    return (
        <ExerciseContext.Provider value={{
            customExercises,
            databaseExercises,
            addCustomExercise,
            deleteCustomExercise
        }}>
            {children}
        </ExerciseContext.Provider>
    );
};

export const useExercise = () => useContext(ExerciseContext);