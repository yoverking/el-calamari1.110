import {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{opacity: 1}}
          exit={{opacity: 0, transition: {duration: 0.5}}}
        >
          <div className="flex gap-2">
            {['#e53935', '#1d89e4', '#43a047', '#fdd734', '#6e47bd'].map((color, i) => (
              <motion.div
                key={i}
                style={{ backgroundColor: color }}
                className="w-4 h-4 rounded-full"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
