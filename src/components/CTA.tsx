"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translated-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translated-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Your Digital Future
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Ready to transform your business? Schedule a free consultation with our experts and discover how we can help you scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-primary font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                Schedule Consultation <ArrowRight size={20} />
              </Link>
              <Link
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 border border-blue-500 text-white font-bold hover:bg-blue-500 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
