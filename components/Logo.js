"use client";

export default function Logo({ variant = "dark", size = "default" }) {
  // variant: "dark" (for light backgrounds) | "light" (for dark backgrounds)
  // size: "default" | "sm" | "lg"

  const sizes = {
    sm: { icon: 32, text: 14, sub: 8 },
    default: { icon: 38, text: 16, sub: 10 },
    lg: { icon: 46, text: 19, sub: 10 },
  };

  const s = sizes[size] || sizes.default;

  const colors = {
    dark: {
      name: "#0A1F3F",
      sub: "rgba(10,31,63,0.40)",
    },
    light: {
      name: "#FFFFFF",
      sub: "rgba(255,255,255,0.45)",
    },
  };

  const c = colors[variant] || colors.dark;

  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Icon */}
      <div
        style={{ width: s.icon, height: s.icon }}
        className="relative flex-shrink-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Lionden Technologies logo"
          width={s.icon}
          height={s.icon}
          style={{
            width: s.icon,
            height: s.icon,
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none gap-[3px]">
        <span
          className="font-heading font-semibold tracking-tight"
          style={{
            fontSize: s.text,
            color: c.name,
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}
        >
          Lionden Technologies
        </span>
        <span
          className="font-sans font-semibold tracking-wide uppercase"
          style={{
            fontSize: s.sub,
            color: c.sub,
            letterSpacing: "0.18em",
            lineHeight: 1,
          }}
        >
          Pvt. Ltd.
        </span>
      </div>
    </div>
  );
}
