import { motion } from 'motion/react';

export default function DiscountMarquee() {
  // Create an array to repeat the text enough times to fill ultra-wide screens
  const texts = Array(8).fill("15% discount for new students the whole summer");
  
  // Wait, let's use the exact text the user asked for:
  const textContent = "50% discount for new students the whole summer";
  const textsArray = Array(8).fill(textContent);

  return (
    <section className="relative w-full h-[200px] md:h-[240px] -my-[60px] md:-my-[80px] z-30 pointer-events-none overflow-hidden flex items-center justify-center">
      
      {/* Background Line: No text, taller, dark green */}
      <div className="absolute w-[110vw] h-20 md:h-24 bg-[#2b6f48] -rotate-[3deg] shadow-lg" />

      {/* Foreground Line: Purple, taller, seamless text marquee */}
      <div className="absolute w-[110vw] h-20 md:h-24 bg-[#9333ea] rotate-[2deg] shadow-xl flex items-center">
        
        {/* Seamless scrolling container moving from 0 to -50% of its width */}
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="flex whitespace-nowrap text-white font-bold text-xl md:text-2xl uppercase tracking-wider w-max"
        >
          {/* First Half */}
          <div className="flex items-center">
            {textsArray.map((text, i) => (
              <div key={`part1-${i}`} className="flex items-center">
                <span>{text}</span>
                <span className="mx-6 md:mx-10 opacity-60">•</span>
              </div>
            ))}
          </div>
          
          {/* Second Half (Exact Duplicate for perfect loop transition) */}
          <div className="flex items-center">
            {textsArray.map((text, i) => (
              <div key={`part2-${i}`} className="flex items-center">
                <span>{text}</span>
                <span className="mx-6 md:mx-10 opacity-60">•</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
