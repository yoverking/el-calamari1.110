import { motion } from 'motion/react';
import { Target, Smile, Star, MonitorSmartphone } from 'lucide-react';

const stats = [
  {
    icon: <MonitorSmartphone size={24} className="text-[#f6582b]" />,
    value: '2M+',
    label: 'Video Classes',
  },
  {
    icon: <Smile size={24} className="text-[#f6582b]" />,
    value: '1.5M',
    label: 'Happy Students',
  },
  {
    icon: <Star size={24} className="text-[#f6582b]" />,
    value: '4.8',
    label: 'Average Rating',
  },
  {
    icon: <Target size={24} className="text-[#f6582b]" />,
    value: '95%',
    label: 'Job Placement',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center text-center ${index > 1 ? 'pt-8 md:pt-0' : ''}`}
            >
              <div className="w-12 h-12 bg-[#f6582b]/10 rounded-full flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <p className="text-4xl md:text-5xl font-sans font-bold text-gray-900 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-500 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
