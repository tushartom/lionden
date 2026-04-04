"use client";

import { useState, useRef, useEffect } from "react";
import {
  ShieldCheck,
  Zap,
  ClipboardList,
  Database,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const services = [
  {
    id: "info-security",
    icon: ShieldCheck,
    label: "Information Security",
    tagline: "Defend every layer",
    description:
      "Protect your enterprise from evolving cyber threats with multi-layered security solutions designed around your specific environment — not a generic template.",
    tag: null,
    accentColor: "#E8531E",
    accentLight: "rgba(232,83,30,0.08)",
    items: [
      {
        name: "Network & Web Security",
        detail: "Perimeter and web-layer threat protection",
      },
      {
        name: "Data Security & Encryption",
        detail: "End-to-end encryption for data at rest and in transit",
      },
      {
        name: "Data Loss Prevention (DLP)",
        detail: "Prevent unauthorized data exfiltration",
      },
      {
        name: "Web Application Security",
        detail: "WAF, bot protection, and OWASP coverage",
      },
      {
        name: "Identity & Access Management",
        detail: "Zero-trust identity controls and SSO",
      },
      {
        name: "Endpoint Security",
        detail: "Device-level threat detection and response",
      },
      {
        name: "Ransomware Protection",
        detail: "Multi-layer defense and rapid recovery",
      },
    ],
  },
  {
    id: "performance",
    icon: Zap,
    label: "Performance Optimization",
    tagline: "Maximum uptime, zero compromise",
    description:
      "Maximize uptime, accelerate application delivery, and ensure seamless user experiences across your entire network — from the data center to the last mile.",
    tag: null,
    accentColor: "#00C2FF",
    accentLight: "rgba(0,194,255,0.08)",
    items: [
      {
        name: "Application Availability",
        detail: "Load balancing, failover, and HA architecture",
      },
      {
        name: "Data Availability",
        detail: "Continuous data access with zero single points of failure",
      },
      {
        name: "WAN Availability & Optimization",
        detail: "SD-WAN, link bonding, and traffic optimization",
      },
      {
        name: "Enterprise Mobility",
        detail: "Secure, high-performance mobile workforce enablement",
      },
    ],
  },
  {
    id: "advisory",
    icon: ClipboardList,
    label: "Advisory & Managed Services",
    tagline: "Expert eyes on your environment",
    description:
      "Expert-led assessments and ongoing managed security services that give you a clear picture of your risk posture — and a roadmap to continuously strengthen it.",
    tag: "In collaboration with 63 Sats Cybertech",
    accentColor: "#E8531E",
    accentLight: "rgba(232,83,30,0.08)",
    items: [
      {
        name: "Application Security Assessment",
        detail: "Comprehensive app-layer vulnerability review",
      },
      {
        name: "Secure Code Audit",
        detail: "Manual and automated source code security review",
      },
      {
        name: "IT Incident Investigation",
        detail: "Forensic analysis and root cause identification",
      },
      {
        name: "Network Infrastructure Assessment",
        detail: "End-to-end network security and design review",
      },
      {
        name: "WiFi Security Assessment",
        detail: "Wireless network audit and rogue AP detection",
      },
      {
        name: "Network Performance Assessment",
        detail: "Identify bottlenecks and optimization opportunities",
      },
      {
        name: "Vulnerability Assessment",
        detail: "Systematic identification of exploitable weaknesses",
      },
    ],
  },
  {
    id: "storage",
    icon: Database,
    label: "Data Storage & Management",
    tagline: "Resilient. Scalable. Always available.",
    description:
      "Scalable, resilient storage architectures that ensure your critical data remains available, protected, and future-proof — no matter how fast you grow.",
    tag: null,
    accentColor: "#00C2FF",
    accentLight: "rgba(0,194,255,0.08)",
    items: [
      {
        name: "Network Attached Storage (NAS)",
        detail: "Centralized file storage with high-speed access",
      },
      {
        name: "Storage Area Network (SAN)",
        detail: "Block-level storage for mission-critical workloads",
      },
      {
        name: "Backup Solutions",
        detail: "Automated, verified backup with fast recovery",
      },
      {
        name: "Secondary Storage Solutions",
        detail: "Cost-optimized tiered storage and archival",
      },
    ],
  },
];

/* ─────────────────────────────────────────
   TAB BUTTON
───────────────────────────────────────── */
function TabButton({ service, isActive, onClick, index }) {
  const Icon = service.icon;

  return (
    <button
      onClick={() => onClick(index)}
      className="group relative w-full text-left transition-all duration-200"
      style={{ outline: "none" }}
    >
      <div
        className="flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200"
        style={{
          background: isActive ? service.accentLight : "transparent",
          border: isActive
            ? `1px solid ${service.accentColor}22`
            : "1px solid transparent",
        }}
      >
        {/* Active indicator */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full transition-all duration-300"
          style={{
            height: isActive ? "60%" : "0%",
            background: service.accentColor,
            opacity: isActive ? 1 : 0,
          }}
        />

        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
          style={{
            background: isActive ? service.accentColor : "rgba(10,31,63,0.05)",
          }}
        >
          <Icon
            className="w-5 h-5 transition-colors duration-200"
            style={{ color: isActive ? "#fff" : "rgba(10,31,63,0.45)" }}
          />
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <p
            className="font-heading font-semibold text-sm leading-tight transition-colors duration-200"
            style={{
              color: isActive ? "#0A1F3F" : "rgba(10,31,63,0.55)",
            }}
          >
            {service.label}
          </p>
          <p
            className="text-xs mt-0.5 truncate transition-colors duration-200"
            style={{
              color: isActive ? service.accentColor : "rgba(10,31,63,0.35)",
            }}
          >
            {service.tagline}
          </p>
        </div>

        {/* Chevron */}
        <ChevronRight
          className="w-4 h-4 flex-shrink-0 transition-all duration-200"
          style={{
            color: isActive ? service.accentColor : "rgba(10,31,63,0.25)",
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateX(0)" : "translateX(-4px)",
          }}
        />
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────
   SERVICE DETAIL PANEL
───────────────────────────────────────── */
function ServicePanel({ service, isVisible }) {
  const Icon = service.icon;

  return (
    <div
      className="h-full flex flex-col"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        pointerEvents: isVisible ? "auto" : "none",
        position: isVisible ? "relative" : "absolute",
        inset: 0,
      }}
    >
      {/* Top section */}
      <div className="mb-8">
        {/* Icon + label row */}
        <div className="flex items-center gap-4 mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: service.accentColor }}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3
              className="font-heading font-bold text-xl leading-tight"
              style={{ color: "#0A1F3F" }}
            >
              {service.label}
            </h3>
            {service.tag && (
              <span
                className="inline-block text-[11px] font-medium px-3 py-1 rounded-full mt-1.5"
                style={{
                  background: service.accentLight,
                  color: service.accentColor,
                }}
              >
                {service.tag}
              </span>
            )}
          </div>
        </div>

        {/* Thin accent rule */}
        <div
          className="h-[2px] w-12 rounded-full mb-5"
          style={{ background: service.accentColor }}
        />

        {/* Description */}
        <p
          className="text-base leading-relaxed"
          style={{ color: "rgba(10,31,63,0.60)" }}
        >
          {service.description}
        </p>
      </div>

      {/* Divider */}
      <div
        className="mb-6 h-px"
        style={{ background: "rgba(10,31,63,0.07)" }}
      />

      {/* Service items */}
      <div className="flex-1">
        <p
          className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-4"
          style={{ color: "rgba(10,31,63,0.35)" }}
        >
          What&apos;s included
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {service.items.map((item, i) => (
            <div
              key={item.name}
              className="flex items-start gap-3 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(6px)",
                transition: `opacity 0.3s ease ${i * 50 + 200}ms, transform 0.3s ease ${i * 50 + 200}ms`,
              }}
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2
                  className="w-4 h-4"
                  style={{ color: service.accentColor }}
                />
              </div>
              <div>
                <p
                  className="text-sm font-semibold leading-tight"
                  style={{ color: "#0A1F3F" }}
                >
                  {item.name}
                </p>
                <p
                  className="text-xs mt-0.5 leading-relaxed"
                  style={{ color: "rgba(10,31,63,0.45)" }}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MOBILE ACCORDION
───────────────────────────────────────── */
function MobileAccordion({ service, isOpen, onToggle }) {
  const Icon = service.icon;
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: isOpen
          ? `1px solid ${service.accentColor}30`
          : "1px solid rgba(10,31,63,0.07)",
        background: "#fff",
        boxShadow: isOpen
          ? `0 8px 32px rgba(10,31,63,0.08)`
          : "0 1px 4px rgba(10,31,63,0.04)",
        transition: "box-shadow 0.3s ease, border 0.3s ease",
      }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
          style={{
            background: isOpen ? service.accentColor : "rgba(10,31,63,0.05)",
          }}
        >
          <Icon
            className="w-5 h-5 transition-colors duration-200"
            style={{ color: isOpen ? "#fff" : "rgba(10,31,63,0.45)" }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="font-heading font-semibold text-sm"
            style={{ color: "#0A1F3F" }}
          >
            {service.label}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{
              color: isOpen ? service.accentColor : "rgba(10,31,63,0.40)",
            }}
          >
            {service.tagline}
          </p>
        </div>

        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: isOpen ? service.accentLight : "rgba(10,31,63,0.04)",
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          <ChevronRight
            className="w-4 h-4"
            style={{
              color: isOpen ? service.accentColor : "rgba(10,31,63,0.35)",
            }}
          />
        </div>
      </button>

      {/* Expandable content */}
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div ref={contentRef}>
          <div
            className="px-5 pb-6"
            style={{ borderTop: "1px solid rgba(10,31,63,0.06)" }}
          >
            {/* Tag */}
            {service.tag && (
              <div className="pt-4 mb-3">
                <span
                  className="inline-block text-[11px] font-medium px-3 py-1 rounded-full"
                  style={{
                    background: service.accentLight,
                    color: service.accentColor,
                  }}
                >
                  {service.tag}
                </span>
              </div>
            )}

            {/* Description */}
            <p
              className="text-sm leading-relaxed pt-4 pb-5"
              style={{ color: "rgba(10,31,63,0.60)" }}
            >
              {service.description}
            </p>

            <div
              className="h-px mb-5"
              style={{ background: "rgba(10,31,63,0.07)" }}
            />

            <p
              className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-4"
              style={{ color: "rgba(10,31,63,0.35)" }}
            >
              What&apos;s included
            </p>

            {/* Items */}
            <div className="space-y-3">
              {service.items.map((item) => (
                <div key={item.name} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: service.accentColor }}
                  />
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#0A1F3F" }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "rgba(10,31,63,0.45)" }}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMobile, setOpenMobile] = useState(0);
  const panelRef = useRef(null);

  const activeService = services[activeIndex];

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ background: "#F7F8FA" }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,83,30,0.04) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* ── Header ── */}
        <AnimatedSection animation="fade-up">
          <div className="mb-14 lg:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "#E8531E" }} />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "#E8531E" }}
              >
                What We Do
              </span>
            </div>
            <h2
              className="font-heading font-extrabold leading-tight mb-4"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#0A1F3F",
                letterSpacing: "-0.02em",
                maxWidth: "600px",
              }}
            >
              Comprehensive IT Security &amp; Performance Solutions
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "rgba(10,31,63,0.55)",
                maxWidth: "520px",
              }}
            >
              From protecting your data to optimizing your network — we cover
              every layer of your IT ecosystem.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Desktop Tab Layout ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-start">
          {/* Left: Tab list */}
          <AnimatedSection animation="slide-left" className="lg:col-span-4">
            <div
              className="rounded-3xl p-3 sticky top-28"
              style={{
                background: "#fff",
                border: "1px solid rgba(10,31,63,0.07)",
                boxShadow: "0 4px 24px rgba(10,31,63,0.06)",
              }}
            >
              {/* Tab count label */}
              <div
                className="px-3 pb-3 pt-1 mb-1 text-[11px] uppercase tracking-[0.2em] font-semibold"
                style={{ color: "rgba(10,31,63,0.30)" }}
              >
                {services.length} Service Areas
              </div>

              <div className="space-y-1">
                {services.map((service, i) => (
                  <TabButton
                    key={service.id}
                    service={service}
                    isActive={activeIndex === i}
                    onClick={handleTabClick}
                    index={i}
                  />
                ))}
              </div>

              {/* CTA inside tab panel */}
              <div
                className="mt-4 p-4 rounded-2xl"
                style={{ background: "rgba(10,31,63,0.03)" }}
              >
                <p
                  className="text-xs leading-relaxed mb-3"
                  style={{ color: "rgba(10,31,63,0.50)" }}
                >
                  Not sure which solution fits your needs?
                </p>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="group w-full inline-flex items-center justify-between text-sm font-semibold rounded-xl transition-all duration-200"
                  style={{
                    padding: "10px 14px",
                    background: "#0A1F3F",
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#E8531E";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#0A1F3F";
                  }}
                >
                  Talk to Our Experts
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Panel */}
          <AnimatedSection
            animation="slide-right"
            delay={100}
            className="lg:col-span-8"
          >
            <div
              ref={panelRef}
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid rgba(10,31,63,0.07)",
                boxShadow: "0 4px 40px rgba(10,31,63,0.07)",
                minHeight: "520px",
              }}
            >
              {/* Colored top bar that changes with active tab */}
              <div
                className="h-1 w-full transition-all duration-500"
                style={{
                  background: `linear-gradient(90deg, ${activeService.accentColor}, ${activeService.accentColor}55)`,
                }}
              />

              {/* Panels stacked, only active one visible */}
              <div
                className="relative p-8 lg:p-10"
                style={{ minHeight: "500px" }}
              >
                {services.map((service, i) => (
                  <div
                    key={service.id}
                    style={{
                      position: i === activeIndex ? "relative" : "absolute",
                      inset: i === activeIndex ? "auto" : "40px",
                      opacity: i === activeIndex ? 1 : 0,
                      transform:
                        i === activeIndex
                          ? "translateY(0)"
                          : "translateY(10px)",
                      transition: "opacity 0.35s ease, transform 0.35s ease",
                      pointerEvents: i === activeIndex ? "auto" : "none",
                    }}
                  >
                    <ServicePanel
                      service={service}
                      isVisible={i === activeIndex}
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ── Mobile Accordion ── */}
        <div className="lg:hidden space-y-3">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.id}
              animation="fade-up"
              delay={i * 80}
            >
              <MobileAccordion
                service={service}
                isOpen={openMobile === i}
                onToggle={() => setOpenMobile(openMobile === i ? -1 : i)}
              />
            </AnimatedSection>
          ))}

          {/* Mobile CTA */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div
              className="rounded-2xl p-5 mt-4"
              style={{
                background: "#fff",
                border: "1px solid rgba(10,31,63,0.07)",
              }}
            >
              <p
                className="text-sm mb-3"
                style={{ color: "rgba(10,31,63,0.55)" }}
              >
                Not sure which solution fits your needs?
              </p>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2 text-sm font-semibold rounded-xl transition-all duration-200"
                style={{
                  padding: "11px 20px",
                  background: "#0A1F3F",
                  color: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E8531E";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0A1F3F";
                }}
              >
                Talk to Our Experts
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
