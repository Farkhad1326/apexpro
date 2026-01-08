import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Auth Imports (Təhlükəsizlik üçün)
import { AuthProvider } from '../src/context/AuthContext'; // <--- YENİ
import ProtectedRoute from '../src/pages/auth/ProtectedRoute'; // <--- YENİ

// Public Layouts & Pages
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import BrowseWorkouts from './pages/workouts/BrowseWorkouts';
import WorkoutDetail from './pages/workouts/WorkoutDetail';
import ExerciseLibrary from './pages/exercises/ExerciseLibrary';
import RoutineBuilder from './pages/builder/RoutineBuilder';
import Store from './pages/store/Store';
import Blog from './pages/blog/Blog';
import FAQ from './pages/FAQsec/FAQ';
import AuthPage from './pages/auth/AuthPage';
import NotFound from './pages/NotFound';

// Dashboard Layouts & Pages
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardHome from './pages/dashboard/Home';
import MyRoutines from './pages/dashboard/MyRoutines';
import MyExercises from './pages/dashboard/MyExercises';
import Settings from './pages/dashboard/Settings';
import Premium from './pages/dashboard/Premium';

function App() {
  return (
    // 1. AuthProvider bütün tətbiqi əhatə edir ki, Login məlumatını hər yerdə bilək
    <AuthProvider>
      <Routes>
        
        {/* ================================================
            PUBLIC ZONE (Hər kəsə açıq)
           ================================================ */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Public Databases */}
          <Route path="workouts" element={<BrowseWorkouts />} />
          <Route path="workouts/:id" element={<WorkoutDetail />} />
          <Route path="exercises" element={<ExerciseLibrary />} />

          {/* Tools */}
          <Route path="builder" element={<RoutineBuilder />} />

          {/* Others */}
          <Route path="store" element={<Store />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="auth" element={<AuthPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ================================================
            PRIVATE ZONE (Dashboard - Qorunan Hissə)
            Buraya ProtectedRoute əlavə etdik. 
            Login olmayan girə bilməz.
           ================================================ */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />          {/* /dashboard */}
          <Route path="routines" element={<MyRoutines />} />   {/* /dashboard/routines */}
          <Route path="exercises" element={<MyExercises />} /> {/* /dashboard/exercises */}
          <Route path="settings" element={<Settings />} />     {/* /dashboard/settings */}
          <Route path="premium" element={<Premium />} />       {/* /dashboard/premium */}
        </Route>

        {/* Profilə basanda Dashboarda atır (Artıq Dashboard qorunur) */}
        <Route path="/profile" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;