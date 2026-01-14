import React from 'react';
import Marquee from "@/components/ui/magicui/marquee";
import { cn } from "@/lib/utils";

interface LogoData {
  text: string;
  suffix?: string;
  highlight?: boolean;
  gray?: boolean;
}

const logos: LogoData[] = [
  { text: "ROGUE" },
  { text: "GYMSHARK" },
  { text: "NIKE", suffix: "PRO", highlight: true },
  { text: "CROSSFIT" },
  { text: "UNDER", suffix: "ARMOUR", highlight: true },
  { text: "ADIDAS" },
  { text: "REEBOK" },
  { text: "BODYBUILDING", suffix: ".COM", highlight: true },
];

const BrandMarquee: React.FC = () => {
  return (
    <div className="bg-transparent text-white relative z-10">
      <div className="w-full bg-neutral-900/50 border-y border-white/5 py-10 overflow-hidden relative">
        <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-20"></div>
        <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-20"></div>

        <Marquee pauseOnHover className="[--duration:30s] [--gap:4rem]">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              // DÜZƏLİŞ: 'grayscale' və 'hover:grayscale-0' silindi.
              // Artıq rənglər həmişə görünəcək, sadəcə solğun (opacity-50) olacaq.
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <span className="text-2xl font-black text-white flex gap-0.5">
                {logo.text}
                {logo.suffix && (
                  <span className={cn(
                    "ml-1",
                    logo.highlight ? "text-primary" : // İndi bu Lime rəngi görünəcək
                    logo.gray ? "text-gray-500" : 
                    "text-white"
                  )}>
                    {logo.suffix}
                  </span>
                )}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BrandMarquee;