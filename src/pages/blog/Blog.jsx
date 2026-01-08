import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Post-Workout Nutrition: 5 Golden Rules",
    excerpt: "How to optimize protein and carb balance for maximum muscle recovery? A scientific approach.",
    date: "Oct 25, 2025",
    author: "Dr. Apex",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "HIIT vs Steady Cardio: Which Burns Fat Faster?",
    excerpt: "What is the most effective method for fat loss? What does the latest research say?",
    date: "Oct 28, 2025",
    author: "Coach Mike",
    category: "Training",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Sleep & Testosterone: The Hidden Link",
    excerpt: "How does sleep quality directly impact your strength metrics and hormonal balance?",
    date: "Nov 01, 2025",
    author: "Science Team",
    category: "Recovery",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1364&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Creatine: Myths vs Facts",
    excerpt: "Does it cause hair loss? Is it bad for kidneys? Everything you need to know about the #1 supplement.",
    date: "Nov 05, 2025",
    author: "Nutritionist Sarah",
    category: "Supplements",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Ice Baths: Beneficial or Harmful?",
    excerpt: "Does cold water therapy accelerate recovery or actually hinder muscle hypertrophy?",
    date: "Nov 10, 2025",
    author: "Physio Dave",
    category: "Recovery",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Motivation vs Discipline",
    excerpt: "The only force that keeps you in the gym when passion fades: Psychological resilience.",
    date: "Nov 12, 2025",
    author: "Mental Coach",
    category: "Mindset",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "How Smartwatches Boost Performance",
    excerpt: "Take your training to the next level with Heart Rate, HRV, and Sleep tracking metrics.",
    date: "Nov 15, 2025",
    author: "Tech Review",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1254&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Intermittent Fasting (16/8) for Athletes",
    excerpt: "Can you build muscle while fasting? Understanding autophagy and meal timing.",
    date: "Nov 18, 2025",
    author: "Dr. Apex",
    category: "Diet",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1374&auto=format&fit=crop"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-transparent text-white pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Başlıq */}
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
                Apex <span className="text-accent">Journal</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Fitnes dünyasındakı ən son elmi araşdırmalar, qidalanma məsləhətləri və məşq sirləri.
            </p>
        </div>

        {/* Məqalələr Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <div key={post.id} className="group bg-[#121212] border border-white/10 rounded-3xl overflow-hidden hover:border-accent/50 transition-all duration-300">
                    
                    {/* Şəkil */}
                    <div className="h-48 overflow-hidden relative">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute top-4 left-4 bg-accent text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                            {post.category}
                        </div>
                    </div>

                    {/* Məzmun */}
                    <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                            <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                            {post.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                            {post.excerpt}
                        </p>

                        <button className="flex items-center gap-2 text-white text-sm font-bold group-hover:gap-3 transition-all">
                            Oxumağa Davam Et <ArrowRight size={16} className="text-accent" />
                        </button>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;