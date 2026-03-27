"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Sparkles, ArrowRight, CheckCircle2, Users, Target, Eye,
    Award, Globe, Shield, Zap, Clock, Heart, ChevronRight
} from "lucide-react";
import BookConsultationPopup from "@/components/BookConsultationPopup";

// Core values data
const coreValues = [
    {
        icon: Target,
        title: "Innovation First",
        description: "We embrace cutting-edge technologies and creative solutions.",
        color: "violet",
    },
    {
        icon: Shield,
        title: "Trust & Integrity",
        description: "We build lasting relationships through transparency.",
        color: "emerald",
    },
    {
        icon: Users,
        title: "Client Success",
        description: "Your success is our success. We measure our achievements by value.",
        color: "cyan",
    },
    {
        icon: Zap,
        title: "Excellence",
        description: "We set high standards and deliver exceptional quality.",
        color: "amber",
    },
];

// Stats data
const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "98%", label: "Client Retention" },
    { value: "50+", label: "Team Members" },
];

// Timeline data
const milestones = [
    { year: "2014", title: "Company Founded", description: "Started with a vision to transform businesses." },
    { year: "2016", title: "First Enterprise Client", description: "Secured Fortune 500 partnership." },
    { year: "2018", title: "Global Expansion", description: "Opened offices in Europe and Asia." },
    { year: "2020", title: "Cloud Excellence Award", description: "Recognized as leading cloud provider." },
    { year: "2024", title: "AI Innovation Hub", description: "Launched AI research center." },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    violet: { bg: "bg-violet-500/20", text: "text-violet-400", border: "border-violet-500/20" },
    amber: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/20" },
    cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/20" },
    emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/20" },
};

export default function AboutPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                            <span className="text-violet-400">About</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span className="text-sm font-medium text-violet-400">About UtkSolutions</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-6"
                        >
                            Transforming Businesses Through{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                Innovation
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-slate-400 max-w-2xl mx-auto"
                        >
                            For over a decade, we&apos;ve been at the forefront of digital transformation,
                            helping enterprises navigate modern technology.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-white/5">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-slate-500 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/10">
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        src="/assets/images/feature-banner.png"
                                        alt="Our Story"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 border border-white/10 hidden md:block">
                                <Award className="w-6 h-6 text-white mb-1" />
                                <p className="text-white font-semibold text-sm">Award Winning</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                                <Heart className="w-3 h-3 text-violet-400" />
                                <span className="text-xs font-medium text-violet-400">Our Story</span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                From Humble Beginnings to{" "}
                                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                                    Industry Leaders
                                </span>
                            </h2>

                            <div className="space-y-3 text-slate-400 text-sm mb-6">
                                <p>
                                    Founded in 2014, UtkSolutions started with a mission to bridge the gap between
                                    technology and business success. What began as a small team has grown into a
                                    global technology partner.
                                </p>
                                <p>
                                    Today, we serve over 100 enterprise clients across industries, delivering
                                    solutions in cloud computing, software development, and digital transformation.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/20">
                                        <Globe className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <span className="text-white text-sm font-medium">Global Presence</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/20">
                                        <Users className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <span className="text-white text-sm font-medium">50+ Experts</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-slate-900/50">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-violet-600/10 to-indigo-600/10 border border-violet-500/20"
                        >
                            <div className="p-2.5 rounded-xl bg-violet-500/20 border border-violet-500/20 w-fit mb-4">
                                <Target className="w-5 h-5 text-violet-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                To empower businesses with innovative technology solutions that drive growth
                                and create lasting competitive advantages.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border border-cyan-500/20"
                        >
                            <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/20 w-fit mb-4">
                                <Eye className="w-5 h-5 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                To be the world&apos;s most trusted technology partner, recognized for our
                                commitment to excellence and client success.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                            <Heart className="w-3 h-3 text-violet-400" />
                            <span className="text-xs font-medium text-violet-400">Core Values</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            What We Stand For
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {coreValues.map((value, index) => {
                            const colors = colorClasses[value.color];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-5 rounded-xl bg-slate-800/30 border border-white/5 hover:border-white/10 transition-all"
                                >
                                    <div className={`p-2.5 rounded-lg ${colors.bg} border ${colors.border} w-fit mb-4`}>
                                        <value.icon className={`w-5 h-5 ${colors.text}`} />
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-2">{value.title}</h3>
                                    <p className="text-slate-500 text-sm">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-violet-600/10 via-indigo-600/5 to-slate-950">
                <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-slate-400 mb-8">
                            Let&apos;s discuss how we can help you achieve your technology goals.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="group px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:brightness-110 transition-all flex items-center gap-2"
                            >
                                Book a Consultation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link
                                href="/services"
                                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
                            >
                                Our Services
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                            {["Google Cloud Partner", "AWS Partner", "Microsoft Partner"].map((badge, index) => (
                                <div key={index} className="flex items-center gap-2 text-slate-500 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    <span>{badge}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <BookConsultationPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </div>
    );
}
