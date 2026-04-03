"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Users,
  Award,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy"
    >
      {/* Background */}
      <HeroBackground />

      {/* Shield Watermark */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
        <ShieldCheck className="w-[500px] h-[500px] text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="max-w-3xl">
          {/* Pre-headline */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-12 h-px bg-gradient-to-r from-brand-orange to-brand-cyan" />
            <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
              Collaborate · Innovate · Execute
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Your Trusted Partner for{" "}
            <span className="gradient-text">Cybersecurity</span> &{" "}
            <span className="gradient-text">IT Infrastructure</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We help enterprises reduce cyber risk, optimize network performance,
            and build future-ready IT ecosystems — end to end.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-700 delay-[400ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-orange/25 hover:-translate-y-0.5"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "#services")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/15 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-200"
            >
              Explore Our Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap gap-x-8 gap-y-3 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Award className="w-4 h-4 text-brand-cyan" />
              <span>30+ Years Combined Expertise</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Users className="w-4 h-4 text-brand-cyan" />
              <span>9+ Technology Alliances</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              <span>End-to-End Ownership</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#partners"
          onClick={(e) => scrollToSection(e, "#partners")}
          className="text-white/20 hover:text-white/50 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
