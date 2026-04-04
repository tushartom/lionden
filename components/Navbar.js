"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Partners", href: "#partners" },
  { label: "Case Studies", href: "#case-study" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* =====================
          NAVBAR BAR
      ===================== */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled
            ? "rgba(247,248,250,0.92)"
            : "rgba(247,248,250,0.85)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: isScrolled
            ? "1px solid rgba(10,31,63,0.08)"
            : "1px solid transparent",
          boxShadow: isScrolled ? "0 1px 24px rgba(10,31,63,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">
            {/* ── Logo ── */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex-shrink-0"
              aria-label="Lionden Technologies — Home"
            >
              <Logo variant="dark" size="default" />
            </a>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
                  style={{ color: "rgba(10,31,63,0.55)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#0A1F3F";
                    e.currentTarget.style.background = "rgba(10,31,63,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(10,31,63,0.55)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Secondary: subtle text link */}
              {/* <a
                href="tel:+919810209261"
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(10,31,63,0.45)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0A1F3F")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(10,31,63,0.45)")
                }
              >
                +91-9810209261
              </a> */}

              {/* Divider */}
              {/* <div
                className="h-5 w-px"
                style={{ background: "rgba(10,31,63,0.12)" }}
              /> */}

              {/* Primary CTA */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="text-sm font-semibold rounded-xl transition-all duration-200"
                style={{
                  padding: "10px 22px",
                  background: "#0A1F3F",
                  color: "#fff",
                  boxShadow: "0 2px 12px rgba(10,31,63,0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E8531E";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(232,83,30,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0A1F3F";
                  e.currentTarget.style.boxShadow =
                    "0 2px 12px rgba(10,31,63,0.15)";
                }}
              >
                Get a Free Assessment
              </a>
            </div>

            {/* ── Mobile: phone + hamburger ── */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href="tel:+919810209261"
                className="hidden sm:flex text-xs font-medium"
                style={{ color: "rgba(10,31,63,0.50)" }}
              >
                +91-9810209261
              </a>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{
                  background: isMobileOpen
                    ? "rgba(10,31,63,0.08)"
                    : "transparent",
                  color: "#0A1F3F",
                }}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* =====================
          MOBILE MENU
      ===================== */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(10,31,63,0.25)",
          backdropFilter: "blur(4px)",
        }}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 lg:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          width: "min(360px, 90vw)",
          background: "#FFFFFF",
          boxShadow: "-8px 0 40px rgba(10,31,63,0.12)",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid rgba(10,31,63,0.07)" }}
        >
          {/* Logo inside drawer */}
          <Logo variant="dark" size="default" />

          <button
            onClick={() => setIsMobileOpen(false)}
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(10,31,63,0.05)", color: "#0A1F3F" }}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto py-4 px-4">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="flex items-center justify-between w-full rounded-xl px-4 py-4 transition-all duration-150 group"
              style={{
                color: "#0A1F3F",
                animationDelay: `${i * 40}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(10,31,63,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span className="font-medium text-[15px]">{link.label}</span>
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(10,31,63,0.06)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6H9.5M9.5 6L7 3.5M9.5 6L7 8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Drawer footer */}
        <div
          className="px-5 py-6"
          style={{ borderTop: "1px solid rgba(10,31,63,0.07)" }}
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="w-full flex items-center justify-center gap-2 font-semibold rounded-xl mb-3 transition-all duration-200"
            style={{
              padding: "14px 20px",
              background: "#0A1F3F",
              color: "#fff",
              fontSize: "15px",
              boxShadow: "0 4px 20px rgba(10,31,63,0.18)",
            }}
          >
            Get a Free Assessment
          </a>

          {/* Contact info */}
          <div className="mt-4 space-y-2">
            <a
              href="tel:+919810209261"
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(10,31,63,0.50)" }}
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                style={{ background: "rgba(10,31,63,0.05)" }}
              >
                📞
              </span>
              +91-9810209261
            </a>
            <a
              href="mailto:pankaj@lionden.in"
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(10,31,63,0.50)" }}
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                style={{ background: "rgba(10,31,63,0.05)" }}
              >
                ✉️
              </span>
              pankaj@lionden.in
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
