import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';

const heroBg = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { login } = useAuth(); // Context-dən login funksiyasını götürürük
    const navigate = useNavigate();
    const location = useLocation();

    // Əgər istifadəçi qorunan bir səhifəyə girmək istəyirdisə, login-dən sonra ora qayıtsın
    const from = location.state?.from?.pathname || "/dashboard";

    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // UX üçün kiçik gecikmə
        setTimeout(() => {
            try {
                if (isLogin) {
                    // LOGIN PROSESİ
                    // Bizim AuthContext-də login bir obyekt qəbul edir
                    login({ email: formData.email, name: formData.name || 'User' });
                    navigate(from, { replace: true });
                } else {
                    // REGISTER PROSESİ (Hələlik login ilə eyni məntiq)
                    if (!formData.name) {
                        setIsLoading(false);
                        return setError("Name is required.");
                    }
                    login({ email: formData.email, name: formData.name });
                    navigate(from, { replace: true });
                }
            } catch (err) {
                setError("Something went wrong. Please try again.");
                setIsLoading(false);
            }
        }, 1200);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden font-sans bg-black">
            {/* --- BACKGROUND LAYERS --- */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 scale-105"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10 backdrop-blur-[3px]" />
            
            {/* --- MAIN CARD --- */}
            <div className="w-full max-w-[420px] relative z-20">
                <div className="bg-[#09090b]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden relative group">
                    
                    {/* Neon Dekorasiya (Dizaynındakı yaşıl xətt) */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a3e635] to-transparent opacity-50" />

                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-black italic text-white mb-2 uppercase tracking-tighter">
                            {isLogin ? 'Welcome Back' : 'Join Apex'}
                        </h2>
                        <p className="text-zinc-400 text-sm font-medium">
                            {isLogin ? 'Access your elite protocols.' : 'Begin your transformation today.'}
                        </p>
                    </div>

                    {error && (
                        <div className="mb-6 p-3 bg-red-500/10 border-l-2 border-red-500 text-red-400 text-xs font-bold flex items-center gap-2 animate-bounce">
                            <span>⚠️</span> {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {!isLogin && (
                            <div className="group relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#a3e635] transition-colors">
                                    <User size={20} />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="w-full bg-[#121212] border border-zinc-800 text-white placeholder:text-zinc-600 rounded-xl py-4 pl-12 pr-4 focus:border-[#a3e635] focus:outline-none transition-all"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required={!isLogin}
                                />
                            </div>
                        )}

                        <div className="group relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#a3e635] transition-colors">
                                <Mail size={20} />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="w-full bg-[#121212] border border-zinc-800 text-white placeholder:text-zinc-600 rounded-xl py-4 pl-12 pr-4 focus:border-[#a3e635] focus:outline-none transition-all"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="group relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#a3e635] transition-colors">
                                <Lock size={20} />
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full bg-[#121212] border border-zinc-800 text-white placeholder:text-zinc-600 rounded-xl py-4 pl-12 pr-4 focus:border-[#a3e635] focus:outline-none transition-all"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            disabled={isLoading}
                            className="w-full group bg-black border border-[#a3e635]/50 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-[#a3e635] hover:text-black transition-all duration-300 flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
                        >
                            {isLoading ? <Loader2 className="animate-spin" /> : (
                                <>
                                    {isLogin ? 'Log In' : 'Start Journey'}
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                        <p className="text-zinc-500 text-sm">
                            {isLogin ? "New to Apex?" : "Already have an account?"}
                            <button
                                onClick={() => { setIsLogin(!isLogin); setError(''); }}
                                className="ml-2 text-white font-bold hover:text-[#a3e635] transition-colors underline underline-offset-4"
                            >
                                {isLogin ? 'Create Account' : 'Log In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;