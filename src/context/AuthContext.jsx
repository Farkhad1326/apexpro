import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Yüklənmə state-i mütləq olmalıdır

  useEffect(() => {
    // Brauzerin yaddaşını yoxlayırıq
    const storedUser = localStorage.getItem('apex_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Auth parsing error:", error);
        localStorage.removeItem('apex_user');
      }
    }
    setLoading(false); // Yoxlama bitdi
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('apex_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('apex_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {/* Loading true ikən heç nə render etmirik ki, 'user' null kimi görünməsin */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);