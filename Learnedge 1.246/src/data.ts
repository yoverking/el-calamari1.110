import { Course, BlogPost, FaqItem } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Modern Web Design class',
    category: 'Design',
    duration: '8 weeks',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Advanced Graphic Design',
    category: 'Design',
    duration: '10 weeks',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Full-Stack Dev Bootcamp',
    category: 'Development',
    duration: '12 weeks',
    price: '$499',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'UI/UX Design Basics',
    category: 'Design',
    duration: '6 weeks',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How to Stay Motivated During Online Classes',
    date: 'Oct 24, 2023',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'How Coding Can Transform Your Career Path',
    date: 'Oct 18, 2023',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'AI Skills Every Student Should Master',
    date: 'Oct 12, 2023',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do I get started with LearnEdge?',
    answer: 'Getting started is easy! Create an account, browse our extensive course catalog, and enroll in the classes that match your career goals. You can start learning immediately after enrollment.',
  },
  {
    question: 'Can I access courses on mobile devices?',
    answer: 'Absolutely. Our platform is fully responsive (just like this template!) and optimized for mobile devices, tablets, and desktop computers so you can learn on the go.',
  },
  {
    question: 'How can I contact support if I have issues?',
    answer: 'We offer 24/7 support via email and live chat. Paid students also get access to dedicated mentoring sessions for technical troubleshooting.',
  },
  {
    question: 'Do you offer corporate or team subscriptions?',
    answer: 'Yes, we have specialized plans for teams of 5 or more. Please reach out to our sales team for enterprise pricing and custom learning paths.',
  },
  {
    question: 'Will I receive a certificate upon course completion?',
    answer: 'Yes, every completed course includes a verified digital certificate that you can easily add to your LinkedIn profile or resume.',
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Frontend Developer at Neo',
    text: 'LearnEdge completely transformed my career. The structured curriculum and hands-on projects gave me the confidence to apply for senior roles.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'UX Designer at Sphere',
    text: 'The UI/UX design course was a revelation. I learned not just how to use tools, but how to think like a product designer.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Full Stack Engineer',
    text: 'The best part about the platform is the community and the mentors. You never feel like you are learning alone.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Product Manager',
    text: 'I took the business strategy courses to level up my PM skills. The instructors break down complex concepts into actionable items.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
];
