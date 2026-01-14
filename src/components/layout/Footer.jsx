import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight
} from 'lucide-react';

// Shadcn komponentləri
import { Button } from "@/components/ui/shared/button";
import { Input } from "@/components/ui/shared/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Sütun 1: Brend və Missiya */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-accent p-2 rounded-lg group-hover:rotate-12 transition-transform">
                <Dumbbell className="text-black" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic text-white">Apex</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Pushing the boundaries of human performance through science-based training and elite technology. Join the evolution.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:bg-accent hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Sütun 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 italic">Navigation</h4>
            <ul className="space-y-4">
              {['Store', 'Workouts', 'Exercises', 'Blog', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-accent flex items-center gap-2 group transition-colors text-sm"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 3: Support */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 italic">Support</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Membership Guide', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 4: Newsletter – Shadcn Input + Button */}
          {/* Sütun 4: Newsletter – Shadcn Input + Button */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 italic">Join the Elite</h4>
            <p className="text-gray-500 text-sm">Subscribe for weekly training protocols and exclusive drops.</p>

            <form className="relative group">
              <Input
                type="email"
                placeholder="Email address"
                className="
                            w-full 
                            bg-[#111] 
                            border border-white/10 
                            rounded-2xl 
                            py-4 px-6 
                            pr-28          {/* ← Əsas dəyişiklik: sağdan əlavə padding (button-un eni + margin) */}
                            text-sm 
                            text-white 
                            focus:outline-none 
                            focus:border-accent 
                            transition-all 
                            h-auto
                          "
              />
              <Button
                className="
                            absolute 
                            right-2 
                            top-2 
                            bottom-2 
                            bg-accent 
                            text-black 
                            px-4 
                            rounded-xl 
                            font-bold 
                            text-xs 
                            uppercase 
                            hover:scale-95 
                            transition-transform
                          "
              >
                Join
              </Button>
            </form>
          </div>
        </div>

        {/* Alt Hissə: Copyright və Böyük Yazı */}
        <div className="relative pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            © {currentYear} Apex Fitness Collective. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase text-gray-600 tracking-widest">
            <span className="flex items-center gap-2"><MapPin size={12} className="text-accent" /> Global HQ</span>
            <span className="flex items-center gap-2"><Mail size={12} className="text-accent" /> support@apex.fit</span>
          </div>

          {/* Arxa fona nəhəng tekst dekorasiyası */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10rem] md:text-[18rem] font-black text-white/[0.02] uppercase italic select-none pointer-events-none whitespace-nowrap">
            Elite Performance
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;