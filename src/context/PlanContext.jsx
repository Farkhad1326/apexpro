import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; // İstifadəçi ID-si lazımdır

const PlanContext = createContext();

export const usePlans = () => useContext(PlanContext);

export const PlanProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [plans, setPlans] = useState([]);

  // 1. Səhifə açılanda planları yaddaşdan oxu
  useEffect(() => {
    const savedPlans = JSON.parse(localStorage.getItem('apex_plans')) || [];
    setPlans(savedPlans);
  }, []);

  // 2. Planlar dəyişəndə yaddaşı yenilə
  useEffect(() => {
    localStorage.setItem('apex_plans', JSON.stringify(plans));
  }, [plans]);

  // --- ACTIONS ---

  // İstifadəçinin öz planlarını gətir (Filter)
  const getUserPlans = () => {
    if (!currentUser) return [];
    return plans.filter(p => p.userId === currentUser.id);
  };

  // Yeni Plan Yarat
  const addPlan = (newPlan) => {
    // Planın içinə kimə aid olduğunu (userId) yazırıq
    const planWithUser = { 
      ...newPlan, 
      id: Date.now(), 
      userId: currentUser?.id,
      createdAt: new Date().toISOString() 
    };
    
    setPlans(prev => [...prev, planWithUser]);
    return planWithUser;
  };

  // Planı Sil
  const deletePlan = (planId) => {
    setPlans(prev => prev.filter(p => p.id !== planId));
  };

  return (
    <PlanContext.Provider value={{ plans, getUserPlans, addPlan, deletePlan }}>
      {children}
    </PlanContext.Provider>
  );
};