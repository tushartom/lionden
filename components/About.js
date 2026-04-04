"use client";

import { Target, Telescope, Calendar, Users, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-ice-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <div>
            <AnimatedSection animation="fade-up">
              <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
                Who We Are
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mt-4 mb-6 leading-tight">
                Building Intelligent, Future-Ready Operations{" "}
                <span className="text-brand-orange">Since 2016</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="section-divider mb-6" />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={150}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Lionden Technologies Pvt. Ltd. was founded with a clear purpose
                — to help businesses reduce cyber risk and enhance their
                security posture using technologies that protect
                business-critical applications and data.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Today, we deliver end-to-end IT services and system integration
                solutions that drive digital excellence. From infrastructure
                modernization and enterprise software to network integration, we
                combine technology, strategy, and execution to help corporations
                thrive in a connected world.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={250}>
              <p className="text-brand-navy font-semibold text-lg leading-relaxed">
                With a combined team experience of over{" "}
                <span className="text-brand-orange">30 years</span> in
                cybersecurity, network optimization, and performance solutions,
                our experts bring unmatched depth to every engagement.
              </p>
            </AnimatedSection>
          </div>

          {/* Right — Visual / Stats */}
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-orange/5 to-brand-cyan/5 rounded-3xl" />

              <div className="relative bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 rounded-xl bg-brand-ice-blue">
                    <Calendar className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="font-mono font-bold text-3xl text-brand-navy">
                      2016
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Founded</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-brand-ice-blue">
                    <Users className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="font-mono font-bold text-3xl text-brand-navy">
                      30+
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Years Combined Exp.
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-brand-ice-blue">
                    <ShieldCheck className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="font-mono font-bold text-3xl text-brand-navy">
                      9+
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Tech Alliances
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-brand-ice-blue">
                    <Target className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                    <div className="font-mono font-bold text-3xl text-brand-navy">
                      100%
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Project Ownership
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="border-l-4 border-brand-orange pl-4">
                  <p className="text-gray-600 italic text-sm leading-relaxed">
                    &ldquo;We don&apos;t just provide technology — we engineer
                    complete ecosystems that empower businesses to operate
                    securely and scale confidently.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with seamless technology ecosystems that
                drive performance, security, and scalability.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Telescope className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the trusted technology partner for enterprises aiming to
                build intelligent, future-ready operations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
