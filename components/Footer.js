"use client";

import { Shield, Phone, Mail, Globe, ArrowUp } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
const footerLinks = {
  services: [
    { label: "Information Security", href: "#services" },
    { label: "Performance Optimization", href: "#services" },
    { label: "Advisory & Managed Services", href: "#services" },
    { label: "Data Storage & Management", href: "#services" },
  ],
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Technology Partners", href: "#partners" },
    { label: "Case Studies", href: "#case-study" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-charcoal text-gray-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Company */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white">
                  Lionden
                </span>
                <span className="block text-[10px] tracking-widest uppercase text-gray-500">
                  Technologies Pvt. Ltd.
                </span>
              </div>
            </a>
            <p className="text-xs uppercase tracking-[0.15em] text-brand-orange mb-4">
              Collaborate · Innovate · Execute
            </p>
            <p className="text-sm leading-relaxed mb-6">
              Empowering enterprises with cybersecurity, network optimization,
              and IT infrastructure solutions since 2016.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/lionden-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919810209261"
                  className="flex items-center gap-3 text-sm hover:text-brand-orange transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  +91-9810209261
                </a>
              </li>
              <li>
                <a
                  href="mailto:pankaj@lionden.in"
                  className="flex items-center gap-3 text-sm hover:text-brand-orange transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  pankaj@lionden.in
                </a>
              </li>
              <li>
                <a
                  href="https://www.lionden.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-brand-orange transition-colors duration-200"
                >
                  <Globe className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  www.lionden.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Lionden Technologies Pvt. Ltd. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-all duration-200 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
