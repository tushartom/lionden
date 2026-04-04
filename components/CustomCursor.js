"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ── SVG cursor arrow (custom designed, not OS default) ──
const ArrowSVG = ({ color = "#0A1F3F", size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    {/* Arrow shape — sharp, custom designed */}
    <path
      d="M4 2L20 12L12 13.5L8.5 20.5L4 2Z"
      fill={color}
      stroke="white"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Shield SVG for CTA state ──
const ShieldSVG = ({ color = "#E8531E", size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <path
      d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z"
      fill={color}
      fillOpacity="0.15"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Rotating scan ring SVG ──
const ScanRing = ({ size = 48, color = "rgba(10,31,63,0.3)", spinning = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      display: "block",
      animation: spinning ? "cursorSpin 2s linear infinite" : "none",
    }}
  >
    {/* Dashed circle */}
    <circle
      cx="24"
      cy="24"
      r="20"
      stroke={color}
      strokeWidth="1.2"
      strokeDasharray="4 4"
      strokeLinecap="round"
    />
    {/* Corner marks — like a targeting reticle */}
    <path
      d="M24 4 L24 8"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M24 40 L24 44"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 24 L8 24"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M40 24 L44 24"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function CustomCursor() {
  const cursorRef   = useRef(null); // whole cursor wrapper
  const ringRef     = useRef(null); // the scan ring
  const arrowRef    = useRef(null); // the arrow

  const mousePos    = useRef({ x: -200, y: -200 });
  const ringPos     = useRef({ x: -200, y: -200 });
  const rafRef      = useRef(null);

  const [state, setState]     = useState("default");
  const [visible, setVisible] = useState(false);

  // states:
  // "default" — navy arrow + slow spin dashed ring
  // "hover"   — orange arrow + faster spin + ring turns orange
  // "cta"     — orange arrow + shield badge + pulsing ring
  // "text"    — arrow + no ring (just arrow)
  // "hidden"  — everything invisible

  // ── Smooth ring lag ──
  const animate = useCallback(() => {
    const ease = 0.10;
    ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
    ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Skip on touch devices
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches
    ) return;

    // Hide OS cursor
    document.documentElement.style.cursor = "none";

    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e) => {
      const t = e.target;

      // CTA — schedule / submit buttons
      if (
        t.closest("a[href='#contact']") ||
        t.closest("button[type='submit']") ||
        t.closest(".cta-primary") ||
        (t.closest("a") &&
          t.closest("a").textContent?.toLowerCase().includes("consultation"))
      ) {
        setState("cta");
        return;
      }

      // Any interactive element
      if (
        t.closest("a") ||
        t.closest("button") ||
        t.closest("select") ||
        t.closest("[role='button']") ||
        window.getComputedStyle(t).cursor === "pointer"
      ) {
        setState("hover");
        return;
      }

      // Text / input
      if (
        t.closest("input") ||
        t.closest("textarea") ||
        t.closest("p") ||
        t.closest("h1") ||
        t.closest("h2") ||
        t.closest("h3") ||
        t.closest("label")
      ) {
        setState("text");
        return;
      }

      setState("default");
    };

    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.style.cursor = "";
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [animate, visible]);

  // ── State-based config ──
  const config = {
    default: {
      arrowColor: "#0A1F3F",
      arrowSize: 22,
      ringColor: "rgba(10,31,63,0.25)",
      ringSize: 48,
      ringSpeed: "3s",
      showShield: false,
      ringOpacity: 1,
    },
    hover: {
      arrowColor: "#E8531E",
      arrowSize: 22,
      ringColor: "rgba(232,83,30,0.45)",
      ringSize: 52,
      ringSpeed: "1.2s",
      showShield: false,
      ringOpacity: 1,
    },
    cta: {
      arrowColor: "#E8531E",
      arrowSize: 22,
      ringColor: "rgba(232,83,30,0.55)",
      ringSize: 58,
      ringSpeed: "0.8s",
      showShield: true,
      ringOpacity: 1,
    },
    text: {
      arrowColor: "#0A1F3F",
      arrowSize: 20,
      ringColor: "transparent",
      ringSize: 48,
      ringSpeed: "3s",
      showShield: false,
      ringOpacity: 0,
    },
    hidden: {
      arrowColor: "#0A1F3F",
      arrowSize: 22,
      ringColor: "rgba(10,31,63,0.25)",
      ringSize: 48,
      ringSpeed: "3s",
      showShield: false,
      ringOpacity: 0,
    },
  };

  const c = config[state] || config.default;
  const isVisible = visible && state !== "hidden";

  const RING_OFFSET = c.ringSize / 2;

  return (
    <>
      {/* ── Global keyframes ── */}
      <style>{`
        @keyframes cursorSpin {
          from { rotate: 0deg; }
          to   { rotate: 360deg; }
        }

        @keyframes shieldPulse {
          0%, 100% { transform: scale(1);    opacity: 1;   }
          50%       { transform: scale(1.15); opacity: 0.8; }
        }

        @keyframes ringPulse {
          0%, 100% { opacity: 1;   }
          50%       { opacity: 0.5; }
        }
      `}</style>

      {/* ── Scan ring (lags behind arrow) ── */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform",
          // Center ring on cursor
          marginLeft: -RING_OFFSET,
          marginTop: -RING_OFFSET,
          opacity: isVisible ? c.ringOpacity : 0,
          transition:
            "opacity 0.3s ease, width 0.25s ease, height 0.25s ease",
          // CTA ring pulses
          animation:
            state === "cta" ? "ringPulse 1s ease-in-out infinite" : "none",
        }}
      >
        <ScanRing
          size={c.ringSize}
          color={c.ringColor}
          spinning={state !== "text"}
        />

        {/* ── Shield badge (CTA state only) ── */}
        {c.showShield && (
          <div
            style={{
              position: "absolute",
              bottom: -4,
              right: -4,
              background: "#fff",
              borderRadius: "9999px",
              padding: "3px",
              boxShadow: "0 2px 8px rgba(232,83,30,0.3)",
              animation: "shieldPulse 1s ease-in-out infinite",
            }}
          >
            <ShieldSVG color="#E8531E" size={14} />
          </div>
        )}
      </div>

      {/* ── Arrow cursor (follows mouse exactly) ── */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          // Offset so tip of arrow is at mouse point
          marginLeft: -2,
          marginTop: -2,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Arrow */}
        <div
          ref={arrowRef}
          style={{
            transition:
              "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)",
            transform:
              state === "hover" || state === "cta"
                ? "scale(1.1)"
                : "scale(1)",
          }}
        >
          <ArrowSVG
            color={c.arrowColor}
            size={c.arrowSize}
          />
        </div>
      </div>
    </>
  );
}