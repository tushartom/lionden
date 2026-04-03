"use client";

import useInView from "@/hooks/useInView";

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const baseClasses = "transition-all ease-out";

  const durationClass = delay > 0 ? `duration-700` : "duration-700";

  const hiddenStyles = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-in": "opacity-0",
    "slide-left": "opacity-0 -translate-x-8",
    "slide-right": "opacity-0 translate-x-8",
    "scale-up": "opacity-0 scale-95",
  };

  const visibleStyles = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "slide-left": "opacity-100 translate-x-0",
    "slide-right": "opacity-100 translate-x-0",
    "scale-up": "opacity-100 scale-100",
  };

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${durationClass} ${
        isInView ? visibleStyles[animation] : hiddenStyles[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
