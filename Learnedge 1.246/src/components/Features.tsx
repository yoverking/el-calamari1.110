import { Users, GraduationCap, Video, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: '50+ Expert Mentors',
    description: 'Learn directly from industry professionals who have worked at top tech companies.',
  },
  {
    icon: <Video className="w-6 h-6 text-white" />,
    title: 'Interactive Learning',
    description: 'Engage with hands-on projects, live sessions, and peer-to-peer collaboration.',
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    title: 'Expert-led Courses',
    description: 'Curriculum designed to get you hired, featuring the latest industry standard tools.',
  },
  {
    icon: <Trophy className="w-6 h-6 text-white" />,
    title: 'Verified Certificates',
    description: 'Earn a certificate upon completion to showcase your skills to future employers.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-[56px] font-sans font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Choose us because of our <span className="text-[#f6582b] italic">experience</span>
          </h2>
          <p className="text-xl text-gray-600 pb-4">
            We provide an immersive educational environment focused on real-world skills that directly translate to career growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f7f7f7] p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#f6582b] transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-[17px] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
