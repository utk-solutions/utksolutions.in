import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Service from '@/components/Service';
import Feature from '@/components/Feature';
import Project from '@/components/Project';
import Newsletter from '@/components/Newsletter';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Service />
        <Feature />
        <Project />
        <Newsletter />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
