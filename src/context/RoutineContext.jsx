import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const RoutineContext = createContext();

export const RoutineProvider = ({ children }) => {
  const { user } = useAuth();
  const [myRoutines, setMyRoutines] = useState([]);

  // 1. Səhifə açılanda yaddaşdan rutinləri oxu
  useEffect(() => {
    if (user) { // Hər istifadəçinin öz rutini olsun
      const savedData = localStorage.getItem(`apex_routines_${user.email}`);
      if (savedData) {
        setMyRoutines(JSON.parse(savedData));
      } else {
        setMyRoutines([]);
      }
    }
  }, [user]);

  // 2. Rutinləri yaddaşa yazan funksiya
  const saveToLocalStorage = (routines) => {
    if (user) {
      localStorage.setItem(`apex_routines_${user.email}`, JSON.stringify(routines));
    }
  };

  // 3. Yeni Rutin Əlavə Etmək (Həm Builder, həm də Hazır planlar üçün)
  const addRoutine = (routine) => {
    // Eyni rutini təkrar əlavə etməmək üçün yoxlama
    const exists = myRoutines.find(r => r.id === routine.id);
    if (exists) {
      alert("This routine is already in your plans!");
      return;
    }

    const updatedRoutines = [...myRoutines, { ...routine, dateAdded: new Date() }];
    setMyRoutines(updatedRoutines);
    saveToLocalStorage(updatedRoutines);
    alert("Plan successfully added to Dashboard!");
  };

  // 4. Rutini Silmək
  const deleteRoutine = (routineId) => {
    const updatedRoutines = myRoutines.filter(r => r.id !== routineId);
    setMyRoutines(updatedRoutines);
    saveToLocalStorage(updatedRoutines);
  };

  return (
    <RoutineContext.Provider value={{ myRoutines, addRoutine, deleteRoutine }}>
      {children}
    </RoutineContext.Provider>
  );
};

export const useRoutine = () => useContext(RoutineContext);