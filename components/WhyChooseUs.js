"use client";

import { Puzzle, Target, Wrench, Lock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const differentiators = [
  {
    icon: Puzzle,
    title: "Solutions, Not Products",
    description:
      "We don't just sell boxes. We engineer complete solutions tailored to your specific challenges and goals.",
  },
  {
    icon: Target,
    title: "Custom-Tailored Approach",
    description:
      "Every engagement is designed around the unique needs of your environment — no cookie-cutter deployments.",
  },
  {
    icon: Wrench,
    title: "Post-Deployment Support",
    description:
      "Our relationship doesn't end at go-live. We provide dedicated after-sales support and continuous optimization.",
  },
  {
    icon: Lock,
    title: "End-to-End Ownership",
    description:
      "From initial planning to post-deployment monitoring, we take full accountability for outcomes.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-brand-ice-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
              Why Lionden
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mt-4 mb-6">
              Not Just Vendors — Your{" "}
              <span className="text-brand-orange">Technology Partners</span>
            </h2>
            <div className="section-divider mx-auto" />
          </AnimatedSection>
        </div>

        {/* Differentiators Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={item.title}
                animation="fade-up"
                delay={i * 100}
              >
                <div className="bg-white rounded-2xl p-8 text-center h-full border border-gray-100 hover:border-brand-orange/20 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
