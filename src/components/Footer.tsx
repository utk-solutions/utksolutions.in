import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Cloud Engineering", href: "//services/cloud-engineering" },
    { name: "DevOps & CI/CD", href: "//services/devops-support" },
    { name: "Managed IT Services", href: "//services/managed-it-services" },
    { name: "Cybersecurity", href: "//services/cybersecurity" },
    { name: "Software Development", href: "//services/software-development" },
  ];

  const company = [
    { name: "About Us", href: "/About" },
    { name: "Our Services", href: "/services" },
    // { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-8 relative z-10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-600/5 blur-[100px]" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold text-white">
                Utk<span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Solutions</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Empowering businesses with enterprise-grade cloud solutions and digital transformation services.
            </p>
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/10 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 mt-0.5">
                  <Mail className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Email</p>
                  <a href="mailto:support@utksolutions.com" className="text-slate-300 hover:text-violet-400 transition-colors text-sm">
                    support@utksolutions.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mt-0.5">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Phone</p>
                  <a href="tel:+91 9970 80 4242" className="text-slate-300 hover:text-violet-400 transition-colors text-sm">
                    +91 9970 80 4242
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mt-0.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Address</p>
                  <p className="text-slate-300 text-sm">
                    B-105 Reva ComplexViman Nagar Symbiosis Road Pune | IND.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} UtkSolutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-violet-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-violet-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
