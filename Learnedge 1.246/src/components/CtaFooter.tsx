import { ArrowRight, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CtaFooter() {
  return (
    <footer className="bg-[#050510] text-white pt-32 overflow-hidden relative border-t border-black">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f6582b]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Call to Action Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover="hover"
          className="bg-[#f6582b] rounded-[32px] p-8 md:p-16 mb-24 relative overflow-hidden shadow-2xl"
        >
           <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="max-w-3xl text-center md:text-left">
               <h2 className="text-4xl md:text-[56px] font-sans font-bold tracking-tight mb-4 text-white leading-tight">
                 Do you want to <span className="italic">transform</span> your career?
               </h2>
               <p className="text-white/80 text-xl md:text-2xl font-light">
                 Join our community of learners and start building your future today with our expert-led courses.
               </p>
             </div>
             
             <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                 <Link to="/login" className="block w-full sm:w-auto">
                   <motion.button 
                     whileHover={{ scale: 1.04, y: -2 }}
                     whileTap={{ scale: 0.98 }}
                     className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl w-full sm:w-auto mt-4 md:mt-0 flex items-center justify-center gap-2 group cursor-pointer"
                   >
                     Get Started Now
                     <motion.span 
                       variants={{
                         hover: { x: 4 }
                       }}
                       transition={{ type: "spring", stiffness: 400, damping: 15 }}
                       className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                     >
                       <ArrowRight size={14} />
                     </motion.span>
                   </motion.button>
                 </Link>
             </div>
           </div>
        </motion.div>

        {/* Footer Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 gap-y-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-2 lg:col-span-2 pr-10"
          >
            <div className="flex items-center gap-2 mb-8 cursor-pointer">
              <span className="font-sans font-bold tracking-tight text-3xl">LearnEdge</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm text-[17px] leading-relaxed">
              Creating a better future by enabling minds with modern design, expert mentorship, and industry-focused curriculum.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" }
              ].map((item, id) => (
                <motion.a 
                  key={id}
                  href={item.href} 
                  whileHover={{ scale: 1.15, y: -4, backgroundColor: "#f6582b", borderColor: "#f6582b", color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-300 transition-all cursor-pointer"
                >
                  <item.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-white text-lg mb-8 tracking-wide">Courses</h4>
            <ul className="space-y-4">
              {['Web Design', 'Development', 'Graphic Design', 'Marketing', 'UI/UX Design'].map((course) => (
                <li key={course}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 6, color: "#ffffff" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-gray-400 font-medium hover:text-white transition-colors inline-block cursor-pointer"
                  >
                    {course}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-white text-lg mb-8 tracking-wide">Company</h4>
            <ul className="space-y-4">
              {['About', 'Careers', 'Blog', 'Contact', 'Mentors'].map((comp) => (
                <li key={comp}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 6, color: "#ffffff" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-gray-400 font-medium hover:text-white transition-colors inline-block cursor-pointer"
                  >
                    {comp}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-2 md:col-span-4 lg:col-span-1"
          >
            <h4 className="font-bold text-white text-lg mb-8 tracking-wide">Stay Updated</h4>
            <div className="p-1.5 bg-white/5 rounded-full flex items-center border border-white/10 focus-within:border-[#f6582b] focus-within:ring-2 focus-within:ring-[#f6582b]/30 transition-all duration-300">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none focus:ring-0 text-white w-full px-4 outline-none placeholder-gray-500 flex-1 text-sm bg-none ring-0 outline-hidden"
              />
              <motion.button 
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#f6582b] hover:bg-[#d94a20] text-white p-3 rounded-full transition-colors shrink-0 cursor-pointer"
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed font-medium">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-medium">
            © {new Date().getFullYear()} LearnEdge. All rights reserved.
          </p>
          <div className="flex gap-8 font-medium">
            <motion.a 
              href="#" 
              whileHover={{ color: "#ffffff" }}
              className="text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ color: "#ffffff" }}
              className="text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
