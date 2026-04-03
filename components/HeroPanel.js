"use client";

import { Award, ShieldCheck, Users } from "lucide-react";
function StatBlock({
  icon: Icon,
  label,
  value,
  valueSuffix,
  accent = "orange",
}) {
  const accentStyles =
    accent === "cyan" ? "border-brand-cyan/60" : "border-brand-orange/60";

  const valueAccent =
    accent === "cyan" ? "text-brand-cyan" : "text-brand-orange";

  return (
    <div className="relative rounded-2xl px-6 py-6 bg-white/[0.04] border border-white/10">
      {/* left accent rule */}
      <div
        className={`absolute left-0 top-5 bottom-5 w-[3px] rounded-full ${accentStyles}`}
      />

      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Icon className={`w-5 h-5 ${valueAccent}`} />
        </div>

        <div className="min-w-0">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
            {label}
          </div>

          <div className="mt-2 flex items-baseline gap-2">
            <div className="font-mono font-bold text-3xl text-white leading-none">
              {value}
              {valueSuffix ? (
                <span className={`ml-1 ${valueAccent}`}>{valueSuffix}</span>
              ) : null}
            </div>
          </div>

          <div className="mt-2 text-sm text-white/55 leading-relaxed">
            {label === "Founded"
              ? "Delivering enterprise IT outcomes with accountability."
              : null}
            {label === "Expertise"
              ? "Cybersecurity, optimization & performance solutions."
              : null}
            {label === "Alliances"
              ? "Partnered with world-class technology vendors."
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroPanel() {
  return (
    <div className="relative h-full w-full rounded-[28px] overflow-hidden bg-brand-navy">
      {/* Subtle texture: dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Soft glows */}
      <div
        className="absolute -top-28 -right-28 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,194,255,0.14) 0%, transparent 60%)",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute -bottom-28 -left-28 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,83,30,0.12) 0%, transparent 60%)",
          filter: "blur(22px)",
        }}
      />

      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-7 sm:p-8 lg:p-10 h-full flex flex-col">
        {/* Panel header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-white/50">
              Proof of Capability
            </div>
            <div className="mt-2 text-white text-lg font-semibold">
              Built for enterprise-grade reliability
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              Secure by design
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Stats blocks */}
        <div className="grid gap-4">
          <StatBlock icon={Award} label="Founded" value="2016" accent="cyan" />
          <StatBlock
            icon={Users}
            label="Expertise"
            value="30"
            valueSuffix="+"
            accent="orange"
          />
          <StatBlock
            icon={ShieldCheck}
            label="Alliances"
            value="9"
            valueSuffix="+"
            accent="cyan"
          />
        </div>

        {/* Bottom subtle footer */}
        <div className="mt-auto pt-6">
          <div className="h-px bg-white/10 mb-5" />
          <p className="text-xs text-white/45 leading-relaxed">
            End-to-end ownership from discovery to defense — with minimal
            downtime and measurable outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
