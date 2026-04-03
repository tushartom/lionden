"use client";

import {
  Building2,
  MapPin,
  CheckCircle2,
  Quote,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function CaseStudy() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="case-study" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
              Success Story
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mt-4 mb-6">
              Securing a Leading Media & Entertainment Enterprise
            </h2>
            <div className="section-divider mx-auto" />
          </AnimatedSection>
        </div>

        {/* Case Study Card */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="bg-brand-ice-blue rounded-3xl overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left — Sidebar Info */}
              <div className="lg:col-span-2 bg-brand-navy p-8 lg:p-10 text-white">
                <div className="mb-8">
                  <span className="text-brand-cyan text-xs font-semibold tracking-widest uppercase">
                    Client Profile
                  </span>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-brand-orange" />
                      <div>
                        <div className="text-xs text-gray-400">Country</div>
                        <div className="font-medium">India</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-brand-orange" />
                      <div>
                        <div className="text-xs text-gray-400">Industry</div>
                        <div className="font-medium">Media & Entertainment</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-brand-cyan text-xs font-semibold tracking-widest uppercase">
                    Key Requirements
                  </span>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Easy-to-deploy web security with no client-side intervention",
                      "Granular policy controls for different employee types",
                      "High-speed SSL-encrypted traffic inspection",
                    ].map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-brand-cyan text-xs font-semibold tracking-widest uppercase">
                    Lionden Value-Adds
                  </span>
                  <ul className="mt-4 space-y-2">
                    {[
                      "End-to-end solution design",
                      "Smooth, efficient implementation",
                      "Same-day technical support resolution",
                    ].map((val) => (
                      <li
                        key={val}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right — Main Content */}
              <div className="lg:col-span-3 p-8 lg:p-10">
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-2xl text-brand-navy mb-4">
                    The Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To prevent malicious software from crippling its network,
                    the client needed a non-proxy web security solution. Lionden
                    Technologies recommended{" "}
                    <span className="font-semibold text-brand-navy">
                      ContentKeeper&apos;s Secure Internet Gateway
                    </span>{" "}
                    — which the client tested for over two months across all RFP
                    parameters.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    With the growing use of SSL encryption and increasing
                    malware attacks spoofing encrypted sites, the ability to
                    quickly decrypt, inspect, and filter traffic without
                    disrupting user access was paramount.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    ContentKeeper&apos;s in-line solution provides advanced
                    malware defense, accurate device identification, and
                    versatile browsing controls — regardless of whether
                    employees use personal or company-issued devices.
                  </p>
                </div>

                {/* Result Quote */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <Quote className="w-8 h-8 text-brand-orange/30 mb-3" />
                  <p className="text-brand-navy font-semibold text-lg leading-relaxed italic">
                    &ldquo;ContentKeeper&apos;s Layer 2 Ethernet bridge design
                    made deployment very easy — just plug and play. We deployed
                    it within minutes, without interfering with our network or
                    end-users&apos; devices.&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy text-sm">
                        Enterprise Client
                      </div>
                      <div className="text-gray-500 text-xs">
                        Media & Entertainment, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="text-center mt-12">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-orange/25 hover:-translate-y-0.5"
            >
              Discuss Your Challenge With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
