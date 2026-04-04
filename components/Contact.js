"use client";

import { useState, useCallback } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Lock,
  CheckCircle,
  ChevronDown,
  AlertCircle,
  Loader2,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
const SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
const MESSAGE_MAX = 500;

const SERVICE_OPTIONS = [
  "Information Security",
  "Performance Optimization",
  "Advisory & Managed Services",
  "Data Storage & Management",
  "General Inquiry",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

/* ─────────────────────────────────────────
   VALIDATION RULES
───────────────────────────────────────── */
function validateField(name, value) {
  switch (name) {
    case "name":
      if (!value.trim()) return "Full name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
      if (value.trim().length > 80) return "Name is too long.";
      return "";

    case "email":
      if (!value.trim()) return "Business email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Please enter a valid email address.";
      return "";

    case "phone":
      if (value && !/^[+]?[\d\s\-().]{7,20}$/.test(value))
        return "Please enter a valid phone number.";
      return "";

    case "company":
      if (!value.trim()) return "Company name is required.";
      if (value.trim().length < 2)
        return "Company name must be at least 2 characters.";
      return "";

    case "service":
      return ""; // optional

    case "message":
      if (value.length > MESSAGE_MAX)
        return `Message cannot exceed ${MESSAGE_MAX} characters.`;
      return "";

    default:
      return "";
  }
}

function validateAll(formData) {
  const errors = {};
  Object.keys(formData).forEach((key) => {
    const err = validateField(key, formData[key]);
    if (err) errors[key] = err;
  });
  return errors;
}

/* ─────────────────────────────────────────
   FIELD ERROR COMPONENT
───────────────────────────────────────── */
function FieldError({ message }) {
  if (!message) return null;
  return (
    <div className="flex items-center gap-1.5 mt-1.5">
      <AlertCircle
        className="w-3.5 h-3.5 flex-shrink-0"
        style={{ color: "#F87171" }}
      />
      <p className="text-xs" style={{ color: "#F87171" }}>
        {message}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   INPUT WRAPPER — handles border color
───────────────────────────────────────── */
function inputStyle(hasError, isFocused) {
  if (hasError)
    return {
      borderColor: "rgba(248,113,113,0.6)",
      background: "rgba(248,113,113,0.04)",
    };
  if (isFocused)
    return {
      borderColor: "rgba(0,194,255,0.5)",
      background: "rgba(0,194,255,0.03)",
    };
  return {
    borderColor: "rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
  };
}

/* ─────────────────────────────────────────
   CONTACT INFO LINK
───────────────────────────────────────── */
function ContactLink({ href, icon: Icon, label, value, target }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="flex items-start gap-4 group"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{ background: "rgba(232,83,30,0.10)" }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#E8531E")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(232,83,30,0.10)")
        }
      >
        <Icon
          className="w-5 h-5 transition-colors duration-300"
          style={{ color: "#E8531E" }}
        />
      </div>
      <div>
        <div
          className="text-[11px] uppercase tracking-wider mb-0.5"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          {label}
        </div>
        <div
          className="text-sm font-medium leading-relaxed transition-colors duration-200 group-hover:text-white"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          {value}
        </div>
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [focused, setFocused] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  /* ── Handlers ── */
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      // Enforce message character limit
      if (name === "message" && value.length > MESSAGE_MAX) return;

      setFormData((prev) => ({ ...prev, [name]: value }));

      // Live-validate only if field has been touched
      if (touched[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: validateField(name, value),
        }));
      }
    },
    [touched],
  );

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFocused((prev) => ({ ...prev, [name]: false }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  }, []);

  const handleFocus = useCallback((e) => {
    setFocused((prev) => ({ ...prev, [e.target.name]: true }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    // Mark all fields as touched
    const allTouched = Object.keys(INITIAL_FORM).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {},
    );
    setTouched(allTouched);

    // Validate all
    const allErrors = validateAll(formData);
    setErrors(allErrors);

    if (Object.values(allErrors).some(Boolean)) return;

    setIsSubmitting(true);

    try {
      // Google Sheets via fetch with no-cors
      // (Apps Script requires no-cors for web app calls)
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      // no-cors means we can't read the response
      // assume success if fetch didn't throw
      setIsSubmitted(true);
      setFormData(INITIAL_FORM);
      setErrors({});
      setTouched({});
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(
        "Something went wrong. Please try again or email us directly at pankaj@lionden.in",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const messageCharsLeft = MESSAGE_MAX - formData.message.length;

  /* ── Common input className ── */
  const inputBase =
    "w-full px-4 py-3 rounded-xl text-white text-sm font-medium outline-none transition-all duration-200 border";

  const placeholderStyle = { color: "rgba(255,255,255,0.25)" };

  /* ─────────────────────────────────────────
     RENDER
  ───────────────────────────────────────── */
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#0A1F3F" }}
    >
      {/* Subtle bg texture */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,194,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,83,30,0.07) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,194,255,0.06) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ── LEFT: Info ── */}
          <AnimatedSection animation="slide-left">
            <div>
              {/* Label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8" style={{ background: "#E8531E" }} />
                <span
                  className="text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ color: "#E8531E" }}
                >
                  Get In Touch
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-heading font-extrabold leading-tight mb-5"
                style={{
                  fontSize: "clamp(30px, 3.5vw, 48px)",
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                Let&apos;s Build the
                <br />
                Future <span style={{ color: "#E8531E" }}>Together</span>
              </h2>

              {/* Divider */}
              <div
                className="h-[2px] w-12 rounded-full mb-6"
                style={{ background: "#E8531E" }}
              />

              {/* Description */}
              <p
                className="text-base leading-relaxed mb-10 max-w-md"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Whether you need a security assessment, network optimization, or
                a complete IT transformation — our experts are ready to help.
                Reach out for a no-obligation consultation.
              </p>

              {/* Contact links */}
              <div className="space-y-6">
                <ContactLink
                  href="tel:+919810209261"
                  icon={Phone}
                  label="Phone"
                  value="+91-9810209261"
                />
                <ContactLink
                  href="mailto:pankaj@lionden.in"
                  icon={Mail}
                  label="Email"
                  value="pankaj@lionden.in"
                />
                <ContactLink
                  href="https://maps.app.goo.gl/EzZq8u1pv7RX5KkU7"
                  icon={MapPin}
                  label="Address"
                  target="_blank"
                  value={
                    <>
                      #350, 1st Floor, 3rd Block
                      <br />
                      Ganga Shopping Complex,
                      <br />
                      Sector 29 Noida, UP 201301
                    </>
                  }
                />
              </div>

              {/* Bottom note */}
              <div
                className="mt-10 pt-8 flex items-center gap-2 text-xs"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.30)",
                }}
              >
                <Lock className="w-3.5 h-3.5 flex-shrink-0" />
                Your information is confidential and never shared with third
                parties.
              </div>
            </div>
          </AnimatedSection>

          {/* ── RIGHT: Form ── */}
          <AnimatedSection animation="slide-right" delay={150}>
            <div
              className="rounded-3xl p-7 sm:p-9 border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
              }}
            >
              {/* Form heading */}
              <div className="mb-7">
                <h3
                  className="font-heading font-bold text-xl mb-1"
                  style={{ color: "#FFFFFF" }}
                >
                  Request a Free Consultation
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  We typically respond within a few hours.
                </p>
              </div>

              {/* ── SUCCESS STATE ── */}
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "rgba(34,197,94,0.15)" }}
                  >
                    <CheckCircle
                      className="w-8 h-8"
                      style={{ color: "#4ADE80" }}
                    />
                  </div>
                  <h4
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    Message Sent!
                  </h4>
                  <p
                    className="text-sm leading-relaxed max-w-xs"
                    style={{ color: "rgba(255,255,255,0.50)" }}
                  >
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-sm font-medium transition-colors duration-200"
                    style={{ color: "#E8531E" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FF6B35")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#E8531E")
                    }
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                /* ── FORM ── */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      Full Name <span style={{ color: "#E8531E" }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      placeholder="Your full name"
                      autoComplete="name"
                      className={inputBase}
                      style={{
                        ...inputStyle(
                          !!(touched.name && errors.name),
                          !!focused.name,
                        ),
                        ...placeholderStyle,
                      }}
                    />
                    <FieldError message={touched.name ? errors.name : ""} />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                      >
                        Business Email{" "}
                        <span style={{ color: "#E8531E" }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder="you@company.com"
                        autoComplete="email"
                        className={inputBase}
                        style={{
                          ...inputStyle(
                            !!(touched.email && errors.email),
                            !!focused.email,
                          ),
                          ...placeholderStyle,
                        }}
                      />
                      <FieldError message={touched.email ? errors.email : ""} />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder="+91-XXXXXXXXXX"
                        autoComplete="tel"
                        className={inputBase}
                        style={{
                          ...inputStyle(
                            !!(touched.phone && errors.phone),
                            !!focused.phone,
                          ),
                          ...placeholderStyle,
                        }}
                      />
                      <FieldError message={touched.phone ? errors.phone : ""} />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      Company Name <span style={{ color: "#E8531E" }}>*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      placeholder="Your company name"
                      autoComplete="organization"
                      className={inputBase}
                      style={{
                        ...inputStyle(
                          !!(touched.company && errors.company),
                          !!focused.company,
                        ),
                        ...placeholderStyle,
                      }}
                    />
                    <FieldError
                      message={touched.company ? errors.company : ""}
                    />
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      How can we help?
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        className={`${inputBase} appearance-none pr-10 cursor-pointer`}
                        style={{
                          ...inputStyle(false, !!focused.service),
                          color: formData.service
                            ? "#FFFFFF"
                            : "rgba(255,255,255,0.25)",
                        }}
                      >
                        <option value="" style={{ background: "#0A1F3F" }}>
                          Select a service
                        </option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option
                            key={opt}
                            value={opt}
                            style={{ background: "#0A1F3F", color: "#fff" }}
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                      >
                        Message
                      </label>
                      {/* Character counter */}
                      <span
                        className="text-xs tabular-nums transition-colors duration-200"
                        style={{
                          color:
                            messageCharsLeft < 50
                              ? "#F87171"
                              : messageCharsLeft < 150
                                ? "#FBBF24"
                                : "rgba(255,255,255,0.30)",
                        }}
                      >
                        {formData.message.length}/{MESSAGE_MAX}
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      rows={4}
                      placeholder="Tell us about your project or challenge..."
                      className={`${inputBase} resize-none`}
                      style={{
                        ...inputStyle(
                          !!(touched.message && errors.message),
                          !!focused.message,
                        ),
                        ...placeholderStyle,
                      }}
                    />
                    <div className="flex items-start justify-between mt-1">
                      <FieldError
                        message={touched.message ? errors.message : ""}
                      />
                      {messageCharsLeft < 50 && (
                        <span
                          className="text-xs ml-auto"
                          style={{ color: "#F87171" }}
                        >
                          {messageCharsLeft} left
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Submit error */}
                  {submitError && (
                    <div
                      className="flex items-start gap-2.5 rounded-xl px-4 py-3 text-sm"
                      style={{
                        background: "rgba(248,113,113,0.08)",
                        border: "1px solid rgba(248,113,113,0.20)",
                        color: "#F87171",
                      }}
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {submitError}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 font-semibold rounded-xl transition-all duration-200"
                    style={{
                      padding: "14px 24px",
                      background: isSubmitting
                        ? "rgba(232,83,30,0.6)"
                        : "#E8531E",
                      color: "#fff",
                      fontSize: "15px",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      boxShadow: isSubmitting
                        ? "none"
                        : "0 4px 20px rgba(232,83,30,0.25)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.background = "#D04A18";
                        e.currentTarget.style.boxShadow =
                          "0 8px 28px rgba(232,83,30,0.35)";
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.background = "#E8531E";
                        e.currentTarget.style.boxShadow =
                          "0 4px 20px rgba(232,83,30,0.25)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
