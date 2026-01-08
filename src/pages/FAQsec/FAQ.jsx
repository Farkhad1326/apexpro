import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Apex Fitness kimlər üçündür?",
    answer: "Apex həm yeni başlayanlar, həm də peşəkar idmançılar üçün nəzərdə tutulub. Bizim AI sistemimiz sizin səviyyənizə uyğun proqram hazırlayır."
  },
  {
    question: "Məşq proqramlarını evdə edə bilərəm?",
    answer: "Bəli! 'Routine Builder' hissəsində 'Home Workout' seçərək, heç bir avadanlıq olmadan evdə edə biləcəyiniz proqramlar əldə edə bilərsiniz."
  },
  {
    question: "Qidalanma planı fərdi hazırlanır?",
    answer: "Əlbəttə. Sizin boy, çəki, yaş və hədəfinizə (arıqlamaq və ya əzələ yığmaq) uyğun olaraq gündəlik makro və kalori ehtiyacınız hesablanır."
  },
  {
    question: "Ödənişi geri qaytarmaq mümkündür?",
    answer: "Biz xidmətimizə güvənirik. İlk 14 gün ərzində əgər nəticədən razı qalmasanız, ödənişinizi 100% geri qaytarırıq."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-transparent text-white pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-3xl">
        
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-6">
                <HelpCircle size={32} className="text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                Tez-tez Verilən <span className="text-accent">Suallar</span>
            </h1>
            <p className="text-gray-400">Suallarına cavab tapmadın? Bizə yaz.</p>
        </div>

        <div className="space-y-4">
            {faqData.map((item, index) => (
                <div 
                    key={index} 
                    className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-accent bg-white/5' : 'border-white/10 bg-[#121212]'}`}
                >
                    <button 
                        className="w-full flex justify-between items-center p-6 text-left"
                        onClick={() => toggleFAQ(index)}
                    >
                        <span className="font-bold text-lg">{item.question}</span>
                        {openIndex === index ? <Minus className="text-accent" /> : <Plus className="text-gray-400" />}
                    </button>
                    
                    <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <p className="p-6 pt-0 text-gray-400 leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;