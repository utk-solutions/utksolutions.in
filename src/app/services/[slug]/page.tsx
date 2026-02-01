"use client";

import { use } from "react";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTA from "@/components/CTA";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
                </div>

                <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-sm text-slate-500 mb-8"
                        >
                            <Link href="/" className="hover:text-violet-400 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:text-violet-400 transition-colors">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-violet-400">{service.title}</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8"
                        >
                            <service.icon className="w-5 h-5 text-violet-400" />
                            <span className="text-sm font-medium text-violet-400">Premium Service</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
                        >
                            {service.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed"
                        >
                            {service.description}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 relative border-t border-white/5">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2">
                            <div className="prose prose-invert prose-slate max-w-none">
                                <div
                                    className="text-slate-300 space-y-6 text-lg"
                                    dangerouslySetInnerHTML={{ __html: service.details }}
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-8">
                                {/* Benefits Card */}
                                <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-violet-400" />
                                        Key Benefits
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            "Scalable Solutions",
                                            "Enterprise Security",
                                            "Cost Optimization",
                                            "Expert Implementation",
                                            "24/7 Monitoring"
                                        ].map((benefit, i) => (
                                            <div key={i} className="flex items-start gap-3 text-slate-400">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                                <span>{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 group">
                                        Start Project
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
