"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#F7F8FA" }}
    >
      {/* =====================
          MAIN GRID
          pt accounts for fixed navbar height (80px)
      ===================== */}
      <div className="relative z-10 flex-1 grid lg:grid-cols-2 pt-20">
        {/* ── LEFT SIDE ── */}
        <div
          className="flex flex-col justify-between px-6 sm:px-10 lg:px-14 xl:px-20 pt-12 pb-10 lg:pt-16 lg:pb-14"
          style={{ background: "#F7F8FA" }}
        >
          <div>
            {/* Small label */}
            <div
              className={`flex items-center gap-3 mb-12 lg:mb-16 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              {/* <div
                className="w-6 h-px"
                style={{ background: "rgba(10,31,63,0.25)" }}
              /> */}
              <span
                className="text-[12px] tracking-[0.2em] uppercase font-medium"
                style={{ color: "rgba(10,31,63,0.45)" }}
              >
                
              </span>
            </div>

            {/* Statement headline */}
            <div className="space-y-0">
              {/* Line 1 — light */}
              <div
                className={`transition-all duration-700 delay-100 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p
                  className="font-heading leading-[1.12]"
                  style={{
                    fontSize: "clamp(28px, 3.4vw, 52px)",
                    fontWeight: 300,
                    color: "rgba(10,31,63,0.50)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Most businesses discover
                </p>
                <p
                  className="font-heading leading-[1.12]"
                  style={{
                    fontSize: "clamp(28px, 3.4vw, 52px)",
                    fontWeight: 300,
                    color: "rgba(10,31,63,0.50)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  their security gaps
                </p>
              </div>

              {/* Line 2 — bold underlined */}
              <div
                className={`transition-all duration-700 delay-200 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p
                  className="font-heading leading-[1.12] mt-1"
                  style={{
                    fontSize: "clamp(32px, 4vw, 60px)",
                    fontWeight: 800,
                    color: "#0A1F3F",
                    letterSpacing: "-0.025em",
                    textDecorationLine: "underline",
                    textDecorationColor: "#E8531E",
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "6px",
                  }}
                >
                  after the breach.
                </p>
              </div>

              {/* Line 3 — medium */}
              <div
                className={`mt-5 transition-all duration-700 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p
                  className="font-heading leading-[1.12]"
                  style={{
                    fontSize: "clamp(28px, 3.4vw, 52px)",
                    fontWeight: 500,
                    color: "#0A1F3F",
                    letterSpacing: "-0.02em",
                  }}
                >
                  We make sure
                </p>
                <p
                  className="font-heading leading-[1.12]"
                  style={{
                    fontSize: "clamp(28px, 3.4vw, 52px)",
                    fontWeight: 500,
                    color: "#0A1F3F",
                    letterSpacing: "-0.02em",
                  }}
                >
                  you find them first.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom scroll cue */}
          <div
            className={`mt-12 lg:mt-0 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div
              className="mb-5 h-px w-full"
              style={{ background: "rgba(10,31,63,0.08)" }}
            />
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "#services")}
              className="group inline-flex items-center gap-3 text-[15px] font-medium transition-colors duration-200"
              style={{ color: "rgba(10,31,63,0.40)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0A1F3F")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(10,31,63,0.40)")
              }
            >
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Explore our approach
            </a>
          </div>
        </div>

        {/* ── RIGHT SIDE ── */}
        <div
          className="relative flex items-center justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-10 lg:py-0"
          style={{ background: "#FFFFFF" }}
        >
          {/* Thin vertical rule */}
          <div
            className="hidden lg:block absolute left-0 top-16 bottom-16 w-px"
            style={{ background: "rgba(10,31,63,0.07)" }}
          />

          {/* Card */}
          <div
            className={`w-full max-w-[420px] transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Orange accent */}
            <div
              className="h-[3px] w-12 rounded-full mb-8"
              style={{ background: "#E8531E" }}
            />

            {/* Card body */}
            <div
              className="rounded-2xl p-7 sm:p-9"
              style={{
                background: "#F7F8FA",
                border: "1px solid rgba(10,31,63,0.07)",
                boxShadow:
                  "0 2px 4px rgba(10,31,63,0.04), 0 12px 40px rgba(10,31,63,0.07)",
              }}
            >
              <div
                className="text-[11px] uppercase tracking-[0.22em] font-medium mb-5"
                style={{ color: "#E8531E" }}
              >
                The reality
              </div>

              <p
                className="font-heading leading-[1.35] mb-4"
                style={{
                  fontSize: "clamp(20px, 2vw, 28px)",
                  fontWeight: 700,
                  color: "#0A1F3F",
                  letterSpacing: "-0.02em",
                }}
              >
                &ldquo;After the breach&rdquo; is not a risk.{" "}
                <span style={{ color: "#E8531E" }}>It&apos;s a failure.</span>
              </p>

              <p
                className="leading-relaxed mb-7"
                style={{
                  fontSize: "15px",
                  color: "rgba(10,31,63,0.55)",
                  lineHeight: "1.75",
                }}
              >
                We exist so it never happens to you. From network security to
                endpoint protection — our team identifies threats before they
                become incidents.
              </p>

              <div
                className="mb-6 h-px"
                style={{ background: "rgba(10,31,63,0.08)" }}
              />

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="group w-full inline-flex items-center justify-between font-semibold rounded-xl transition-all duration-200"
                style={{
                  padding: "14px 20px",
                  background: "#0A1F3F",
                  color: "#fff",
                  fontSize: "15px",
                  boxShadow: "0 4px 20px rgba(10,31,63,0.18)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E8531E";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(232,83,30,0.30)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0A1F3F";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(10,31,63,0.18)";
                }}
              >
                Schedule a Call
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </div>

            <p
              className="mt-5 text-[13px] text-center"
              style={{ color: "rgba(10,31,63,0.30)" }}
            >
              Cybersecurity · Network Optimization · IT Infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
