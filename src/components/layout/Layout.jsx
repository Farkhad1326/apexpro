import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundLayout from './BackgroundLayout';

const Layout = () => {
  return (
    <BackgroundLayout>
      {/* 👇 DƏYİŞİKLİK BURADA: 'bg-black' sildik, 'bg-transparent' etdik */}
      <div className="min-h-screen bg-transparent flex flex-col relative z-10">
        
        <Navbar />
        
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        
        <Footer />
        
      </div>
    </BackgroundLayout>
  );
};

export default Layout;