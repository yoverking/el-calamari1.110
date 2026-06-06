import { useRef } from 'react';
import { TESTIMONIALS } from '../data';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Quote } from 'lucide-react';

export default function TestimonialsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Soft spring physics to make the scroll effect buttery smooth
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Create two opposing directional scroll movements
  const x1 = useTransform(springScroll, [0, 1], [0, -1000]);
  const x2 = useTransform(springScroll, [0, 1], [-1000, 0]);

  // Split testimonials into two rows
  const row1 = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const row2 = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

  return (
    <section ref={containerRef} className="py-32 bg-[#050510] overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f6582b]/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 text-center">
        <h2 className="text-4xl md:text-[56px] font-sans font-bold text-white tracking-tight mb-4 leading-tight">
          Don't just take <span className="text-[#f6582b] italic">our word</span> for it
        </h2>
        <p className="text-xl text-gray-400">
          Hear from our students who have accelerated their careers.
        </p>
      </div>

      <div className="flex flex-col gap-8 relative z-10">
        
        {/* Top Marquee Row */}
        <motion.div 
          className="flex gap-8 px-4"
          style={{ x: x1 }}
        >
          {/* We duplicate the row to ensure continuous seamless scrolling on larger screens */}
          {[...row1, ...row1, ...row1].map((testimonial, idx) => (
            <div 
              key={`row1-${idx}`} 
              className="shrink-0 w-[350px] md:w-[450px] bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-md relative group hover:bg-white/10 transition-colors"
            >
              <div className="absolute top-6 right-8 text-[#f6582b]/20 group-hover:text-[#f6582b]/40 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="font-bold text-white text-lg leading-tight">{testimonial.name}</h4>
                  <p className="text-[#f6582b] text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-[17px] leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Marquee Row */}
        <motion.div 
          className="flex gap-8 px-4"
          style={{ x: x2 }}
        >
          {[...row2, ...row2, ...row2].map((testimonial, idx) => (
            <div 
              key={`row2-${idx}`} 
              className="shrink-0 w-[350px] md:w-[450px] bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-md relative group hover:bg-white/10 transition-colors"
            >
              <div className="absolute top-6 right-8 text-[#f6582b]/20 group-hover:text-[#f6582b]/40 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="font-bold text-white text-lg leading-tight">{testimonial.name}</h4>
                  <p className="text-[#f6582b] text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-[17px] leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </motion.div>

      </div>
      
      {/* Edge Gradients for smooth fade out */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#050510] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#050510] to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
