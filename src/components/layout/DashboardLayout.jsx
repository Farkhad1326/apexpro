import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sol tərəf - Sabit Menyu */}
      <Sidebar />

      {/* Sağ tərəf - Dəyişən Məzmun */}
      <main className="flex-1 h-screen overflow-y-auto bg-black">
        <div className="p-8 max-w-6xl mx-auto pb-24">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;