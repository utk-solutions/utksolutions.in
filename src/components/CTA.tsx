"use client";

import { ArrowRight, Sparkles, Zap, Calendar } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <Reveal width="100%" direction="up">
          <div className="relative group p-0.5 rounded-[3rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent overflow-hidden">
            {/* Inner Content with Glassmorphism */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2.9rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/5">

              {/* Animated background shapes */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[80px]"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -90, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/20 rounded-full blur-[80px]"
              />

              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-white tracking-wide uppercase">Partnership Opportunities</span>
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                  Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">Digital Future</span>
                </h2>

                <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                  Ready to transform your business? Schedule a free consultation with our experts and discover how we can help you scale with precision and speed.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    href="/book-consultancy"
                    className="group relative w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <Calendar size={20} />
                    <span>Schedule Consultation</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/services"
                    className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3 group"
                  >
                    <Zap size={20} className="text-accent" />
                    <span>Our Solutions</span>
                  </Link>
                </div>

                {/* Trust mini-badges */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Free Strategic Session</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Expert Technical Roadmap</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="w-2 h-2 rounded-full bg-violet-500" />
                    <span>No Obligation Proposal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
