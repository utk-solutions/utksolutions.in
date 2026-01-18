"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Gradients & Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[80%] bg-gradient-to-b from-blue-50 to-white" />
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-gradient-to-br from-primary/10 to-accent/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[60%] bg-gradient-to-tr from-accent/15 to-primary/10 rounded-full blur-3xl opacity-50" />
        
        {/* Animated Grid/Abstract Shapes */}
        {/* Replace with a real image or complex CSS shape composition */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Leading IT Solutions Provider
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Transforming Ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-accent">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We deliver enterprise-grade cloud solutions, custom software, and managed IT services to help businesses scale securely and efficiently.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Book a Consultation <ArrowRight size={20} />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-700 border border-gray-200 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2"
              >
                Explore Services <ChevronRight size={20} />
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-400">
              {/* Trust indicators/stats */}
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-gray-900">100+</p>
                <p className="text-sm">Projects Delivered</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-gray-900">98%</p>
                <p className="text-sm">Client Retention</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-gray-900">24/7</p>
                <p className="text-sm">Expert Support</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Illustration area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full aspect-square max-w-[600px] lg:max-w-none"
          >
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-gray-100 bg-white">
                <Image
                  src="/assets/images/hero-visual.jpg"
                  alt="Digital Reality"
                  fill
                  className="object-cover"
                  priority
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
