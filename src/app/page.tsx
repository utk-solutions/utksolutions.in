import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden selection:bg-cyan-500 selection:text-white relative">
      {/* Subtle global gradient overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30 mix-blend-soft-light">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-[80px]"
          style={{ willChange: 'opacity' }}
        />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
