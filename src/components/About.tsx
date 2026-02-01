"use client";

import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const features = [
    "Enterprise-grade Security & Compliance",
    "Agile Development Methodology",
    "24/7 Dedicated Support Team",
    "Cost-effective Cloud Optimization"
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Image Section */}
          <Reveal width="100%" direction="right" className="flex-1 w-full lg:w-1/2">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                <div className="aspect-[4/3] w-full relative">
                  <Image
                    src="/assets/images/about-coding.jpg"
                    alt="About UtkSolutions"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 hidden lg:block bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-8 rounded-2xl z-20 border border-white/10"
              >
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="font-medium text-violet-200 text-sm">Years of<br />Excellence</p>
              </motion.div>
            </div>
          </Reveal>

          {/* Content Section */}
          <div className="flex-1">
            <Reveal width="100%" direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-400">About UtkSolutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                We Build Scalable Digital Solutions for{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Modern Businesses
                </span>
              </h2>
            </Reveal>

            <Reveal width="100%" delay={0.2} direction="left">
              <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                At UtkSolutions, we bridge the gap between complex technology and business growth. Our team of certified engineers and strategists works around the clock to ensure your digital infrastructure is secure, efficient, and ready for the future.
              </p>
            </Reveal>

            <Reveal width="100%" delay={0.3} direction="left">
              <p className="text-slate-500 mb-8 leading-relaxed">
                From cloud migration to custom software development, we leverage cutting-edge technologies to solve real-world problems. We don&apos;t just write code; we engineer success.
              </p>
            </Reveal>

            <ul className="space-y-3 mb-10">
              {features.map((item, index) => (
                <Reveal key={index} delay={0.4 + (index * 0.1)} width="100%" direction="left">
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all">
                    <div className="p-1 rounded-lg bg-emerald-500/20">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal width="100%" delay={0.8}>
              <Link
                href="/About"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
