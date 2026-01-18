"use client";

import { Quote } from "lucide-react";

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 font-medium mb-8">Trusted by industry leaders worldwide</p>
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-100 h-16">
                   <span className="font-bold text-gray-400">Client {i}</span>
                </div>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
           {[1, 2].map((i) => (
             <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 relative">
               <Quote className="text-blue-100 absolute top-8 right-8" size={40} />
               <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                 "UtkSolutions transformed our digital infrastructure. Their team showed incredible dedication and technical expertise. The results have exceeded our expectations."
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gray-200" />
                 <div>
                   <h4 className="font-bold text-gray-900">John Doe</h4>
                   <p className="text-sm text-gray-500">CTO, TechCorp Inc.</p>
                 </div>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
