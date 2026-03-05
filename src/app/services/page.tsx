"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import {
    Sparkles,
    ArrowRight,
    CheckCircle2,
    Zap,
    Shield,
    BarChart,
    ChevronRight,
    Plus
} from "lucide-react";
import Link from "next/link";
import CTA from "@/components/CTA";

export default function ServicesPage() {
    return (
        <div className="bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background mesh */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
                </div>

                <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6"
                        >
                            <Link href="/" className="hover:text-violet-400 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-violet-400">Services</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span className="text-sm font-medium text-violet-400">Our Expertise</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Transforming Ideas into <br />
                            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                                Digital Reality
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto"
                        >
                            We provide comprehensive technology solutions designed to help your enterprise
                            innovate faster, operate efficiently, and scale without boundaries.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 relative">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Reveal key={index} delay={index * 0.1} width="100%">
                                <div className="group h-full relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-violet-500/30 transition-all duration-500 hover:bg-slate-900/60 flex flex-col">
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                                        <service.icon size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3 text-sm text-slate-500">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            <span>Enterprise Ready</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-slate-500">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            <span>24/7 Expert Support</span>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-colors group/link"
                                    >
                                        Explore Service
                                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>

                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-violet-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity pointer-events-none" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA />
        </div>
    );
}
