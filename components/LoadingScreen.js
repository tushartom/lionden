"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // "loading" | "done" | "hidden"

  useEffect(() => {
    // Only show on first visit per session
    const hasVisited = sessionStorage.getItem("lionden_visited");
    if (hasVisited) {
      setPhase("hidden");
      return;
    }

    // Progress animation
    const steps = [
      { target: 30, delay: 0, duration: 300 },
      { target: 60, delay: 300, duration: 400 },
      { target: 85, delay: 700, duration: 300 },
      { target: 100, delay: 1000, duration: 250 },
    ];

    const timers = steps.map(({ target, delay, duration }) =>
      setTimeout(() => {
        const start = Date.now();
        const startVal = progress;

        const tick = () => {
          const elapsed = Date.now() - start;
          const pct = Math.min(elapsed / duration, 1);
          // ease out cubic
          const eased = 1 - Math.pow(1 - pct, 3);
          setProgress(Math.round(startVal + (target - startVal) * eased));
          if (pct < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      }, delay),
    );

    // Start exit after progress hits 100
    const exitTimer = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("lionden_visited", "1");

      // fully unmount after exit animation
      setTimeout(() => setPhase("hidden"), 700);
    }, 1350);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "#0A1F3F",
        opacity: phase === "done" ? 0 : 1,
        transform: phase === "done" ? "translateY(-8px)" : "translateY(0)",
        transition:
          phase === "done"
            ? "opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)"
            : "none",
        pointerEvents: phase === "done" ? "none" : "all",
      }}
    >
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,194,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(232,83,30,0.08) 0%, transparent 65%)",
          filter: "blur(20px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo mark */}
        <div
          className="mb-10"
          style={{
            animation: "loaderPulse 2s ease-in-out infinite",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Lionden Technologies"
            style={{
              width: 72,
              height: 72,
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Company name */}
        <div className="text-center mb-10">
          <p
            className="font-heading font-bold tracking-tight mb-1"
            style={{
              fontSize: "22px",
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            Lionden Technologies
          </p>
          <p
            className="text-xs tracking-[0.35em] uppercase"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Pvt. Ltd.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex flex-col items-center gap-3 w-[200px]">
          {/* Track */}
          <div
            className="w-full rounded-full overflow-hidden"
            style={{
              height: "2px",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            {/* Fill */}
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #E8531E, #FF6B35)",
                transition: "width 0.15s ease-out",
                boxShadow: "0 0 8px rgba(232,83,30,0.6)",
              }}
            />
          </div>

          {/* Percentage */}
          <span
            className="font-mono text-xs tabular-nums"
            style={{ color: "rgba(255,255,255,0.30)" }}
          >
            {progress}%
          </span>
        </div>

        {/* Tagline */}
        <p
          className="mt-10 text-xs tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.20)" }}
        >
          Collaborate · Innovate · Execute
        </p>
      </div>

      {/* Keyframe style */}
      <style>{`
        @keyframes loaderPulse {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50%       { opacity: 1;    transform: scale(1.04); }
        }
      `}</style>
    </div>
  );
}
