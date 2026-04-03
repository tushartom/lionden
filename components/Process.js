"use client";

import { Search, PenTool, Rocket, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description:
      "We assess your current IT landscape, identify vulnerabilities, and understand your business objectives.",
    color: "cyan",
  },
  {
    number: "02",
    title: "Design",
    icon: PenTool,
    description:
      "We architect a scalable, secure solution custom-built for your environment and growth trajectory.",
    color: "orange",
  },
  {
    number: "03",
    title: "Deploy",
    icon: Rocket,
    description:
      "We implement with precision and minimal downtime, ensuring zero disruption to your operations.",
    color: "cyan",
  },
  {
    number: "04",
    title: "Defend",
    icon: ShieldCheck,
    description:
      "We continuously monitor, secure, and optimize your infrastructure for sustained performance.",
    color: "orange",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan via-brand-orange to-brand-cyan opacity-30" />
      <div className="absolute inset-0 hero-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-brand-cyan text-sm font-semibold tracking-[0.2em] uppercase">
              Our Process
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-4">
              The Lion Framework —{" "}
              <span className="text-brand-orange">D.D.D.D.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A proven four-phase methodology that ensures every engagement
              delivers measurable results.
            </p>
          </AnimatedSection>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-brand-cyan/30 via-brand-orange/30 to-brand-cyan/30" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isCyan = step.color === "cyan";

              return (
                <AnimatedSection
                  key={step.number}
                  animation="fade-up"
                  delay={i * 150}
                >
                  <div className="relative group text-center">
                    {/* Step Number & Icon */}
                    <div className="relative inline-flex flex-col items-center mb-6">
                      <div
                        className={`w-[120px] h-[120px] rounded-2xl flex flex-col items-center justify-center border-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl ${
                          isCyan
                            ? "border-brand-cyan/30 bg-brand-cyan/5 group-hover:border-brand-cyan/60 group-hover:shadow-brand-cyan/10"
                            : "border-brand-orange/30 bg-brand-orange/5 group-hover:border-brand-orange/60 group-hover:shadow-brand-orange/10"
                        }`}
                      >
                        <span
                          className={`font-mono text-sm font-bold mb-1 ${
                            isCyan ? "text-brand-cyan" : "text-brand-orange"
                          }`}
                        >
                          {step.number}
                        </span>
                        <Icon
                          className={`w-8 h-8 ${
                            isCyan ? "text-brand-cyan" : "text-brand-orange"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
