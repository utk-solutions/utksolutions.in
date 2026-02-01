"use client";

import Link from 'next/link';
import { services } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-violet-600/5 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal width="100%" direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">Our Services</span>
            </div>
          </Reveal>
          <Reveal width="100%" delay={0.3}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              End-to-End Technology{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-slate-400 text-lg">
              Comprehensive IT services designed to help you innovate faster and operate with confidence.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div
                className="group h-full bg-slate-800/30 p-6 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background icon */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <service.icon size={100} className="text-violet-400 -rotate-12 transform translate-x-2 -translate-y-2" />
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-5 group-hover:border-violet-500/40 transition-colors relative z-10">
                  <service.icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors relative z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5 relative z-10">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors relative z-10 group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
