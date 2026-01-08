import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, Dumbbell } from 'lucide-react';
import heroBg from '../../../assets/images/apex-hero-bg.jpg'; // ⚠️ Yol dəyişdi (daha dərinə getdik)

const Hero = () => {
  return (
    <div className="relative min-h-[100vh] sm:min-h-[115vh] bg-black text-white font-sans selection:bg-accent selection:text-black">
      
      {/* 1. ARXA FON */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img 
          src={heroBg} 
          alt="Athlete workout" 
          className="w-full h-full object-cover object-[75%] sm:object-right opacity-85" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-screen flex flex-col justify-center pb-20 sm:pb-0">
        <div className="max-w-2xl space-y-6 sm:space-y-8 mt-[-80px] sm:mt-[-50px]"> 
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md w-fit">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#D4F458]"></span>
                <span className="text-accent text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                    New Generation Fitness
                </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic">
                <span className="block text-white">Defy Your</span>
                <span className="block text-outline">Limits</span>
                <span className="block text-white">Today</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-xl max-w-lg leading-relaxed border-l-4 border-accent pl-4 sm:pl-6">
                Hər təkrar, hər damla tər səni hədəfinə yaxınlaşdırır. 
                <span className="text-white font-bold"> Apex Fitness</span> ilə potensialını maksimuma çatdır.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-6">
                <Link 
                    to="/workouts" 
                    className="w-full sm:w-auto text-center group relative px-6 py-3 sm:px-8 sm:py-4 bg-accent text-black font-black text-lg uppercase tracking-wider overflow-hidden hover:scale-105 transition-transform duration-300 clip-path-slant rounded-lg"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Start Training <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
                
                <Link 
                    to="/store" 
                    className="w-full sm:w-auto text-center flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 font-bold text-white border-b border-white/30 hover:border-accent hover:text-accent transition-colors duration-300"
                >
                    <Play size={20} fill="currentColor" /> Watch Demo
                </Link>
            </div>
        </div>
      </div>

      {/* 3. FLOATING STATS BAR */}
      <div className="absolute bottom-0 mb-6 sm:mb-10 left-0 w-full px-4 sm:px-6 z-20">
        <div className="container mx-auto max-w-5xl">
            <div className="bg-[#121212]/90 backdrop-blur-xl border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl grid grid-cols-2 md:flex justify-between items-center gap-6 md:gap-8 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-center gap-3 w-full">
                    <div className="p-2.5 sm:p-4 bg-white/5 rounded-full text-accent shadow-[0_0_15px_rgba(212,244,88,0.2)]">
                        <Users size={20} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                        <h4 className="text-xl sm:text-3xl font-bold text-white">12k+</h4>
                        <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-medium">Members</p>
                    </div>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/10"></div>
                <div className="flex items-center justify-center gap-3 w-full">
                    <div className="p-2.5 sm:p-4 bg-white/5 rounded-full text-accent shadow-[0_0_15px_rgba(212,244,88,0.2)]">
                        <Dumbbell size={20} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                        <h4 className="text-xl sm:text-3xl font-bold text-white">500+</h4>
                        <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-medium">Exercises</p>
                    </div>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/10"></div>
                <div className="col-span-2 md:col-span-1 w-full flex items-center justify-center gap-3">
                    <div className="p-2.5 sm:p-4 bg-white/5 rounded-full text-accent shadow-[0_0_15px_rgba(212,244,88,0.2)]">
                        <Star size={20} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                        <h4 className="text-xl sm:text-3xl font-bold text-white">4.9</h4>
                        <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-medium">Rating</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;