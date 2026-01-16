import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Dumbbell, ShoppingCart, User as UserIcon, ChevronDown, Menu, X, LogIn, 
  Layers, BookOpen, HelpCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/shared/button';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    // --- STATE ---
    const [isWorkoutsOpen, setIsWorkoutsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState(null); // Accordion üçün

    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth(); 

    // Səhifə dəyişəndə menyunu bağla
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setMobileSubmenu(null);
    }, [location]);

    // Mobil menyu açılanda scrollu kilidlə
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    const linkStyles = ({ isActive }) =>
        `flex items-center gap-1 hover:text-accent transition-colors ${isActive ? 'text-accent font-bold' : 'text-zinc-400'}`;

    // Mobil Accordion Toggle
    const toggleMobileSubmenu = (menuName) => {
        setMobileSubmenu(mobileSubmenu === menuName ? null : menuName);
    };

    const handleProfileClick = () => {
        if (user) {
            navigate('/dashboard');
        } else {
            navigate('/auth');
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* ================= DESKTOP NAVBAR (Standart) ================= */}
            <nav className="fixed top-0 w-full z-[100] bg-black/30 backdrop-blur-xl border-b border-white/5 text-white">
                <div className="container h-20 flex items-center justify-between">
                    
                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-2 group relative z-[110]">
                        <div className="bg-accent p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(212,244,88,0.2)]">
                            <Dumbbell className="text-black" size={24} />
                        </div>
                        <span className="text-2xl font-black tracking-tighter uppercase italic">Apex<span className="text-accent">Pro</span></span>
                    </Link>

                    {/* DESKTOP LINKS */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink to="/store" className={linkStyles}>Store</NavLink>
                        
                        {/* Workouts Dropdown */}
                        <div className="relative group cursor-pointer h-20 flex items-center" 
                             onMouseEnter={() => setIsWorkoutsOpen(true)} 
                             onMouseLeave={() => setIsWorkoutsOpen(false)}>
                            <div className={`flex items-center gap-1 transition-colors ${location.pathname.includes('/workouts') || location.pathname.includes('/builder') ? 'text-accent' : 'text-zinc-400 group-hover:text-accent'}`}>
                                Workouts <ChevronDown size={16} className={`transition-transform duration-300 ${isWorkoutsOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {isWorkoutsOpen && (
                                <div className="absolute top-16 left-0 w-56 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="bg-[#0f0f11] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1">
                                        <Link to="/workouts" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg text-sm text-zinc-300 hover:text-white transition-colors">
                                            <Layers size={16} /> Routine Database
                                        </Link>
                                        <Link to="/builder" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg text-sm text-zinc-300 hover:text-white transition-colors">
                                            <Dumbbell size={16} /> Routine Builder
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <NavLink to="/exercises" className={linkStyles}>Exercises</NavLink>
                        
                        {/* More Dropdown */}
                        <div className="relative group cursor-pointer h-20 flex items-center" 
                             onMouseEnter={() => setIsMoreOpen(true)} 
                             onMouseLeave={() => setIsMoreOpen(false)}>
                            <div className={`flex items-center gap-1 transition-colors ${location.pathname.includes('/blog') || location.pathname.includes('/faq') ? 'text-accent' : 'text-zinc-400 group-hover:text-accent'}`}>
                                More <ChevronDown size={16} className={`transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {isMoreOpen && (
                                <div className="absolute top-16 left-0 w-48 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="bg-[#0f0f11] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1">
                                        <Link to="/blog" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg text-sm text-zinc-300 hover:text-white transition-colors">
                                            <BookOpen size={16} /> Blog & Tips
                                        </Link>
                                        <Link to="/faq" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg text-sm text-zinc-300 hover:text-white transition-colors">
                                            <HelpCircle size={16} /> FAQ
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-3 sm:gap-6 relative z-[110]">
                        <Link to="/store" className="relative hover:text-accent transition-colors group">
                            <ShoppingCart size={22} className="text-zinc-300 group-hover:text-accent" />
                            <span className="absolute -top-2 -right-2 bg-accent text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">0</span>
                        </Link>
                        
                        {/* PROFILE BUTTON - 'My Profile' yazısı ilə */}
                        <Button 
                            onClick={handleProfileClick}
                            className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 h-auto px-4 py-2 rounded-full border border-white/5 transition-all group"
                        >
                            {user ? (
                                <>
                                    <div className="w-5 h-5 bg-accent text-black rounded-full flex items-center justify-center text-xs font-bold uppercase">
                                        {user.name?.charAt(0) || "U"}
                                    </div>
                                    <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">My Profile</span>
                                </>
                            ) : (
                                <>
                                    <UserIcon size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                                    <span className="text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors">Login</span>
                                </>
                            )}
                        </Button>

                        {/* HAMBURGER TOGGLE */}
                        <Button
                            variant="ghost"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 h-auto text-zinc-300 hover:text-white hover:bg-transparent transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* ================= ORIGINAL BOLD MOBILE MENU ================= */}
            <div className={`fixed inset-0 z-[90] md:hidden bg-black/95 backdrop-blur-3xl transition-all duration-500 ease-in-out flex flex-col ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                
                {/* Background Text Decor (Su nişanı) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.03] uppercase italic pointer-events-none select-none">Apex</div>

                <div className="container h-full flex flex-col pt-28 pb-8 relative z-10 px-6">
                    
                    {/* NAV LINKLER (BOLD ITALIC STYLE - İkon yoxdur) */}
                    <div className="flex flex-col space-y-6 flex-1 justify-center">
                        
                        {/* 1. HOME */}
                        <NavLink 
                            to="/" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({isActive}) => `text-4xl font-black italic uppercase tracking-tighter transition-colors ${isActive ? 'text-accent' : 'text-white/60 hover:text-white'}`}
                        >
                            Home
                        </NavLink>
                        
                        {/* 2. STORE */}
                        <NavLink 
                            to="/store" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({isActive}) => `text-4xl font-black italic uppercase tracking-tighter transition-colors ${isActive ? 'text-accent' : 'text-white/60 hover:text-white'}`}
                        >
                            Store
                        </NavLink>

                        {/* 3. WORKOUTS (Accordion) */}
                        <div className="flex flex-col">
                            <Button
                                variant="ghost"
                                onClick={() => toggleMobileSubmenu('workouts')} 
                                className={`flex items-center justify-between text-4xl font-black italic uppercase tracking-tighter transition-colors h-auto p-0 hover:bg-transparent ${mobileSubmenu === 'workouts' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                            >
                                Workouts
                                <ChevronDown className={`transition-transform duration-300 ${mobileSubmenu === 'workouts' ? 'rotate-180 text-accent' : ''}`} size={32} />
                            </Button>
                            
                            {/* Submenu */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSubmenu === 'workouts' ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="flex flex-col gap-4 pl-4 border-l-4 border-accent/20">
                                    <Link to="/workouts" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-wide text-zinc-400 hover:text-accent">
                                        Routine Database
                                    </Link>
                                    <Link to="/builder" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-wide text-zinc-400 hover:text-accent">
                                        Routine Builder
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 4. EXERCISES */}
                        <NavLink 
                            to="/exercises" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({isActive}) => `text-4xl font-black italic uppercase tracking-tighter transition-colors ${isActive ? 'text-accent' : 'text-white/60 hover:text-white'}`}
                        >
                            Exercises
                        </NavLink>

                        {/* 5. MORE (Accordion) */}
                        <div className="flex flex-col">
                            <Button
                                variant="ghost"
                                onClick={() => toggleMobileSubmenu('more')} 
                                className={`flex items-center justify-between text-4xl font-black italic uppercase tracking-tighter transition-colors h-auto p-0 hover:bg-transparent ${mobileSubmenu === 'more' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                            >
                                More
                                <ChevronDown className={`transition-transform duration-300 ${mobileSubmenu === 'more' ? 'rotate-180 text-accent' : ''}`} size={32} />
                            </Button>
                            
                            {/* Submenu */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSubmenu === 'more' ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="flex flex-col gap-4 pl-4 border-l-4 border-accent/20">
                                    <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-wide text-zinc-400 hover:text-accent">
                                        Blog & Tips
                                    </Link>
                                    <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-wide text-zinc-400 hover:text-accent">
                                        FAQ
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM ACTIONS (2 Böyük Düymə) */}
                    <div className="grid grid-cols-2 gap-4 mt-auto">
                        
                        {/* 1. Login / Profile Button */}
                        <Button
                            onClick={handleProfileClick} 
                            className="bg-white/5 border border-white/10 h-auto p-6 rounded-3xl flex flex-col items-center justify-center gap-3 active:scale-95 transition-all group hover:bg-white/5"
                        >
                            {user ? (
                                <>
                                    <div className="w-10 h-10 bg-accent text-black rounded-full flex items-center justify-center text-lg font-black group-hover:scale-110 transition-transform">
                                        {user.name?.charAt(0) || "U"}
                                    </div>
                                    <span className="font-bold text-[10px] uppercase tracking-widest text-accent">My Profile</span>
                                </>
                            ) : (
                                <>
                                    <LogIn className="text-zinc-500 group-hover:text-white transition-colors" size={28} />
                                    <span className="font-bold text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Login</span>
                                </>
                            )}
                        </Button>
                        
                        {/* 2. Checkout Button */}
                        <Button
                            asChild
                            className="bg-accent text-black h-auto p-6 rounded-3xl flex flex-col items-center justify-center gap-3 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,244,88,0.2)] hover:bg-[#c9e82e]"
                        >
                            <Link 
                                to="/store" 
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <ShoppingCart size={28} />
                                <span className="font-bold text-[10px] uppercase tracking-widest">Checkout</span>
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;