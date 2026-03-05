"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BookConsultationPopup from "./BookConsultationPopup";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Services", href: "/services" },
  // { name: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-slate-950/90 backdrop-blur-xl py-3 border-b border-white/10"
            : "bg-transparent py-5"
        )}
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-50 relative group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">
                  Utk<span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Solutions</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase -mt-0.5">
                  Digital Innovation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl group",
                    "text-slate-300 hover:text-white"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400 group-hover:w-1/2 transition-all duration-300" />
                </Link>
              ))}

              {/* Contact Us Button */}
              <button
                onClick={() => setIsPopupOpen(true)}
                className="group relative ml-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:brightness-110 transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "md:hidden z-50 p-2 rounded-xl transition-colors duration-300",
                isMobileMenuOpen ? "text-white" : "text-slate-300 hover:text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative pt-24 px-6 h-full flex flex-col"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-4 px-4 rounded-2xl text-xl font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsPopupOpen(true);
                  }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center font-bold text-lg flex items-center justify-center gap-3"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>

              {/* Decorative elements */}
              <div className="mt-auto pb-8">
                <div className="flex items-center justify-center gap-4 text-slate-600">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-700" />
                  <span className="text-sm font-medium">UtkSolutions</span>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-700" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Consultation Popup */}
      <BookConsultationPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
