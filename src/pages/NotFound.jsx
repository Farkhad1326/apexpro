import React from 'react'; // 👈 Ən vacib sətir budur (Xətanı bu həll edəcək)
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 404 Text */}
      <h1 className="text-[150px] md:text-[200px] font-black italic text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-black leading-none select-none">
        404
      </h1>

      {/* Message */}
      <div className="relative z-10 -mt-10 md:-mt-16">
        <div className="flex items-center justify-center gap-2 text-neon-green mb-4">
            <AlertTriangle size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
          Lost in the Gym?
        </h2>
        <p className="text-zinc-500 max-w-md mx-auto mb-8 text-sm md:text-base">
          The page you are looking for doesn't exist or has been moved. Let's get you back to the workout.
        </p>

        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-neon-green text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-[#c2e242] hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        >
          <Home size={20} /> Back to Home
        </Link>
      </div>

    </div>
  );
};

export default NotFound;