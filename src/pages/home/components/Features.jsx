import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Smartphone, Globe, Activity, Trophy, ArrowUpRight } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-transparent relative font-sans">
        <div className="container mx-auto max-w-6xl">
            
            {/* BAŞLIQ HİSSƏSİ */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                        Why <span className="text-accent">Apex?</span>
                    </h2>
                    <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                        Biz sadəcə idman zalı deyilik. Biz sizin potensialınızı açığa çıxaran texnologiyayıq.
                    </p>
                </div>
                <Link to="/builder" className="group flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:text-accent hover:border-accent transition-all">
                    Learn more about our tech <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* 🔥 TƏKMİLLƏŞDİRİLMİŞ BENTO GRID 🔥 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                
                {/* 1. AI TRAINER (Sol Üst - Geniş) 
                    md:col-span-2 -> 2 sütun tutur
                */}
                <div className="md:col-span-2 min-h-[300px] relative group overflow-hidden rounded-3xl bg-[#111] border border-white/10 p-8 flex flex-col justify-between hover:border-accent/50 transition-all duration-500">
                    <div className="absolute top-0 right-0 p-40 bg-accent/5 blur-[120px] rounded-full group-hover:bg-accent/10 transition-colors"></div>
                    
                    <div className="relative z-10 flex justify-between items-start">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-accent">
                            <Zap size={28} />
                        </div>
                        <Activity size={100} className="text-white/5 group-hover:text-accent/10 transition-colors absolute right-0 top-0" />
                    </div>

                    <div className="relative z-10 space-y-2 mt-8">
                        <h3 className="text-2xl font-bold text-white">AI-Powered Tracking</h3>
                        <p className="text-gray-400 text-sm max-w-sm">
                            Süni intellekt hərəkətlərinizi analiz edir, formunuzu düzəldir və sizə ən uyğun inkişaf planını hazırlayır.
                        </p>
                    </div>
                </div>

                {/* 2. COMMUNITY (Sağ tərəf - Uzun Şaquli) 
                    md:row-span-2 -> 2 sıra hündürlüyündədir (Avtomatik uzanacaq)
                */}
                <div className="md:row-span-2 min-h-[300px] md:min-h-full relative group overflow-hidden rounded-3xl bg-[#111] border border-white/10 p-8 flex flex-col justify-between hover:border-accent/50 transition-all duration-500">
                    
                    {/* Arxa fon effekti (Gradient) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                        <div className="p-3 bg-white/5 w-fit rounded-xl border border-white/5 text-white mb-6 group-hover:text-accent transition-colors">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Global Community</h3>
                        <p className="text-gray-400 text-sm">Dünyanın hər yerindən 10,000+ atletlə yarışın və nəticələri paylaşın.</p>
                    </div>

                    {/* İstifadəçi avatarları */}
                    <div className="relative z-10 mt-8">
                        <div className="flex -space-x-4 mb-4">
                             {[1,2,3,4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#111] bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-gray-400">
                                    U{i}
                                </div>
                             ))}
                             <div className="w-10 h-10 rounded-full border-2 border-[#111] bg-accent text-black flex items-center justify-center font-bold text-xs">+2k</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-400">Top Rated</span>
                                <span className="text-accent text-xs font-bold">Top 1%</span>
                            </div>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-accent w-[85%] h-full rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. MOBILE APP (Sol Aşağı - Kiçik) */}
                <div className="min-h-[250px] relative group overflow-hidden rounded-3xl bg-[#111] border border-white/10 p-8 flex flex-col justify-between hover:border-accent/50 transition-all duration-500">
                     <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-accent/10 transition-colors"></div>
                     
                     <div className="relative z-10 p-3 bg-white/5 w-fit rounded-xl border border-white/5 text-white group-hover:text-accent transition-colors">
                        <Smartphone size={28} />
                     </div>
                     
                     <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-1">Mobile Access</h3>
                        <p className="text-gray-400 text-xs">Məşqlər cibinizdə. İstənilən yerdə.</p>
                     </div>
                </div>

                {/* 4. NUTRITION (Orta Aşağı - Kiçik) */}
                <div className="min-h-[250px] relative group overflow-hidden rounded-3xl bg-[#111] border border-white/10 p-8 flex flex-col justify-between hover:border-accent/50 transition-all duration-500">
                     <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
                     
                     <div className="relative z-10 flex justify-between items-start">
                        <div className="p-3 bg-white/5 w-fit rounded-xl border border-white/5 text-white group-hover:text-accent transition-colors">
                            <Shield size={28} />
                        </div>
                        <Trophy size={60} className="text-white/5 group-hover:text-accent/10 transition-colors" />
                     </div>

                     <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-1">Smart Nutrition</h3>
                        <p className="text-gray-400 text-xs">Fərdi qidalanma planları və makro izləmə.</p>
                     </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Features;