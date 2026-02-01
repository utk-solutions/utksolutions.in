"use client";

import { Shield, Clock, Users, Zap, Sparkles } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Access a diverse pool of certified experts across various technology domains.",
    color: "violet",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodologies ensure rapid deployment without compromising quality.",
    color: "amber",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and technical support to keep your business running.",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols to protect your sensitive data and infrastructure.",
    color: "emerald",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  violet: { bg: "bg-violet-500/20", text: "text-violet-400", border: "border-violet-500/20" },
  amber: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/20" },
  cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/20" },
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/20" },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-indigo-600/5 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Reveal width="100%" direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-400">Why Choose Us</span>
              </div>
            </Reveal>

            <Reveal width="100%" delay={0.1} direction="left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Built for Scale,{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Designed for Success
                </span>
              </h2>
            </Reveal>

            <Reveal width="100%" delay={0.2} direction="left">
              <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                We combine technical expertise with business acumen to deliver solutions that drive real growth. Our commitment to excellence has made us a trusted partner for industry leaders.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, index) => {
                const colors = colorClasses[feature.color];
                return (
                  <Reveal key={index} delay={0.3 + index * 0.1} width="100%" direction="left">
                    <div className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all">
                      <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text}`}>
                        <feature.icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <Reveal width="100%" direction="right">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 p-1 bg-slate-800/30">
                <div className="relative aspect-square rounded-xl w-full overflow-hidden">
                  <Image
                    src="/assets/images/why-choose-us.jpg"
                    alt="Why Choose UtkSolutions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
