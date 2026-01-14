import React from 'react';
import { HelpCircle } from 'lucide-react';

// Doğru Shadcn Accordion importu (əksər hallarda belə olur)
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shared/accordion";   // ← "shared/" silindi

const faqData = [
  {
    question: "Who is Apex Fitness for?",
    answer: "Apex is designed for both beginners and professional athletes. Our AI system creates a program tailored to your current level."
  },
  {
    question: "Can I do the workout programs at home?",
    answer: "Yes! In the 'Routine Builder' section, select 'Home Workout' to get programs you can do at home without any equipment."
  },
  {
    question: "Is the nutrition plan personalized?",
    answer: "Absolutely. Based on your height, weight, age, and goal (fat loss or muscle gain), we calculate your daily macros and calorie needs."
  },
  {
    question: "Is a refund possible?",
    answer: "We stand behind our service. If you're not satisfied with the results within the first 14 days, we will refund 100% of your payment."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-transparent text-white pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-3xl">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-6">
            <HelpCircle size={32} className="text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-gray-400">Didn't find an answer to your question? Write to us.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`border rounded-2xl transition-all duration-300 data-[state=open]:border-accent data-[state=open]:bg-white/5 data-[state=closed]:border-white/10 data-[state=closed]:bg-[#121212]`}
            >
              <AccordionTrigger
                className="w-full flex justify-between items-center p-6 text-left hover:no-underline [&[data-state=open]>.lucide-minus]:text-accent [&[data-state=closed]>.lucide-plus]:text-gray-400"
              >
                <span className="font-bold text-lg">{item.question}</span>
              </AccordionTrigger>
              
              <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out">
                <p className="p-6 pt-0 text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </div>
  );
};

export default FAQ;