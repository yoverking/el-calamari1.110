import { COURSES } from '../data';
import { motion } from 'motion/react';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseList() {
  return (
    <section id="courses" className="py-24 bg-[#f7f7f7]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
           <h2 className="text-4xl md:text-[56px] font-sans font-bold text-gray-900 tracking-tight mb-4 leading-tight">
             Check out our <span className="text-[#f6582b] italic">courses</span>
           </h2>
           <p className="text-xl text-gray-600">
             Explore our highly rated classes and kickstart your career with in-demand skills.
           </p>
          </div>
          <Link to="/login" className="hidden md:inline-flex items-center justify-center gap-2 font-medium bg-white border border-gray-200 px-6 py-3 rounded-full hover:border-[#f6582b] hover:text-[#f6582b] transition-all group shadow-sm text-gray-900">
            See all courses
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-black/5 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden m-2 rounded-[20px]">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur text-sm font-semibold px-4 py-1.5 rounded-full text-gray-900 shadow-sm border border-black/5">
                    {course.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock size={16} className="text-[#f6582b]" />
                    {course.duration}
                  </div>
                </div>
                
                <h3 className="text-[22px] font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#f6582b] transition-colors">
                  {course.title}
                </h3>
                
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100">
                  <span className="text-xl font-bold text-gray-900">{course.price}</span>
                  <Link to="/login" className="text-sm font-bold bg-transparent text-gray-900 group-hover:text-[#f6582b] py-2 rounded-full transition-colors flex items-center gap-1">
                    Purchase Course
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/login" className="inline-flex items-center justify-center gap-2 font-medium bg-white border border-gray-200 w-full py-4 rounded-full text-gray-900">
            See all courses
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
