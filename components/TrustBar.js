"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const alliances = [
  { name: "Palo Alto Networks", logo: "/logos/paloalto.jpeg" },
  { name: "Forescout", logo: "/logos/forescout.png" },
  { name: "Ativion", logo: "/logos/ativion.png" },
  { name: "NetApp", logo: "/logos/netapp.jpeg", scale: "scale-110" }, // Slight boost
  { name: "F5", logo: "/logos/f5.png", scale: "scale-[1.65]" }, // Significant boost for the circle
  { name: "ContentKeeper", logo: "/logos/contentkeeper.png" },
  { name: "Cavisson", logo: "/logos/cavisson.png" },
  { name: "Infoblox", logo: "/logos/infoblox.png" },
  { name: "Netop", logo: "/logos/netop.jpeg" },
];

function LogoTile({ alliance, delay = 0 }) {
  return (
    <AnimatedSection animation="fade-up" delay={delay} className="h-full">
      <div
        className="group relative flex items-center justify-center rounded-2xl transition-all duration-300 ease-out cursor-default 
                   h-[100px] md:h-[130px] px-6 py-4 w-full"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(10,31,63,0.07)",
          boxShadow: "0 1px 8px rgba(10,31,63,0.05)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03) translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 12px 36px rgba(10,31,63,0.11), 0 0 0 1.5px rgba(232,83,30,0.2)";
          e.currentTarget.style.background = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.boxShadow = "0 1px 8px rgba(10,31,63,0.05)";
          e.currentTarget.style.background = "rgba(255,255,255,0.9)";
        }}
      >
        {/* Inner container with relative positioning for Next.js Image 'fill' */}
        <div className="relative w-full h-full max-h-[45px] md:max-h-[55px]">
          <Image
            src={alliance.logo}
            alt={`${alliance.name} logo`}
            fill
            sizes="(max-width: 768px) 40vw, 20vw"
            className={`object-contain transition-transform duration-300 ${alliance.scale || "scale-100"}`}
            loading="lazy"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function TrustBar() {
  return (
    <section
      id="partners"
      className="py-20 lg:py-28 relative overflow-hidden bg-white border-b border-gray-100"
    >
      {/* Subtle background radial */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(232,83,30,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-8 bg-brand-orange/40" />
              <span className="text-brand-orange text-xs font-semibold tracking-[0.25em] uppercase">
                Our Alliances
              </span>
              <div className="h-px w-8 bg-brand-orange/40" />
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-brand-navy">
              Backed by Global Technology Leaders
            </h2>
          </div>
        </AnimatedSection>

        {/* Standardized Responsive Grid:
          - Mobile: 2 columns (per your request)
          - Tablet: 3 columns
          - Desktop: 5 columns (for row 1) and 4 columns (for row 2)
        */}
        <div className="flex flex-col gap-4">
          {/* Top Row logic for Desktop: first 5 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {alliances.slice(0, 5).map((a, i) => (
              <LogoTile key={a.name} alliance={a} delay={i * 50} />
            ))}

            {/* Tablet/Mobile continue here automatically */}
            <div className="contents lg:hidden">
              {alliances.slice(5).map((a, i) => (
                <LogoTile key={a.name} alliance={a} delay={(i + 5) * 50} />
              ))}
            </div>
          </div>

          {/* Bottom Row logic for Desktop: remaining 4 */}
          <div className="hidden lg:grid grid-cols-4 gap-4 max-w-[900px] mx-auto w-full">
            {alliances.slice(5).map((a, i) => (
              <LogoTile key={a.name} alliance={a} delay={(i + 5) * 50} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
