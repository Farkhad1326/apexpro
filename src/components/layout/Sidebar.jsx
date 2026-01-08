import React from 'react';
// Link komponentini əlavə edirik
import { NavLink, useNavigate, Link } from 'react-router-dom'; 
import { LayoutDashboard, Dumbbell, ClipboardList, Settings, Crown, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
        { icon: ClipboardList, label: 'My Routines', path: '/dashboard/routines' },
        { icon: Dumbbell, label: 'My Exercises', path: '/dashboard/exercises' },
        { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
        { icon: Crown, label: 'Go Premium', path: '/dashboard/premium' },
    ];

    const handleLogout = () => {
        logout();
        navigate('/auth');
    };

    return (
        <div className="w-64 h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col sticky top-0">
            {/* LOGO HİSSƏSİ - İndi Linkdir */}
            <div className="p-6">
                <Link 
                    to="/" 
                    className="group flex items-center gap-1 transition-transform active:scale-95"
                    title="Back to Homepage"
                >
                    <h1 className="text-2xl font-bold text-lime-400 tracking-tighter group-hover:text-lime-300 transition-colors">
                        APEX<span className="text-white">PRO</span>
                    </h1>
                </Link>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/dashboard'}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                                isActive
                                ? 'bg-lime-400 text-black font-bold shadow-[0_0_15px_rgba(163,230,53,0.2)]'
                                : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                            }`
                        }
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-zinc-900">
                <button 
                    onClick={handleLogout} 
                    className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl w-full transition-colors group"
                >
                    <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;