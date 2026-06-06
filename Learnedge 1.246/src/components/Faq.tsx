import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[56px] font-sans font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            Answers to <span className="text-[#f6582b] italic">frequently</span> asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about the platform, courses, and billing.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`bg-[#f7f7f7] rounded-[24px] border ${isOpen ? 'border-[#f6582b]' : 'border-transparent'} transition-colors duration-300`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`text-xl font-bold pr-8 ${isOpen ? 'text-[#f6582b]' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full border transition-transform duration-300 ${isOpen ? 'bg-[#f6582b] border-[#f6582b] text-white rotate-180' : 'bg-white border-black/10 text-gray-900'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 text-gray-600 text-[17px] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
