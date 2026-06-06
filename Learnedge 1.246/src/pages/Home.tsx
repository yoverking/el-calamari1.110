import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import Features from '../components/Features';
import Stats from '../components/Stats';
import CourseList from '../components/CourseList';
import TestimonialsMarquee from '../components/TestimonialsMarquee';
import Faq from '../components/Faq';
import BlogSection from '../components/BlogSection';
import CtaFooter from '../components/CtaFooter';
import DiscountMarquee from '../components/DiscountMarquee';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Stats />
        <DiscountMarquee />
        <CourseList />
        <TestimonialsMarquee />
        <Faq />
        <BlogSection />
      </main>
      <CtaFooter />
    </div>
  );
}
