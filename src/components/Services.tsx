"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, ShieldCheck, Database, Headphones, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Scalable cloud architecture design, migration, and optimization on AWS, Azure, and Google Cloud.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom web and mobile application development using modern stacks like React, Node.js, and Python.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Comprehensive security audits, penetration testing, and compliance manaegement (SOC2, HIPAA).",
  },
  {
    icon: Database,
    title: "Managed IT Services",
    description: "Proactive infrastructure monitoring, database management, and remote troubleshooting.",
  },
  {
    icon: Headphones,
    title: "DevOps & Support",
    description: "CI/CD pipeline automation, containerization with Docker/Kubernetes, and 24/7 technical support.",
  },
  {
    icon: BarChart3,
    title: "Business Process",
    description: "Digital transformation consulting and automation strategies to streamline operations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5 className="text-primary font-bold uppercase tracking-wide mb-3 text-sm">Our Services</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            End-to-End Technology Solutions
          </h2>
          <p className="text-gray-600">
            Comprehensive IT services designed to help you innovate faster and operate with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
