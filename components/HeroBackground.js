"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Layer 1: Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #061529 0%, #0A1F3F 40%, #0F2D5E 70%, #0A1F3F 100%)",
        }}
      />

      {/* Layer 2: Color splashes */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(15,45,94,0.8) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(0,194,255,0.12) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 80%, rgba(232,83,30,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Layer 3: Glowing orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-float"
        style={{
          top: "-10%",
          right: "-5%",
          background:
            "radial-gradient(circle, rgba(0,194,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-float-delayed"
        style={{
          bottom: "-5%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(232,83,30,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full animate-pulse-glow"
        style={{
          top: "40%",
          left: "35%",
          background:
            "radial-gradient(circle, rgba(0,194,255,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Layer 4: Grid pattern */}
      <div
        className="absolute inset-0 opacity-40 animate-grid-move"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,194,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Layer 5: Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(6,21,41,0.7) 100%)",
        }}
      />

      {/* Layer 6: Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A1F3F] to-transparent" />

      {/* Layer 7: Top accent lines */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, rgba(0,194,255,0.5) 50%, transparent 90%)",
        }}
      />
      <div
        className="absolute top-[1px] left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 20%, rgba(232,83,30,0.3) 50%, transparent 80%)",
        }}
      />
    </div>
  );
}
