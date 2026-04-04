"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Send,
  Lock,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const serviceOptions = [
  "Information Security",
  "Performance Optimization",
  "Advisory & Managed Services",
  "Data Storage & Management",
  "General Inquiry",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call — replace with your actual form handler
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Info */}
          <AnimatedSection animation="slide-left">
            <div>
              <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
                Get In Touch
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-6 leading-tight">
                Let&apos;s Build the Future{" "}
                <span className="text-brand-orange">Together</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
                Whether you need a security assessment, network optimization, or
                a complete IT transformation — our experts are ready to help.
                Reach out for a no-obligation consultation.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <a
                  href="tel:+919810209261"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                    <Phone className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      Phone
                    </div>
                    <div className="text-white font-medium group-hover:text-brand-orange transition-colors">
                      +91-9810209261
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:pankaj@lionden.in"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                    <Mail className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      Email
                    </div>
                    <div className="text-white font-medium group-hover:text-brand-orange transition-colors">
                      pankaj@lionden.in
                    </div>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/EzZq8u1pv7RX5KkU7"
                  className="flex items-center gap-4 group"
                  target="_blank"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      Address
                    </div>
                    <div className="text-white font-medium group-hover:text-brand-orange transition-colors">
                      #350, 1st Floor, 3rd Block Ganga Shopping Complex, <br />
                      Sector 29 Noida, Uttar Pradesh 201301
                    </div>
                  </div>
                </a>

               
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10">
              <h3 className="font-heading font-bold text-2xl text-white mb-8">
                Request a Free Consultation
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-400">
                    We&apos;ve received your message and will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-1.5"
                      >
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Service */}
                  <div className="relative">
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      How can we help?
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white appearance-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all cursor-pointer"
                      >
                        <option value="" className="bg-brand-navy">
                          Select a service
                        </option>
                        {serviceOptions.map((opt) => (
                          <option
                            key={opt}
                            value={opt}
                            className="bg-brand-navy"
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all resize-none"
                      placeholder="Tell us about your project or challenge..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover disabled:bg-brand-orange/50 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/25 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
                    <Lock className="w-3 h-3" />
                    Your information is secure. We never share your data with
                    third parties.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
