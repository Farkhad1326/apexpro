import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Dumbbell, ShoppingCart, User as UserIcon, ChevronDown, Menu, X, LogIn } from 'lucide-react'; // User-i UserIcon olaraq adlandırdıq ki, data ilə qarışmasın
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const [isWorkoutsOpen, setIsWorkoutsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
    
    // Auth Context-dən kiçik hərflə 'user' alırıq
    const { user } = useAuth(); 

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setMobileSubmenu(null);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    const linkStyles = ({ isActive }) =>
        `flex items-center gap-1 hover:text-accent transition-colors ${isActive ? 'text-accent font-bold' : 'text-gray-300'}`;

    const toggleMobileSubmenu = (menuName) => {
        setMobileSubmenu(mobileSubmenu === menuName ? null : menuName);
    };

    const handleProfileClick = () => {
        // DÜZƏLİŞ: Burada 'user' (data) yoxlanmalıdır
        if (user) {
            navigate('/dashboard'); // DÜZƏLİŞ: /profile yox, /dashboard
        } else {
            navigate('/auth');
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* ================= DESKTOP NAVBAR ================= */}
            <nav className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-md border-b border-white/10 text-white">
                <div className="container h-20 flex items-center justify-between">
                    
                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-2 group relative z-[110]">
                        <div className="bg-accent p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(212,244,88,0.3)]">
                            <Dumbbell className="text-black" size={24} />
                        </div>
                        <span className="text-2xl font-black tracking-tighter uppercase italic">Apex</span>
                    </Link>

                    {/* LINKS */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink to="/store" className={linkStyles}>Products</NavLink>
                        
                        <div className="relative group cursor-pointer h-20 flex items-center" 
                             onMouseEnter={() => setIsWorkoutsOpen(true)} 
                             onMouseLeave={() => setIsWorkoutsOpen(false)}>
                            <div className={`flex items-center gap-1 transition-colors ${location.pathname.includes('/workouts') || location.pathname.includes('/builder') ? 'text-accent' : 'text-gray-300 group-hover:text-accent'}`}>
                                Workouts <ChevronDown size={16} className={`transition-transform duration-300 ${isWorkoutsOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {isWorkoutsOpen && (
                                <div className="absolute top-16 left-0 w-56 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="bg-[#121212] border border-white/10 rounded-xl shadow-2xl p-2">
                                        <Link to="/workouts" className="block px-4 py-3 hover:bg-white/5 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">Routine Database</Link>
                                        <Link to="/builder" className="block px-4 py-3 hover:bg-white/5 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">Routine Builder</Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <NavLink to="/exercises" className={linkStyles}>Exercises</NavLink>
                        
                        <div className="relative group cursor-pointer h-20 flex items-center" 
                             onMouseEnter={() => setIsMoreOpen(true)} 
                             onMouseLeave={() => setIsMoreOpen(false)}>
                            <div className="flex items-center gap-1 text-gray-300 group-hover:text-accent transition-colors">
                                More <ChevronDown size={16} className={`transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {isMoreOpen && (
                                <div className="absolute top-16 left-0 w-48 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="bg-[#121212] border border-white/10 rounded-xl shadow-2xl p-2">
                                        <Link to="/blog" className="block px-4 py-3 hover:bg-white/5 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">Blog & Tips</Link>
                                        <Link to="/faq" className="block px-4 py-3 hover:bg-white/5 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">FAQ</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-3 sm:gap-6 relative z-[110]">
                        <Link to="/store" className="relative hover:text-accent transition-colors">
                            <ShoppingCart size={22} />
                            <span className="absolute -top-2 -right-2 bg-accent text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">0</span>
                        </Link>
                        
                        {/* PROFILE BUTTON - DÜZƏLDİLDİ */}
                        <button 
                            onClick={handleProfileClick}
                            className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition group"
                        >
                            {user ? (
                                <>
                                    <div className="w-5 h-5 bg-accent text-black rounded-full flex items-center justify-center text-xs font-bold uppercase">
                                        {user.name?.charAt(0) || "U"}
                                    </div>
                                    <span className="text-sm font-medium group-hover:text-accent transition-colors">Dashboard</span>
                                </>
                            ) : (
                                <>
                                    <UserIcon size={18} className="group-hover:text-accent transition-colors text-gray-400" />
                                    <span className="text-sm font-medium group-hover:text-accent transition-colors">Login</span>
                                </>
                            )}
                        </button>

                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 bg-white/5 rounded-lg border border-white/10 text-white transition-all active:scale-90"
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ================= MOBILE MENU OVERLAY ================= */}
            <div className={`fixed inset-0 z-[90] md:hidden bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="container h-full flex flex-col pt-32 pb-10 relative z-10 overflow-y-auto">
                    <div className="flex flex-col space-y-6 justify-center px-4">
                        <NavLink to="/" className={({isActive}) => `text-3xl font-black uppercase italic tracking-tighter ${isActive ? 'text-accent' : 'text-white/60'}`}>Home</NavLink>
                        <NavLink to="/store" className={({isActive}) => `text-3xl font-black uppercase italic tracking-tighter ${isActive ? 'text-accent' : 'text-white/60'}`}>Store</NavLink>
                        <NavLink to="/exercises" className={({isActive}) => `text-3xl font-black uppercase italic tracking-tighter ${isActive ? 'text-accent' : 'text-white/60'}`}>Exercises</NavLink>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-auto pt-10 px-4">
                        <button 
                            onClick={handleProfileClick} 
                            className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col items-center justify-center gap-2 transition-all active:scale-95"
                        >
                            {user ? (
                                <>
                                    <div className="w-8 h-8 bg-accent text-black rounded-full flex items-center justify-center text-sm font-bold uppercase">{user.name?.charAt(0)}</div>
                                    <span className="font-bold text-[10px] uppercase tracking-widest text-accent">Dashboard</span>
                                </>
                            ) : (
                                <>
                                    <LogIn className="text-white/60" size={28} />
                                    <span className="font-bold text-[10px] uppercase tracking-widest text-white">Login / Join</span>
                                </>
                            )}
                        </button>
                        <Link to="/store" className="bg-accent p-6 rounded-3xl flex flex-col items-center justify-center gap-2 active:scale-95 transition-all">
                            <ShoppingCart className="text-black" size={28} />
                            <span className="font-bold text-[10px] uppercase tracking-widest text-black">Checkout</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;