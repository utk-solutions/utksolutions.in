"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, Shield, Zap, Globe, Sparkles } from "lucide-react";
import Link from "next/link";
import BookConsultationPopup from "./BookConsultationPopup";

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const floatingCards = [
    { icon: Shield, label: "Enterprise Security", delay: 0.8 },
    { icon: Zap, label: "Lightning Fast", delay: 1 },
    { icon: Globe, label: "Global Scale", delay: 1.2 },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-600/30 to-indigo-600/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/25 to-blue-600/20 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/10 blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Trusted by 100+ Enterprises Worldwide
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="text-white">Build the Future</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                with Smart Tech
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              We architect enterprise-grade cloud solutions, custom software, and
              next-gen IT infrastructure that empowers businesses to scale without limits.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button
                onClick={() => setIsPopupOpen(true)}
                className="group relative w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <Link
                href="#services"
                className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5 text-violet-400" />
                <span>See How It Works</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-8 lg:gap-12"
            >
              {[
                { value: "100+", label: "Projects Delivered" },
                { value: "98%", label: "Client Retention" },
                { value: "24/7", label: "Expert Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Visual Container */}
            <div className="relative aspect-square max-w-[550px] mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-indigo-500/15 to-cyan-500/20 rounded-[2.5rem] blur-xl transform scale-95" />

              {/* Main Image */}
              <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-1">
                <div className="absolute inset-1 rounded-[2rem] overflow-hidden">
                  <Image
                    src="/assets/images/hero-visual.jpg"
                    alt="Digital Innovation"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Feature Cards */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.5 }}
                  className={`absolute ${index === 0 ? "top-8 -left-4 lg:-left-8" :
                    index === 1 ? "bottom-32 -right-4 lg:-right-8" :
                      "bottom-8 left-8"
                    } z-20`}
                >
                  <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-800/80 backdrop-blur-xl border border-white/10">
                    <div className={`p-2 rounded-xl ${index === 0 ? "bg-emerald-500/20 text-emerald-400" :
                      index === 1 ? "bg-amber-500/20 text-amber-400" :
                        "bg-cyan-500/20 text-cyan-400"
                      }`}>
                      <card.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-white whitespace-nowrap">{card.label}</span>
                  </div>
                </motion.div>
              ))}

              {/* Animated ring */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-violet-500/20 animate-pulse" style={{ animationDuration: "3s" }} />
              <div className="absolute inset-[-8px] rounded-[3rem] border border-violet-500/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      {/* Consultation Popup */}
      <BookConsultationPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}
