"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Central glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(14,165,233,0.11),transparent)]" />

      {/* Radar rings — sized responsively so they never overflow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-0 h-0">
          {[160, 280, 400, 520].map((size, i) => (
            <span
              key={i}
              className="absolute rounded-full border border-sky-500/15"
              style={{
                width: size,
                height: size,
                top: -size / 2,
                left: -size / 2,
              }}
            />
          ))}

          {/* Sweep line */}
          <div
            style={{
              position: "absolute",
              width: "1px",
              height: "260px",
              bottom: "0",
              left: "0",
              background: "linear-gradient(to top, rgba(14,165,233,0.65), transparent)",
              transformOrigin: "50% 100%",
              animation: "radarSweep 6s linear infinite",
            }}
          />

          {/* Center dot */}
          <div
            className="absolute rounded-full bg-[#00d4ff]"
            style={{
              width: 10,
              height: 10,
              top: -5,
              left: -5,
              boxShadow: "0 0 14px 5px rgba(0,212,255,0.45)",
            }}
          />
        </div>
      </div>

      {/* Aircraft blips */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "37%", left: "60%", delay: "0s", size: 7 },
          { top: "45%", left: "33%", delay: "1.8s", size: 6 },
          { top: "54%", left: "64%", delay: "3.2s", size: 5 },
        ].map((b, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-sky-400"
            style={{
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
              animation: "pulse 2.8s ease-in-out infinite",
              animationDelay: b.delay,
              boxShadow: "0 0 8px 3px rgba(14,165,233,0.55)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center pt-24 pb-20">

        {/* Eyebrow badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 mb-7 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-sky-400 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
            Advanced Airspace Safety Technology
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-100 text-[2.4rem] leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-5 sm:mb-6">
          Pioneering Airborne
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-[#00d4ff]">
            Collision Avoidance
          </span>
          <br />
          for Safer Skies
        </h1>

        {/* Sub */}
        <p className="animate-fade-up delay-200 text-base sm:text-lg md:text-xl text-slate-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-9 sm:mb-10">
          Field-proven systems delivering superb performance — fewer false alarms,
          optimized airspace utilization, and unparalleled worldwide success.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="#product"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:scale-95"
          >
            Explore the Technology
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 hover:border-sky-400/50 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5 active:scale-95"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
        <span className="text-slate-400 text-[10px] tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-slate-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
