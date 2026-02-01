"use client";

import { Quote, Star, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, FinTech Innovations",
    content: "The strategic guidance provided by the team was instrumental in our digital overhaul. Their attention to detail and commitment to excellence is unmatched.",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, Global Logistics Systems",
    content: "Implementing their cloud solutions reduced our operational costs by 40%. The transition was seamless, and the ongoing support has been exceptional.",
    stars: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager, HealthStream",
    content: "Their technical expertise in AI integration helped us launch our most successful product yet. They truly understand modern business challenges.",
    stars: 5,
  },
  {
    name: "David Park",
    role: "Director of Engineering, EduTech Pioneers",
    content: "Working with them feels like having an extension of our own team. They are proactive, innovative, and consistently deliver high-quality code.",
    stars: 5,
  },
  {
    name: "Amanda Lee",
    role: "Founder, GreenEdge Solutions",
    content: "Our platform's scalability issues disappeared after their architectural intervention. We've seen a 200% increase in user capacity since then.",
    stars: 5,
  },
  {
    name: "Robert Thompson",
    role: "VP of Operations, AeroDynamic Designs",
    content: "The level of professionalism and technical depth they bring to the table is rare. They didn't just build a tool; they built a solution for our future.",
    stars: 5,
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-violet-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal width="100%" direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Client Success</span>
            </div>
          </Reveal>

          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Impact Through the Eyes of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Our Clients</span>
            </h2>
          </Reveal>

          <Reveal width="100%" delay={0.4}>
            <p className="text-slate-400 text-lg leading-relaxed">
              We take pride in delivering exceptional value and fostering long-term partnerships with businesses that are shaping the future.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative bg-slate-900/40 p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-300 hover:bg-slate-900/60"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={56} />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed italic mb-8 min-h-[100px]">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
