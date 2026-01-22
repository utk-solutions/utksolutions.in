"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="container px-4 mx-auto">
        <Reveal width="100%" direction="up">
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translated-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translated-x-1/2" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Let's Build Your Digital Future
              </h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                Ready to transform your business? Schedule a free consultation with our experts and discover how we can help you scale.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-consultancy"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
                >
                  Schedule Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600/50 border border-blue-400/30 text-white font-bold hover:bg-blue-600 transition-all backdrop-blur-sm"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
