import { useState } from 'react';
import { Menu, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Feature', 'Blog', 'Pricing'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f7f7f7]/90 backdrop-blur-md border-b-0 border-transparent py-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 bg-white rounded-full px-6 shadow-sm border border-black/5">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center h-full">
            <img 
              src="/logo.webp" 
              alt="Logo" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
              className="w-auto h-auto object-contain max-w-[150px] max-h-[40px]" 
            />
            <span className="hidden font-sans font-bold tracking-tight text-2xl text-gray-900 cursor-pointer">LearnEdge</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-sans font-medium text-gray-800 hover:text-brand-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 ml-4">
              <Link to="/login" className="bg-[#f6582b] hover:opacity-90 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-sm text-sm group flex items-center gap-2">
                Get Started Now
                <span className="flex items-center justify-center -mr-2 bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <Play size={12} fill="currentColor" />
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl overflow-hidden border border-black/5"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:text-[#f6582b] hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="pt-4 mt-2 px-3">
                <Link to="/login" className="w-full text-center bg-[#f6582b] text-white font-medium py-4 rounded-full flex items-center justify-center gap-2">
                  Get Started Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
