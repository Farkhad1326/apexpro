import React from 'react';
import { Check, Zap, Crown, Target } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "19",
    description: "Perfect for beginners starting their journey.",
    features: ["Standard Workout Library", "Basic Progress Tracking", "Community Access", "Mobile App Access"],
    icon: <Target className="text-gray-400" />,
    isPopular: false
  },
  {
    name: "Pro",
    price: "39",
    description: "Most popular choice for consistent results.",
    features: ["AI Personal Trainer", "Custom Nutrition Plans", "Advanced Analytics", "Priority Support", "Video Form Analysis"],
    icon: <Zap className="text-accent" />,
    isPopular: true
  },
  {
    name: "Elite",
    price: "79",
    description: "Exclusive coaching for peak performance.",
    features: ["1-on-1 Human Coaching", "Custom Supplement Plan", "Bio-Feedback Integration", "Exclusive Events Access", "VIP Lounge"],
    icon: <Crown className="text-yellow-500" />,
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-transparent relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
                Choose Your <span className="text-accent">Level</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
                No hidden fees. Upgrade or cancel your membership at any time.
            </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
                <div 
                    key={index} 
                    className={`relative p-8 rounded-[40px] border transition-all duration-500 group ${
                        plan.isPopular 
                        ? 'bg-[#111] border-accent shadow-[0_0_40px_rgba(212,244,88,0.1)] scale-105 z-10' 
                        : 'bg-[#0a0a0a] border-white/10 hover:border-white/20'
                    }`}
                >
                    {plan.isPopular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-widest">
                            Most Popular
                        </div>
                    )}

                    <div className="mb-8">
                        <div className="mb-4 p-3 bg-white/5 w-fit rounded-2xl">
                            {plan.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
                    </div>

                    <div className="mb-8 flex items-baseline gap-1">
                        <span className="text-gray-400 text-2xl font-bold">$</span>
                        <span className="text-5xl font-black text-white italic">{plan.price}</span>
                        <span className="text-gray-500 font-bold">/mo</span>
                    </div>

                    <div className="space-y-4 mb-10">
                        {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                <div className={`p-1 rounded-full ${plan.isPopular ? 'bg-accent/20 text-accent' : 'bg-white/5 text-gray-500'}`}>
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                {feature}
                            </div>
                        ))}
                    </div>

                    <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest transition-all ${
                        plan.isPopular 
                        ? 'bg-accent text-black hover:shadow-[0_0_25px_rgba(212,244,88,0.4)] hover:scale-105' 
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}>
                        Get Started
                    </button>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;