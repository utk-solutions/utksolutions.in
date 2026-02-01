"use client";
import { Reveal } from "@/components/Reveal";
import {
  Search,
  Settings,
  Code2,
  Rocket,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We analyze your requirements and business goals to understand the scope and potential.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Plan",
    description: "Our architects design a comprehensive roadmap and technical strategy tailored to you.",
    icon: Settings,
    color: "from-indigo-500 to-violet-500",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop the solution using agile sprints and the latest cutting-edge technologies.",
    icon: Code2,
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous testing and seamless deployment to your production environment with care.",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "05",
    title: "Support",
    description: "Ongoing maintenance and optimization to ensure long-term scalability and success.",
    icon: ShieldCheck,
    color: "from-pink-500 to-rose-500",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal width="100%" direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Evolutionary Journey</span>
            </div>
          </Reveal>

          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How We Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Excellence</span>
            </h2>
          </Reveal>

          <Reveal width="100%" delay={0.4}>
            <p className="text-slate-400 text-lg leading-relaxed">
              A meticulously crafted methodology that transforms complex challenges into seamless digital experiences through collaboration and innovation.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group h-full"
            >
              {/* Desktop Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[1px] bg-gradient-to-r from-slate-800 to-transparent z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-primary/30 transition-all duration-300 h-full hover:bg-slate-900/60 group">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-500 group-hover:border-primary group-hover:text-primary transition-colors">
                  {step.number}
                </div>

                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/10`}>
                  <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center text-white">
                    <step.icon className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
