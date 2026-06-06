import { BLOG_POSTS } from '../data';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import NewBadge from './NewBadge';

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-[#f7f7f7]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-3xl flex flex-col items-start relative">
            <NewBadge />
            <h2 className="text-4xl md:text-[56px] font-sans font-bold text-gray-900 tracking-tight mb-4 leading-tight">
              A look at the most <span className="text-[#f6582b] italic">recent</span> events and news
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:inline-flex items-center justify-center gap-2 font-medium bg-white border border-gray-200 px-6 py-3 rounded-full hover:border-[#f6582b] hover:text-[#f6582b] transition-all group shadow-sm text-gray-900 cursor-pointer"
          >
            View all articles
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover="hover"
              variants={{
                hover: { y: -10 }
              }}
              className="group cursor-pointer flex flex-col bg-white p-5 rounded-[28px] border border-gray-100/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] mb-6">
                <motion.img 
                  src={post.image} 
                  alt={post.title}
                  variants={{
                    hover: { scale: 1.06 }
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <motion.span 
                    variants={{
                      hover: { y: -2, scale: 1.03 }
                    }}
                    className="inline-block bg-white/90 backdrop-blur text-sm font-semibold px-4 py-1.5 rounded-full text-gray-900 shadow-sm"
                  >
                    {post.category}
                  </motion.span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                <Calendar size={16} className="text-[#f6582b]" />
                {post.date}
              </div>
              
              <h3 className="text-[24px] font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#f6582b] transition-colors">
                {post.title}
              </h3>
              
              <div className="mt-auto pt-4 border-t border-gray-50 inline-flex items-center gap-2 text-gray-900 font-bold group-hover:text-[#f6582b] transition-all">
                Read Article
                <motion.span
                  variants={{
                    hover: { x: 5 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <motion.button 
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 font-medium bg-white border border-gray-200 w-full py-4 rounded-full text-gray-900"
          >
            View all articles
            <ArrowRight size={18} />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
