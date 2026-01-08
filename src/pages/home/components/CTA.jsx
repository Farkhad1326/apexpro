import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container">
                {/* Neon Gradient Qutusu */}
                <div className="relative bg-accent rounded-[3rem] p-10 md:p-20 overflow-hidden group">

                    {/* Arxa fon dekoru */}
                    <div className="absolute top-0 right-0 p-40 bg-white/20 blur-[100px] rounded-full group-hover:bg-white/30 transition-colors duration-700"></div>

                    <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                        <div className="inline-flex items-center gap-2 bg-black text-accent px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                            <Sparkles size={14} /> Limited Spots Available
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black text-black uppercase italic tracking-tighter leading-none">
                            Stop Wishing.<br />Start <span className="text-outline-black">Dominating.</span>
                        </h2>

                        <p className="text-black/70 max-w-xl font-bold text-lg">
                            Join the Apex community today and get your first 14 days of premium coaching for free. No commitments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
                            <Link to="/builder" className="bg-black text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105transition-transform flex items-center justify-center gap-2">
                                Get Started Now <ArrowRight size={20} />
                            </Link>
                            <Link to="/blog" className="bg-transparent border-2 border-black/20 text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black/5 transition-colors">
                                Read Success Stories
                            </Link>
                        </div>
                    </div>

                    {/* Böyük şəffaf yazı fonu */}
                    <div className="absolute -bottom-10 -left-10 text-[12rem] font-black text-black/5 uppercase italic select-none pointer-events-none">
                        APEX
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;