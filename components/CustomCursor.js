"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CURSOR_SIZE = 10; // inner dot
const RING_SIZE = 36; // outer ring

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // cursor position (dot follows mouse exactly)
  const dotPos = useRef({ x: -100, y: -100 });
  // ring position (lags behind for smoothness)
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  const [cursorState, setCursorState] = useState("default");
  // states: "default" | "hover" | "cta" | "text" | "hidden"

  // ── Smooth ring follow ──
  const animateRing = useCallback(() => {
    const ease = 0.12;
    ringPos.current.x += (dotPos.current.x - ringPos.current.x) * ease;
    ringPos.current.y += (dotPos.current.y - ringPos.current.y) * ease;

    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${ringPos.current.x - RING_SIZE / 2}px, ${ringPos.current.y - RING_SIZE / 2}px)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${dotPos.current.x - CURSOR_SIZE / 2}px, ${dotPos.current.y - CURSOR_SIZE / 2}px)`;
    }

    rafRef.current = requestAnimationFrame(animateRing);
  }, []);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Hide default cursor globally
    document.documentElement.style.cursor = "none";

    const onMouseMove = (e) => {
      dotPos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseEnter = () => setCursorState((s) => s);
    const onMouseLeave = () => setCursorState("hidden");

    // Detect what element cursor is over
    const onPointerOver = (e) => {
      const target = e.target;

      // CTA buttons
      if (
        target.closest("a[href='#contact']") ||
        target.closest("button[type='submit']") ||
        target.closest(".cursor-cta")
      ) {
        setCursorState("cta");
        return;
      }

      // Any clickable link or button
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("select") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setCursorState("hover");
        return;
      }

      // Text content
      if (
        target.closest("p") ||
        target.closest("h1") ||
        target.closest("h2") ||
        target.closest("h3") ||
        target.closest("label") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setCursorState("text");
        return;
      }

      setCursorState("default");
    };

    rafRef.current = requestAnimationFrame(animateRing);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onPointerOver);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.documentElement.style.cursor = "";
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onPointerOver);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [animateRing]);

  // ── Per-state styles ──
  const styles = {
    default: {
      dot: {
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        background: "#0A1F3F",
        opacity: 1,
      },
      ring: {
        width: RING_SIZE,
        height: RING_SIZE,
        border: "1.5px solid rgba(10,31,63,0.35)",
        background: "transparent",
        scale: "1",
        opacity: 1,
      },
    },

    hover: {
      dot: {
        width: 6,
        height: 6,
        background: "#E8531E",
        opacity: 1,
      },
      ring: {
        width: 44,
        height: 44,
        border: "1.5px solid rgba(232,83,30,0.5)",
        background: "rgba(232,83,30,0.06)",
        scale: "1",
        opacity: 1,
      },
    },

    cta: {
      dot: {
        width: 4,
        height: 4,
        background: "#ffffff",
        opacity: 1,
      },
      ring: {
        width: 56,
        height: 56,
        border: "none",
        background: "rgba(232,83,30,0.25)",
        scale: "1",
        opacity: 1,
      },
    },

    text: {
      dot: {
        width: 2,
        height: 24,
        background: "#0A1F3F",
        opacity: 0.7,
        borderRadius: "1px",
      },
      ring: {
        width: RING_SIZE,
        height: RING_SIZE,
        border: "1px solid rgba(10,31,63,0.15)",
        background: "transparent",
        scale: "0.6",
        opacity: 0,
      },
    },

    hidden: {
      dot: {
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        background: "#0A1F3F",
        opacity: 0,
      },
      ring: {
        width: RING_SIZE,
        height: RING_SIZE,
        border: "1.5px solid rgba(10,31,63,0.35)",
        background: "transparent",
        scale: "1",
        opacity: 0,
      },
    },
  };

  const s = styles[cursorState] || styles.default;

  const baseStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 99999,
    willChange: "transform",
  };

  const transition =
    "width 0.2s ease, height 0.2s ease, background 0.2s ease, opacity 0.2s ease, border-radius 0.2s ease, border 0.2s ease";

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          ...baseStyle,
          width: s.ring.width,
          height: s.ring.height,
          borderRadius: "9999px",
          border: s.ring.border,
          background: s.ring.background,
          opacity: s.ring.opacity,
          transition,
          backdropFilter: cursorState === "cta" ? "blur(2px)" : "none",
        }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          ...baseStyle,
          width: s.dot.width,
          height: s.dot.height,
          borderRadius: cursorState === "text" ? "1px" : "9999px",
          background: s.dot.background,
          opacity: s.dot.opacity,
          transition,
        }}
      />
    </>
  );
}
