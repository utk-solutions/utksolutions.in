"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100">
              <div className="aspect-[4/3] w-full relative">
                 <Image 
                   src="/assets/images/about-coding.jpg"
                   alt="About UtkSolutions"
                   fill
                   className="object-cover"
                 />
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 hidden lg:block bg-primary text-white p-10 rounded-2xl z-20">
               <p className="text-5xl font-bold mb-1">10+</p>
               <p className="font-medium text-blue-100">Years of<br />Excellence</p>
            </div>
          </div>
          
          <div className="flex-1">
            <h5 className="text-primary font-bold uppercase tracking-wide mb-3 text-sm">About UtkSolutions</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We Build Scalable Digital Solutions for Modern Businesses.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At UtkSolutions, we bridge the gap between complex technology and business growth. Our team of certified engineers and strategists works around the clock to ensure your digital infrastructure is secure, efficient, and ready for the future.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From cloud migration to custom software development, we leverage cutting-edge technologies to solve real-world problems. We don't just write code; we engineer success.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Enterprise-grade Security & Compliance",
                "Agile Development Methodology",
                "24/7 Dedicated Support Team",
                "Cost-effective Cloud Optimization"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={24} />
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="text-primary font-bold hover:text-blue-700 transition-colors flex items-center gap-2 group">
              Learn More About Us 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
