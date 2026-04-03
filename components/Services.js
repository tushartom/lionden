"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Zap,
  ClipboardList,
  Database,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    id: "info-security",
    icon: ShieldCheck,
    title: "Information Security",
    color: "orange",
    description:
      "Protect your enterprise from evolving cyber threats with multi-layered security solutions tailored to your environment.",
    items: [
      "Network & Web Security",
      "Data Security & Encryption",
      "Data Loss Prevention (DLP)",
      "Web Application Security",
      "Identity & Access Management",
      "Endpoint Security",
      "Ransomware Protection",
    ],
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance Optimization",
    color: "cyan",
    description:
      "Maximize uptime, accelerate applications, and ensure seamless user experiences across your entire network.",
    items: [
      "Application Availability",
      "Data Availability",
      "WAN Availability & Optimization",
      "Enterprise Mobility",
    ],
  },
  {
    id: "advisory",
    icon: ClipboardList,
    title: "Advisory & Managed Services",
    color: "orange",
    tag: "In collaboration with 63 Sats Cybertech",
    description:
      "Expert-led assessments and ongoing managed security services to continuously strengthen your defenses.",
    items: [
      "Application Security Assessment",
      "Secure Code Audit",
      "IT Incident Investigation",
      "Network Infrastructure Assessment",
      "WiFi Security Assessment",
      "Network Performance Assessment",
      "Vulnerability Assessment",
    ],
  },
  {
    id: "storage",
    icon: Database,
    title: "Data Storage & Management",
    color: "cyan",
    description:
      "Scalable, resilient storage architectures that keep your data available, backed up, and future-proof.",
    items: [
      "Network Attached Storage (NAS)",
      "Storage Area Network (SAN)",
      "Backup Solutions",
      "Secondary Storage Solutions",
    ],
  },
];

function ServiceCard({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;
  const isOrange = service.color === "orange";

  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <div className="service-card bg-white rounded-2xl border border-gray-100 overflow-hidden h-full flex flex-col">
        {/* Top Accent Bar */}
        <div
          className={`h-1.5 ${
            isOrange
              ? "bg-gradient-to-r from-brand-orange to-brand-orange-light"
              : "bg-gradient-to-r from-brand-cyan to-blue-400"
          }`}
        />

        <div className="p-8 flex flex-col flex-1">
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
              isOrange ? "bg-brand-orange/10" : "bg-brand-cyan/10"
            }`}
          >
            <Icon
              className={`w-7 h-7 ${
                isOrange ? "text-brand-orange" : "text-brand-cyan"
              }`}
            />
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-xl text-brand-navy mb-2">
            {service.title}
          </h3>

          {/* Tag */}
          {service.tag && (
            <span className="inline-block text-xs text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full mb-3 w-fit">
              {service.tag}
            </span>
          )}

          {/* Description */}
          <p className="text-gray-500 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Service Items */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-2.5 mb-6">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      isOrange ? "bg-brand-orange" : "bg-brand-cyan"
                    }`}
                  />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expand Toggle */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                isOrange
                  ? "text-brand-orange hover:text-brand-orange-hover"
                  : "text-brand-cyan hover:text-blue-500"
              }`}
            >
              {isExpanded ? "Show Less" : "View All Services"}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Services() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
              What We Do
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mt-4 mb-6">
              Comprehensive IT Security & Performance Solutions
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-gray-500 text-lg leading-relaxed">
              From protecting your data to optimizing your network — we cover
              every layer of your IT ecosystem.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="text-center mt-14">
            <p className="text-gray-500 mb-4">
              Not sure which solution fits your needs?
            </p>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-navy hover:bg-brand-navy-light text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              Talk to Our Experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
