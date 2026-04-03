"use client";

import useCountUp from "@/hooks/useCountUp";

function StatItem({ end, suffix = "", prefix = "", label, duration = 2000 }) {
  const [ref, count] = useCountUp(end, duration);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-white/70 text-sm sm:text-base font-medium">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-brand-orange via-brand-orange-hover to-brand-orange relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <StatItem
            end={2016}
            label="Securing Enterprises"
            prefix=""
            suffix=""
            duration={2500}
          />
          <StatItem end={30} suffix="+" label="Years Combined Expertise" />
          <StatItem end={9} suffix="+" label="Global Technology Partners" />
          <StatItem end={100} suffix="%" label="Project Ownership" />
        </div>
      </div>
    </section>
  );
}
