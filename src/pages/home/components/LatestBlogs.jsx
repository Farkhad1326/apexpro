import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

// Əsas Blog səhifəsindəki ilk 3 məqaləni bura simulyasiya edirik
const recentPosts = [
  {
    id: 1,
    title: "Post-Workout Nutrition: 5 Golden Rules",
    category: "Nutrition",
    date: "Oct 25, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "HIIT vs Steady Cardio: Which Burns Fat Faster?",
    category: "Training",
    date: "Oct 28, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Sleep & Testosterone: The Hidden Link",
    category: "Recovery",
    date: "Nov 01, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800&auto=format&fit=crop"
  }
];

const LatestBlog = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white leading-none">
                    Latest <span className="text-accent">Insights</span>
                </h2>
                <p className="text-gray-400 max-w-md">
                    Stay ahead with the latest science-based fitness tips and nutrition advice.
                </p>
            </div>
            <Link to="/blog" className="group flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:text-accent hover:border-accent transition-all">
                View All Articles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
                <Link to={`/blog`} key={post.id} className="group flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-accent text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-white/10">
                            {post.category}
                        </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors leading-snug mb-4">
                        {post.title}
                    </h3>

                    {/* Read More Link */}
                    <div className="mt-auto flex items-center gap-2 text-white/40 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                        Read Story <ArrowRight size={14} />
                    </div>
                </Link>
            ))}
        </div>

      </div>
    </section>
  );
};

export default LatestBlog;