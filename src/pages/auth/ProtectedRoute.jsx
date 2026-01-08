import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Yuxarıdakı faylı çağırır

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Əgər istifadəçi yoxdursa, Auth səhifəsinə atır
    // state={{ from: location }} hissəsi istifadəçi login olandan sonra 
    // onu geri (getmək istədiyi yerə) qaytarmaq üçün lazımdır.
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;