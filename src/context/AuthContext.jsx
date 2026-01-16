import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Səhifə açılanda yoxla: Giriş etmiş adam varmı?
  useEffect(() => {
    const savedUser = localStorage.getItem('biofuel_currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // 2. Qeydiyyat Funksiyası
  const signup = (fullName, email, password) => {
    // Mövcud istifadəçiləri oxu
    const users = JSON.parse(localStorage.getItem('biofuel_users') || "[]");
    
    // Eyni mail varmı yoxla?
    const exists = users.find(u => u.email === email);
    if (exists) {
      throw new Error("This email is already registered!");
    }

    const newUser = { id: Date.now(), fullName, email, password };
    
    // Yaddaşa yaz
    users.push(newUser);
    localStorage.setItem('biofuel_users', JSON.stringify(users));
    
    return true; // Uğurlu
  };

  // 3. Giriş Funksiyası
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('biofuel_users') || "[]");
    const validUser = users.find(u => u.email === email && u.password === password);

    if (!validUser) {
      throw new Error("Invalid email or password!");
    }

    // Parolu silib sessiyaya yazırıq (Təhlükəsizlik üçün)
    const { password: _, ...userWithoutPass } = validUser;
    
    setUser(userWithoutPass);
    localStorage.setItem('biofuel_currentUser', JSON.stringify(userWithoutPass));
  };

  // 4. Çıxış Funksiyası
  const logout = () => {
    setUser(null);
    localStorage.removeItem('biofuel_currentUser');
    // Səhifəni yeniləyə və ya redirect edə bilərik
    window.location.href = "/auth"; 
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);