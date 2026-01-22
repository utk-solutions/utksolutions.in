"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Geometric Tech Grid Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-white">
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'grid-slide 20s linear infinite'
            }}
          />
        </div>

        {/* Floating Hexagons */}
        <div className="absolute top-[15%] left-[8%] opacity-30">
          <div className="relative w-32 h-32 animate-float-slow">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-teal-500/20 rotate-0 hexagon shadow-lg shadow-cyan-500/10" />
          </div>
        </div>
        
        <div className="absolute top-[60%] right-[12%] opacity-25">
          <div className="relative w-40 h-40 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 hexagon shadow-lg shadow-blue-500/10" />
          </div>
        </div>

        <div className="absolute bottom-[25%] left-[45%] opacity-20">
          <div className="relative w-24 h-24 animate-float-slow" style={{ animationDelay: '4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 hexagon" />
          </div>
        </div>

        {/* Glowing Accent Elements */}
        <div className="absolute top-[30%] right-[25%] w-2 h-2 rounded-full bg-cyan-400 animate-pulse-glow" />
        <div className="absolute top-[50%] left-[20%] w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[35%] right-[35%] w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse-glow" style={{ animationDelay: '3s' }} />

        {/* Scan Line Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line" />
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-100/30 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-100/30 to-transparent opacity-50" />
      </div>


      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 backdrop-blur-sm text-primary text-sm font-semibold mb-8 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Leading IT Solutions Provider
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              <span className="block mb-2">Transforming Ideas into</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-accent drop-shadow-sm">
                Digital Reality
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              We deliver enterprise-grade cloud solutions, custom software, and managed IT services to help businesses scale securely and efficiently.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <span className="relative z-10">Book a Consultation</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 font-semibold hover:bg-white hover:border-primary/30 hover:text-primary hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                Explore Services <ChevronRight size={20} />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-400"
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground">100+</p>
                <p className="text-sm font-medium">Projects Delivered</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground">98%</p>
                <p className="text-sm font-medium">Client Retention</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm font-medium">Expert Support</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full aspect-square max-w-[600px] lg:max-w-none"
          >
            <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden border border-white/50 shadow-2xl shadow-blue-900/10 bg-white">
                <Image
                  src="/assets/images/hero-visual.jpg"
                  alt="Digital Reality"
                  fill
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  priority
                />
                {/* Glass Cards Overlay */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-8 left-8 right-8 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">System Status</p>
                      <p className="text-base font-bold text-gray-900">All Systems Operational</p>
                    </div>
                  </div>
                </motion.div>
            </div>
            {/* Simple decorative element behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 opacity-20 blur-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
