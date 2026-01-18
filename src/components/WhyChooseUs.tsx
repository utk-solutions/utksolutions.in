"use client";

import { Shield, Clock, Users, Zap } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Access a diverse pool of certified experts across various technology domains.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodologies ensure rapid deployment without compromising quality.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and technical support to keep your business running.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols to protect your sensitive data and infrastructure.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <h5 className="text-primary font-bold uppercase tracking-wide mb-3 text-sm">Why Choose Us</h5>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
               Built for Scale, Designed for Success
             </h2>
             <p className="text-gray-600 mb-8 leading-relaxed">
               We combine technical expertise with business acumen to deliver solutions that drive real growth. Our commitment to excellence has made us a trusted partner for industry leaders.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {features.map((feature, index) => (
                 <div key={index} className="flex gap-4">
                   <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-primary">
                     <feature.icon size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                     <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
          
          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 p-2">
                 <div className="relative aspect-square rounded-xl w-full overflow-hidden">
                    <Image
                      src="/assets/images/why-choose-us.jpg"
                      alt="Why Choose UtkSolutions"
                      fill
                      className="object-cover"
                    />
                 </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
