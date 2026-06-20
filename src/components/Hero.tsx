"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(14,165,233,0.12),transparent)]" />

      {/* Radar rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[180, 340, 500, 660].map((size, i) => (
          <span
            key={i}
            className="absolute rounded-full border border-electric-500/20"
            style={{
              width: size,
              height: size,
              top: -size / 2,
              left: -size / 2,
            }}
          />
        ))}

        {/* Radar sweep line */}
        <div
          className="absolute w-px origin-bottom"
          style={{
            height: 330,
            bottom: 0,
            left: 0,
            background: "linear-gradient(to top, rgba(14,165,233,0.7), transparent)",
            animation: "radarSweep 6s linear infinite",
            transformOrigin: "50% 100%",
          }}
        />
        {/* Center dot */}
        <div className="absolute w-3 h-3 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_4px_rgba(0,212,255,0.5)]" />
      </div>

      {/* Aircraft blip dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "38%", left: "58%", delay: "0s" },
          { top: "44%", left: "34%", delay: "1.5s" },
          { top: "52%", left: "63%", delay: "3s" },
        ].map((pos, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-electric-400"
            style={{
              top: pos.top,
              left: pos.left,
              animation: `pulse 2.5s ease-in-out infinite`,
              animationDelay: pos.delay,
              boxShadow: "0 0 8px 2px rgba(14,165,233,0.6)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow label */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/40 bg-electric-500/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
          <span className="text-electric-400 text-xs font-semibold tracking-widest uppercase">
            Advanced Airspace Safety Technology
          </span>
        </div>

        <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Pioneering Airborne
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-accent">
            Collision Avoidance
          </span>
          <br />
          for Safer Skies
        </h1>

        <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Field-proven systems delivering superb performance — fewer false alarms,
          optimized airspace utilization, and unparalleled worldwide success.
        </p>

        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#product"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-electric-500 hover:bg-electric-400 text-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-electric-500/30 hover:-translate-y-0.5"
          >
            Explore the Technology
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-electric-400/60 text-white font-semibold text-base transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
