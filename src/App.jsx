import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Auth Imports
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './pages/auth/ProtectedRoute';

// Public Layouts & Pages
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import BrowseWorkouts from './pages/workouts/BrowseWorkouts';
import WorkoutDetail from './pages/workouts/WorkoutDetail';
import ExerciseLibrary from './pages/exercises/ExerciseLibrary';
import RoutineBuilder from './pages/builder/RoutineBuilder';
import Store from './pages/store/Store';
import ProductDetail from './pages/store/ProductDetail';
import Checkout from './pages/store/Checkout';
import OrderConfirmation from './pages/store/OrderConfirmation';
import Blog from './pages/blog/Blog';
import FAQ from './pages/FAQsec/FAQ';
import AuthPage from './pages/auth/AuthPage';
import NotFound from './pages/NotFound';

// --- DASHBOARD SİSTEMİ ---
import DashboardLayout from './components/layout/DashboardLayout';

// =========================================================
// 🔴 DİQQƏT: BURADA YOLLARI DÜZƏLTDİM
// =========================================================

// 1. KÖHNƏLƏR (Bunlar hələ də 'pages' qovluğundadır)
import DashboardHome from './pages/dashboard/Home'; 
import MyRoutines from './pages/dashboard/MyRoutines';   // <-- DÜZƏLDİ
import MyExercises from './pages/dashboard/MyExercises'; // <-- DÜZƏLDİ

// 2. YENİLƏR (Bunları bayaq 'src/dashboard' içində yaratdıq)
// Əgər xəta versə, deməli bunları da 'pages' içinə atmısan. 
// O zaman başındakı './' yerinə './pages/' yaz.
import DietPlan from './pages/dashboard/DietPlan/index';         
import ProgressTracker from './pages/dashboard/ProgressTracker/index'; 

function App() {
  return (
    <AuthProvider>
      <Routes>
        
        {/* PUBLIC ZONE */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="workouts" element={<BrowseWorkouts />} />
          <Route path="workouts/:id" element={<WorkoutDetail />} />
          <Route path="exercises" element={<ExerciseLibrary />} />
          <Route path="builder" element={<RoutineBuilder />} />
          <Route path="store" element={<Store />} />
          <Route path="store/product/:slug" element={<ProductDetail />} />
          <Route path="store/checkout" element={<Checkout />} />
          <Route path="store/order-confirmation/:orderId" element={<OrderConfirmation />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* DASHBOARD ZONE */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
            <Route index element={<DashboardHome />} />
            
            {/* Routines Database */}
            <Route path="routines" element={<MyRoutines />} />
            
            {/* Exercises Database */}
            <Route path="exercises" element={<MyExercises />} />
            
            {/* Yeni Səhifələr */}
            <Route path="diet" element={<DietPlan />} />
            <Route path="progress" element={<ProgressTracker />} />

        </Route>

        <Route path="/profile" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;