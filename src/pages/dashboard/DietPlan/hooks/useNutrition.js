import { useState, useEffect, useMemo } from 'react';

// === KÖMƏKÇİ FUNKSİYA: BUGÜNKÜ TARİXİ ALMAQ ===
// Nəticə verir: "2023-10-27" formatında string
const getTodayDateKey = () => {
  return new Date().toISOString().split('T')[0];
};

// Default hədəflər (İlk dəfə açılan zaman üçün)
const DEFAULT_GOALS = {
  calories: 2500,
  protein: 180,
  carbs: 250,
  fats: 80,
  water: 3000
};

export const useNutrition = () => {
  // 1. TARİXİ MÜƏYYƏN EDİRİK
  const dateKey = getTodayDateKey(); // Məs: "2024-01-16"

  // 2. STATE-LƏR (Lazy Initialization - Yaddaşdan oxumaq)
  
  // YEMƏKLƏRİ YÜKLƏ
  const [meals, setMeals] = useState(() => {
    // Brauzerin yaddaşına baxırıq: "biofuel_meals_2024-01-16" varmı?
    const saved = localStorage.getItem(`biofuel_meals_${dateKey}`);
    return saved ? JSON.parse(saved) : {
      breakfast: [],
      lunch: [],
      dinner: [],
      snack: []
    };
  });

  // SUYU YÜKLƏ
  const [waterIntake, setWaterIntake] = useState(() => {
    const saved = localStorage.getItem(`biofuel_water_${dateKey}`);
    return saved ? JSON.parse(saved) : 0;
  });

  // HƏDƏFLƏRİ YÜKLƏ (Hədəflər tarixə bağlı deyil, qlobaldır)
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem('biofuel_goals'); // Tarix yoxdur, həmişə eynidir
    return saved ? JSON.parse(saved) : DEFAULT_GOALS;
  });

  // 3. EFFECT-LƏR (Dəyişiklik olanda YADDA SAXLA)

  // Yemək dəyişəndə -> Yaddaşa yaz (Bugünkü tarixə)
  useEffect(() => {
    localStorage.setItem(`biofuel_meals_${dateKey}`, JSON.stringify(meals));
  }, [meals, dateKey]);

  // Su dəyişəndə -> Yaddaşa yaz (Bugünkü tarixə)
  useEffect(() => {
    localStorage.setItem(`biofuel_water_${dateKey}`, JSON.stringify(waterIntake));
  }, [waterIntake, dateKey]);

  // Hədəf dəyişəndə -> Yaddaşa yaz (Ümumi)
  useEffect(() => {
    localStorage.setItem('biofuel_goals', JSON.stringify(goals));
  }, [goals]);


  // 4. HESABLAMALAR (Eyni qalır)
  const totals = useMemo(() => {
    let calculatedTotal = { calories: 0, protein: 0, carbs: 0, fats: 0 };
    Object.values(meals).forEach((mealItems) => {
      mealItems.forEach((item) => {
        calculatedTotal.calories += item.calculatedCalories || 0;
        calculatedTotal.protein += item.calculatedProtein || 0;
        calculatedTotal.carbs += item.calculatedCarbs || 0;
        calculatedTotal.fats += item.calculatedFats || 0;
      });
    });
    return calculatedTotal;
  }, [meals]);

  // 5. ACTIONS (Funksiyalar)
  const addFood = (mealType, foodItem, weight) => {
    const ratio = weight / 100;
    const newEntry = {
      ...foodItem,
      id: Date.now().toString(),
      servingSize: weight,
      calculatedCalories: Math.round(foodItem.calories * ratio),
      calculatedProtein: Math.round(foodItem.protein * ratio),
      calculatedCarbs: Math.round(foodItem.carbs * ratio),
      calculatedFats: Math.round(foodItem.fats * ratio),
    };

    setMeals((prev) => ({
      ...prev,
      [mealType]: [...prev[mealType], newEntry]
    }));
  };

  const removeFood = (mealType, entryId) => {
    setMeals((prev) => ({
      ...prev,
      [mealType]: prev[mealType].filter((item) => item.id !== entryId)
    }));
  };

  const addWater = (amount = 250) => {
    setWaterIntake(prev => prev + amount);
  };

  const updateGoals = (newGoals) => {
    setGoals(prev => ({ ...prev, ...newGoals }));
  };

  return {
    meals,
    totals,
    goals,
    waterIntake,
    addFood,
    removeFood,
    addWater,
    updateGoals
  };
};