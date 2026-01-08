import React from 'react';
import { TrendingUp, Award, CheckCircle2 } from 'lucide-react';

const successStories = [
  {
    id: 1,
    name: "Jason Marks",
    result: "-15kg Fat Loss",
    time: "12 Weeks",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    tag: "Transformation"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    result: "+5kg Lean Muscle",
    time: "16 Weeks",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    tag: "Muscle Gain"
  },
  {
    id: 3,
    name: "David Chen",
    result: "Marathon Ready",
    time: "8 Weeks",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop",
    tag: "Endurance"
  }
];

const Results = () => {
  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
                Real <span className="text-accent text-outline">Results</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                Join 10,000+ members who have already transformed their lives with Apex.
            </p>
        </div>

        {/* Results Grid */}
        {/* 'items-stretch' əlavə olundu (default olsa da, əminlik üçün) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {successStories.map((story) => (
                <div 
                    key={story.id} 
                    // DƏYİŞİKLİK BURADA: 'h-full flex flex-col' əlavə edildi ki, kart tam hündürlüyü tutsun
                    className="group relative bg-[#0f0f0f] rounded-3xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-500 h-full flex flex-col"
                >
                    
                    {/* Image */}
                    {/* 'shrink-0' əlavə edildi ki, sıxılmasın */}
                    <div className="h-[400px] overflow-hidden relative shrink-0">
                        <img 
                            src={story.image} 
                            alt={story.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                        />
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-accent text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-accent/20">
                            {story.tag}
                        </div>
                    </div>

                    {/* Bottom Info */}
                    {/* 'flex-1' və 'flex flex-col' əlavə edildi ki, aşağı hissə boşluğu doldursun */}
                    <div className="p-8 flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-white">{story.name}</h3>
                                <CheckCircle2 size={24} className="text-accent" />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Result</p>
                                    <p className="text-accent font-black text-lg">{story.result}</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Timeframe</p>
                                    <p className="text-white font-black text-lg">{story.time}</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-6 py-4 border border-white/10 text-white font-bold uppercase text-xs tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all">
                            View Case Study
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* Motivation Line */}
        <div className="mt-20 p-8 rounded-[40px] bg-accent flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative group">
            <div className="relative z-10">
                <h3 className="text-black text-3xl md:text-4xl font-black uppercase italic leading-none">Ready to be our next story?</h3>
                <p className="text-black/70 font-bold mt-2">Start your transformation journey today.</p>
            </div>
            <button className="relative z-10 px-10 py-5 bg-black text-white font-black uppercase tracking-widest hover:scale-105 transition-transform rounded-2xl">
                Get Started Now
            </button>
            {/* Background Icon Decoration */}
            <Award size={150} className="absolute -right-10 -bottom-10 text-black/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </div>

      </div>
    </section>
  );
};

export default Results;