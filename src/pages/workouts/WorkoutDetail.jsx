import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { workouts } from '../../data/workouts';
import { 
  FaArrowLeft, FaClock, FaDumbbell, FaSignal, FaCheckCircle, 
  FaChevronDown, FaChevronUp, FaBurn, FaTimes 
} from 'react-icons/fa';

// Shadcn komponentləri (sənin qeyd etdiyin path ilə)
import { Button } from "@/components/ui/shared/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/shared/dialog";

// --- CUSTOM COMPONENTS ---
import ProtocolRules from '../workouts/components/ProtocolRules'

const WorkoutDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [activePhase, setActivePhase] = useState(0); 
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const workout = workouts.find(w => w.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    document.body.style.overflow = isJoinModalOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isJoinModalOpen]);

  if (!workout) {
    return (
      <div className="min-h-screen bg-transparent flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4 font-mono text-neon-green tracking-tighter">ERROR_404: PROTOCOL_OFFLINE</h1>
        <button onClick={() => navigate('/workouts')} className="text-zinc-500 hover:text-white transition-colors uppercase text-sm tracking-widest font-bold">
          ← Back to Command Center
        </button>
      </div>
    );
  }

  const { title, image, meta, description, schedule } = workout;

  const handleConfirmJoin = () => {
    setIsJoinModalOpen(false);
    alert(`Protocol "${title}" initiated successfully! Synchronization started.`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20 font-sans selection:bg-neon-green selection:text-black relative">
      
      {/* --- 1. IMMERSIVE HERO SECTION --- */}
      <div className="relative h-[85vh] w-full">
        <div className="absolute inset-0">
          <img src={image} alt={title} className="w-full h-full object-cover grayscale-[30%]" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
        </div>

        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-24 z-10">
          <Link to="/workouts" className="inline-flex items-center text-zinc-600 hover:text-neon-green mb-8 transition-colors w-fit group font-mono text-[10px] tracking-[0.3em] uppercase">
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> System / Workouts
          </Link>

          <div className="max-w-5xl animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-neon-green text-black px-4 py-1 text-[11px] font-black uppercase tracking-[0.2em]">
                {meta.goal}
              </span>
              <span className="border border-zinc-800 bg-black/40 text-zinc-400 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em]">
                LVL: {meta.level}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black italic text-white mb-8 leading-[0.85] tracking-tighter">
              {title.toUpperCase()}
            </h1>
            
            <div className="inline-flex flex-wrap gap-2 p-1 bg-white/[0.02] border border-white/[0.05] rounded-lg">
              <div className="flex items-center gap-3 px-6 py-3 border-r border-white/5 last:border-none">
                <FaClock className="text-neon-green text-sm" />
                <div>
                  <p className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">Freq</p>
                  <p className="text-xs font-bold text-zinc-300">{meta.days} Days/Week</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 border-r border-white/5 last:border-none">
                <FaDumbbell className="text-neon-green text-sm" />
                <div>
                  <p className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">Gear</p>
                  <p className="text-xs font-bold text-zinc-300">{meta.equipment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20 grid lg:grid-cols-3 gap-16">
        
        {/* --- 2. MAIN CONTENT (Left) --- */}
        <div className="lg:col-span-2 space-y-20">
          <section>
            <h3 className="text-xl font-black italic mb-8 flex items-center gap-3 text-white tracking-widest">
              <span className="text-neon-green">/</span> MISSION_BRIEF
            </h3>
            <div 
              className="prose prose-invert max-w-none text-zinc-500 leading-relaxed font-light border-l border-zinc-900 pl-8 text-lg"
              dangerouslySetInnerHTML={{ __html: description }} 
            />
          </section>

          <section>
            <h3 className="text-xl font-black italic mb-10 flex items-center gap-3 text-white tracking-widest">
              <span className="text-neon-green">/</span> PROTOCOL_STEPS
            </h3>
            
            <div className="space-y-4">
              {schedule.map((phase, index) => (
                <div 
                  key={index} 
                  className={`border transition-all duration-500 rounded-sm ${
                    activePhase === index ? 'border-neon-green/40 bg-zinc-900/20' : 'border-zinc-900 bg-transparent hover:border-zinc-800'
                  }`}
                >
                  <button 
                    onClick={() => setActivePhase(activePhase === index ? null : index)}
                    className="w-full flex items-center justify-between p-8"
                  >
                    <div className="flex items-center gap-8">
                      <span className={`text-2xl font-black italic ${activePhase === index ? 'text-neon-green' : 'text-zinc-800'}`}>
                        0{index + 1}
                      </span>
                      <div className="text-left">
                        <h4 className={`text-lg font-bold uppercase tracking-widest ${activePhase === index ? 'text-white' : 'text-zinc-500'}`}>
                          {phase.phaseName}
                        </h4>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-[10px] font-mono text-neon-green uppercase tracking-widest">{phase.duration}</span>
                          <span className="text-[10px] text-zinc-700 font-mono uppercase tracking-widest">{phase.exercises.length} Units</span>
                        </div>
                      </div>
                    </div>
                    {activePhase === index ? <FaChevronUp className="text-neon-green text-xs" /> : <FaChevronDown className="text-zinc-800 text-xs" />}
                  </button>

                  {activePhase === index && (
                    <div className="border-t border-zinc-900 p-6 space-y-3 bg-black/40">
                      {phase.exercises.map((ex) => (
                        <div key={ex.id} className="flex flex-col md:flex-row gap-6 p-5 rounded-sm border border-transparent hover:border-zinc-800 hover:bg-zinc-900/30 transition-all group">
                          <div className="w-16 h-16 bg-zinc-900 overflow-hidden shrink-0 border border-zinc-800">
                            <img src={ex.image} alt={ex.name} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                          </div>
                          <div className="flex-grow flex flex-col justify-center">
                            <h5 className="font-bold text-zinc-300 group-hover:text-white transition-colors tracking-wide">{ex.name}</h5>
                            {ex.note && <p className="text-[11px] text-zinc-600 mt-2 italic font-light">{ex.note}</p>}
                          </div>
                          <div className="shrink-0 flex items-center gap-8 md:border-l border-zinc-900 md:pl-8">
                            <div className="text-center">
                              <span className="block text-[9px] text-zinc-700 uppercase font-black tracking-tighter">Sets</span>
                              <span className="block text-lg font-mono font-bold text-zinc-500">{ex.sets}</span>
                            </div>
                            <div className="text-center">
                              <span className="block text-[9px] text-zinc-700 uppercase font-black tracking-tighter">Reps</span>
                              <span className="block text-lg font-mono font-bold text-neon-green">{ex.reps}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- 3. SIDEBAR (ACTIONS) --- */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-4">
            
            <div className="bg-[#111] border border-zinc-900 p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-neon-green/5 blur-[60px] pointer-events-none" />

              <h4 className="text-lg font-black italic text-white mb-3 uppercase tracking-tighter">Initialize Deployment</h4>
              <p className="text-zinc-600 text-xs mb-10 leading-relaxed font-light uppercase tracking-widest">
                Confirm protocol selection to synchronize training data.
              </p>
              
              <Button
                onClick={() => setIsJoinModalOpen(true)}
                className="w-full font-black uppercase tracking-[0.3em] transition-all duration-300 rounded-sm bg-neon-green text-black hover:bg-white hover:scale-[1.02] text-xs py-6 h-auto"
              >
                Initiate Program
              </Button>

              <div className="mt-6 flex items-center justify-center gap-3 text-[9px] font-black text-zinc-800 tracking-[0.2em]">
                <FaCheckCircle className="text-neon-green/40" /> SYSTEM_READY
              </div>
            </div>

            <div className="bg-[#0e0e0e] border border-zinc-900 p-8 rounded-sm">
              <h5 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.3em] mb-8">Metadata_Specs</h5>
              <div className="space-y-6 text-[11px] uppercase tracking-widest">
                <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                  <span className="text-zinc-600 font-bold">Est_Burn</span>
                  <span className="text-zinc-400 font-black flex items-center gap-2">
                    <FaBurn className="text-orange-900/50 text-xs" /> High_Impact
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                  <span className="text-zinc-600 font-bold">Target_Focus</span>
                  <span className="text-zinc-400 font-black">{meta.muscle}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                  <span className="text-zinc-600 font-bold">Expertise</span>
                  <span className="text-zinc-400 font-black">{meta.level}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-zinc-600 font-bold">Rating</span>
                  <span className="text-neon-green font-black">STRL // {meta.rating}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <ProtocolRules />

      {/* --- SHADCN DIALOG (Modal) --- */}
      <Dialog open={isJoinModalOpen} onOpenChange={setIsJoinModalOpen}>
        <DialogContent className="bg-[#18181b] border border-white/10 max-w-lg rounded-2xl p-0 overflow-hidden">
          <DialogHeader className="p-6 border-b border-white/5">
            <DialogTitle className="text-xl font-black italic text-white uppercase tracking-wider">
              CONFIRM DEPLOYMENT
            </DialogTitle>
          </DialogHeader>

          <div className="p-6">
            <div className="space-y-6">
              <DialogDescription className="text-zinc-400 text-sm leading-relaxed">
                You are about to initiate the <span className="text-neon-green font-bold">{title}</span> protocol. 
                This will add the routine to your active dashboard and reset your current progress tracking.
              </DialogDescription>
              
              <div className="bg-zinc-900/50 p-4 rounded border border-white/5">
                <h5 className="text-xs font-bold text-white uppercase mb-2 tracking-widest">Requirements Check:</h5>
                <ul className="text-xs text-zinc-500 space-y-1 font-mono uppercase">
                  <li>• Equipment: <span className="text-zinc-300">{meta.equipment}</span></li>
                  <li>• Experience: <span className="text-zinc-300">{meta.level}</span></li>
                  <li>• Commitment: <span className="text-zinc-300">{meta.days} Days/Week</span></li>
                </ul>
              </div>

              <DialogFooter className="flex gap-4 pt-4 sm:justify-start">
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    className="w-full font-black uppercase tracking-widest bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 text-xs py-6 h-auto border-white/10"
                  >
                    Abort
                  </Button>
                </DialogClose>
                
                <Button
                  onClick={handleConfirmJoin}
                  className="w-full font-black uppercase tracking-widest bg-neon-green text-black hover:bg-white hover:scale-[1.02] text-xs py-6 h-auto"
                >
                  Confirm Start
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default WorkoutDetail;