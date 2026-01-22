"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <Reveal width="100%" direction="right" className="flex-1 w-full lg:w-1/2">
            <div className="flex-1 w-full relative">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-xl group">
                <div className="aspect-[4/3] w-full relative">
                   <Image 
                     src="/assets/images/about-coding.jpg"
                     alt="About UtkSolutions"
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                   />
                </div>
                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:bg-transparent transition-colors" />
              </div>
              {/* Experience Badge */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.5 }}
                 className="absolute -bottom-10 -right-10 hidden lg:block bg-primary text-white p-10 rounded-[2rem] z-20 shadow-2xl shadow-primary/30"
              >
                 <p className="text-5xl font-bold mb-1">10+</p>
                 <p className="font-medium text-blue-100">Years of<br />Excellence</p>
              </motion.div>
            </div>
          </Reveal>
          
          <div className="flex-1">
            <Reveal width="100%" direction="left">
              <h5 className="text-primary font-bold uppercase tracking-wide mb-3 text-sm">About UtkSolutions</h5>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                We Build Scalable Digital Solutions for Modern Businesses.
              </h2>
            </Reveal>
            
            <Reveal width="100%" delay={0.2} direction="left">
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At UtkSolutions, we bridge the gap between complex technology and business growth. Our team of certified engineers and strategists works around the clock to ensure your digital infrastructure is secure, efficient, and ready for the future.
              </p>
            </Reveal>

            <Reveal width="100%" delay={0.3} direction="left">
              <p className="text-gray-600 mb-8 leading-relaxed">
                From cloud migration to custom software development, we leverage cutting-edge technologies to solve real-world problems. We don't just write code; we engineer success.
              </p>
            </Reveal>

            <ul className="space-y-4 mb-10">
              {[
                "Enterprise-grade Security & Compliance",
                "Agile Development Methodology",
                "24/7 Dedicated Support Team",
                "Cost-effective Cloud Optimization"
              ].map((item, index) => (
                <Reveal key={index} delay={0.4 + (index * 0.1)} width="100%" direction="left">
                  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                    <CheckCircle2 className="text-accent" size={24} />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal width="100%" delay={0.8}>
              <button className="text-primary font-bold hover:text-blue-700 transition-colors flex items-center gap-2 group px-6 py-3 rounded-full hover:bg-white">
                Learn More About Us 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
