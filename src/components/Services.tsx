"use client";

import Link from 'next/link';
import { services } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/10 relative overflow-hidden backdrop-blur-sm">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal width="100%" direction="down">
             <h5 className="text-primary font-bold uppercase tracking-wide mb-3 text-sm">Our Services</h5>
          </Reveal>
          <Reveal width="100%" delay={0.3}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              End-to-End Technology Solutions
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-muted-foreground text-lg">
              Comprehensive IT services designed to help you innovate faster and operate with confidence.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div
                className="group h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <service.icon size={120} className="text-primary -rotate-12 transform translate-x-4 -translate-y-4" />
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors relative z-10">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>
                <Link href={`/services/${service.slug}`} className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all relative z-10">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
