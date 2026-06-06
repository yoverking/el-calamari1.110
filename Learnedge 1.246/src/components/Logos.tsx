import { motion } from 'motion/react';

const logos = [
  "Acme Corp", "Lumina", "Vertex", "Quantum", "Echo", "Nexa"
];

export default function Logos() {
  return (
    <section className="py-10 border-b border-gray-100 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 mb-8 uppercase tracking-wider">
          Trusted by leading companies worldwide
        </p>
        
        {/* Simple marquee container for logos */}
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1036] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-16 md:gap-24 whitespace-nowrap px-8"
          >
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={index}
                className="text-2xl md:text-3xl font-bold text-gray-300 tracking-tighter"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
