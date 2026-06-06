import { ArrowRight, Play, Pause, Star, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)');
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4500); // Transitions smoothly every 4.5 seconds
    return () => clearInterval(timer);
  }, [isPaused]);

  const CARDS_DATA = [
    {
      id: 1,
      tag: "Programming",
      title: "Python Masterclass",
      description: "Become a backend expert in 8 weeks.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: "4.9 (420)",
    },
    {
      id: 2,
      tag: "Design",
      title: "Graphic Design Masterclass",
      description: "Learn branding, typography, and layout from scratch.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: "4.8 (310)",
      hideText: true, // Special flag for this card
    },
    {
      id: 3,
      tag: "Development",
      title: "Advanced Web Dev",
      description: "Master modern frontend frameworks & deployment.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: "4.9 (512)",
    },
  ];

  const getCardPosition = (cardIndex: number) => {
    if (cardIndex === activeIndex) return 'CENTER';
    if (cardIndex === (activeIndex - 1 + 3) % 3) return 'LEFT';
    return 'RIGHT';
  };

  const getCardStyles = (position: 'LEFT' | 'CENTER' | 'RIGHT') => {
    switch (position) {
      case 'LEFT':
        return {
          x: isMobile ? -50 : -140,
          y: isMobile ? 8 : 16,
          rotate: isMobile ? -6 : -12,
          scale: 0.9,
          opacity: 0.7,
          zIndex: 10,
        };
      case 'RIGHT':
        return {
          x: isMobile ? 50 : 140,
          y: isMobile ? 8 : 16,
          rotate: isMobile ? 6 : 12,
          scale: 0.9,
          opacity: 0.7,
          zIndex: 20,
        };
      case 'CENTER':
      default:
        return {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          zIndex: 30,
        };
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + 3) % 3);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % 3);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f7f7f7]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

        {/* Floating Star Widget - Low Left */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[60%] lg:top-[65%] left-4 lg:left-[5%] bg-[#5eedf7] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[24px] shadow-2xl text-white flex items-center justify-center z-10 hidden md:flex"
        >
          <Star fill="currentColor" size={32} />
        </motion.div>

        {/* Floating Globe Widget - Upper Right */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [8, -8, 8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-12 lg:top-24 right-4 lg:right-[5%] bg-[#5e7af7] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[24px] shadow-2xl text-white flex items-center justify-center z-10 hidden md:flex"
        >
          <Globe size={32} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl w-full flex flex-col items-center text-center mb-16 relative z-20"
        >

          {/* Trust Pill */}
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-white border border-gray-100 text-gray-900 font-medium text-sm shadow-sm mb-10 mt-6 sm:mt-8 relative z-20">
            <div className="flex space-x-1 text-[#f6582b]">
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
            </div>
            <span className="whitespace-nowrap">
              Trusted by students from all over the Kingdom
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-[72px] font-sans font-medium tracking-tight text-gray-900 leading-[1.05] mb-6">
            Creating a better future by <span className="text-[#f6582b] italic">enabling</span> minds
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-body">
            A modern template for selling online courses, coaching, and education programs with clean design, CMS, and conversion-focused layouts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/login" className="inline-flex flex-1 sm:flex-none items-center justify-between sm:justify-center gap-4 bg-[#f6582b] hover:opacity-90 text-white px-8 py-4 rounded-full font-medium transition-colors text-base group">
               <span>Get Started Now</span>
               <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                 <ArrowRight size={16} />
               </div>
            </Link>
            <button className="inline-flex flex-1 sm:flex-none items-center justify-between sm:justify-center gap-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium transition-colors text-base group">
               <span>View Courses</span>
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-200 transition-colors">
                 <Play fill="currentColor" size={14} />
               </div>
            </button>
          </div>
        </motion.div>

        {/* Responsive, Tilted Card Stack with Navigation Arrows */}
        <div className="relative w-full max-w-[680px] flex items-center justify-center mt-6 py-6 px-4">
          
          {/* Subtle Left Navigation Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 sm:left-4 z-40 bg-white hover:bg-gray-100 border border-gray-200 text-gray-600 hover:text-[#f6582b] w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md opacity-60 hover:opacity-100"
            aria-label="Previous Course"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Perspective Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[440px] w-full max-w-[320px] flex justify-center perspective-[1000px] z-10"
          >
            {CARDS_DATA.map((card, index) => {
              const position = getCardPosition(index);
              const style = getCardStyles(position);
              
              return (
                <motion.div
                  key={card.id}
                  animate={style}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 w-full h-[420px] bg-white rounded-3xl shadow-xl flex flex-col text-gray-900 border border-gray-100/90 overflow-hidden origin-bottom select-none cursor-pointer"
                  onClick={(e) => {
                    // Don't change slide if clicking the player controls
                    if ((e.target as HTMLElement).closest('.player-controls')) return;

                    if (position === 'LEFT') handlePrev();
                    if (position === 'RIGHT') handleNext();
                  }}
                >
                  <div className={`relative w-full ${card.hideText ? 'h-full flex-1' : 'h-[220px]'} overflow-hidden`}>
                    <img src={card.image} className="w-full h-full object-cover" alt={card.title} />
                    {!card.hideText && (
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-900 shadow-sm">
                        {card.tag}
                      </div>
                    )}
                  </div>
                  
                  <div className={`p-6 flex flex-col justify-between ${card.hideText ? 'absolute bottom-0 w-full bg-gradient-to-t from-white via-white/95 to-transparent pt-12' : 'flex-1'}`}>
                    {!card.hideText && (
                      <div>
                        <h3 className={`font-bold transition-all ${position === 'CENTER' ? 'text-2xl text-gray-900' : 'text-xl text-gray-600'}`}>
                          {card.title}
                        </h3>
                        <p className={`mt-2 text-sm transition-all ${position === 'CENTER' ? 'text-gray-500' : 'text-gray-400'}`}>
                          {card.description}
                        </p>
                      </div>
                    )}
                    
                    <div className={`${card.hideText ? '' : 'mt-4 pt-4 border-t border-gray-50'}`}>
                      {!card.hideText && (
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-semibold text-[#f6582b] flex items-center gap-1">
                            <Star fill="currentColor" size={14} /> {card.rating}
                          </span>
                          <span className="text-xs text-gray-400 font-medium font-mono">LearnEdge Course</span>
                        </div>
                      )}
                      
                      {/* Player Controls */}
                      <div className="flex items-center gap-3 player-controls">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (position === 'CENTER') {
                              setIsPaused(!isPaused);
                            }
                          }}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${position === 'CENTER' ? 'border-gray-200 hover:bg-gray-50 text-gray-600' : 'border-gray-100 text-gray-300'}`}
                        >
                          {isPaused && position === 'CENTER' ? (
                            <Play fill="currentColor" size={12} className="ml-0.5" />
                          ) : (
                            <Pause fill="currentColor" size={12} />
                          )}
                        </button>
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden relative">
                          {position === 'CENTER' && !isPaused && (
                            <motion.div
                              key={activeIndex} // Reset animation when slide changes
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 4.5, ease: "linear" }}
                              className="absolute top-0 left-0 h-full bg-[#f6582b]"
                            />
                          )}
                          {(position !== 'CENTER' || (position === 'CENTER' && isPaused)) && (
                            <div className={`absolute top-0 left-0 h-full ${position === 'CENTER' ? 'bg-[#f6582b] w-1/3' : 'bg-gray-200 w-0'}`} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Subtle Right Navigation Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-0 sm:right-4 z-40 bg-white hover:bg-gray-100 border border-gray-200 text-gray-600 hover:text-[#f6582b] w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md opacity-60 hover:opacity-100"
            aria-label="Next Course"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>

        </div>

      </div>
    </section>
  );
}

