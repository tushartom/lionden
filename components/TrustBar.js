"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const alliances = [
  {
    name: "Palo Alto Networks",
    logo: "/logos/paloalto.jpeg",
    width: 140,
    height: 40,
  },
  {
    name: "Forescout",
    logo: "/logos/forescout.png",
    width: 130,
    height: 36,
  },
  {
    name: "Ativion",
    logo: "/logos/ativion.png",
    width: 120,
    height: 36,
  },
  {
    name: "NetApp",
    logo: "/logos/netapp.jpeg",
    width: 110,
    height: 36,
  },
  {
    name: "F5",
    logo: "/logos/f5.png",
    width: 60,
    height: 40,
  },
  {
    name: "ContentKeeper",
    logo: "/logos/contentkeeper.png",
    width: 140,
    height: 36,
  },
  {
    name: "Cavisson",
    logo: "/logos/cavisson.png",
    width: 130,
    height: 36,
  },
  {
    name: "Infoblox",
    logo: "/logos/infoblox.png",
    width: 120,
    height: 36,
  },
  {
    name: "Netop",
    logo: "/logos/netop.jpeg",
    width: 100,
    height: 36,
  },
];

function AllianceLogo({ alliance, className = "" }) {
  return (
    <div
      className={`group flex items-center justify-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-default ${className}`}
    >
      <div className="grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-500">
        <Image
          src={alliance.logo}
          alt={`${alliance.name} logo`}
          width={alliance.width}
          height={alliance.height}
          className="object-contain h-10 w-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section id="partners" className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection animation="fade-in">
          <p className="text-center text-md font-medium text-brand-slate tracking-widest uppercase mb-10">
            Strategic Technology Alliances
          </p>
        </AnimatedSection>

        {/* ======= Desktop Grid ======= */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-4 items-center mb-4">
          {/* First row — 5 logos */}
          {alliances.slice(0, 5).map((alliance, i) => (
            <AnimatedSection
              key={alliance.name}
              animation="fade-up"
              delay={i * 80}
            >
              <AllianceLogo alliance={alliance} />
            </AnimatedSection>
          ))}
        </div>

        {/* Second row — 4 logos centered */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4 items-center max-w-4xl mx-auto">
          {alliances.slice(5).map((alliance, i) => (
            <AnimatedSection
              key={alliance.name}
              animation="fade-up"
              delay={(i + 5) * 80}
            >
              <AllianceLogo alliance={alliance} />
            </AnimatedSection>
          ))}
        </div>

        {/* ======= Mobile Auto-Scroll Carousel ======= */}
        <div className="md:hidden overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-logo-scroll gap-10 py-2">
            {/* Duplicate the list for seamless loop */}
            {[...alliances, ...alliances].map((alliance, i) => (
              <div
                key={`${alliance.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-2"
              >
                <Image
                  src={alliance.logo}
                  alt={`${alliance.name} logo`}
                  width={alliance.width}
                  height={alliance.height}
                  className="object-contain h-8 w-auto opacity-60"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <AnimatedSection animation="fade-in" delay={400}>
          <p className="text-center text-sm text-gray-400 mt-10">
            We partner with world-class technology vendors to deliver
            best-in-class solutions.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
