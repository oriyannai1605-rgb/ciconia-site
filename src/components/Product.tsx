"use client";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Lightweight",
    description: "Small proven anti-collision system with onboard piloting cues",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "Compatible",
    description: "Helicopters, light aircraft, UAS and drone compatible",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "One size fits all",
    description: "Flexible integration variability options",
  },
];

export default function Product() {
  return (
    <section id="product" className="relative py-28 bg-navy-900 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(14,165,233,0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/0 via-navy-900/50 to-navy-900" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-electric-500" />
          <span className="text-electric-400 text-xs font-semibold tracking-widest uppercase">Our Product</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              An anti-collision system built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-accent">
                every aircraft
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Our system is compact, proven, and ready for integration across the full
              spectrum of modern aviation platforms — from commercial helicopters to
              autonomous drones.
            </p>

            {/* Feature cards */}
            <div className="space-y-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-6 rounded-xl bg-white/4 border border-white/8 hover:border-electric-500/30 hover:bg-white/6 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 shrink-0 group-hover:bg-electric-500/20 transition-colors">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual display panel */}
          <div className="relative">
            <div className="rounded-2xl bg-navy-950 border border-white/10 overflow-hidden shadow-2xl">
              {/* Mock HUD / dashboard header */}
              <div className="flex items-center justify-between px-5 py-3 bg-navy-800/60 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">System Active</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">CICONIA ACAS v4.1</span>
              </div>

              {/* Radar display */}
              <div className="relative h-72 flex items-center justify-center bg-navy-950">
                <svg viewBox="0 0 300 300" className="w-64 h-64" fill="none">
                  {/* Grid rings */}
                  {[40, 80, 120].map((r) => (
                    <circle key={r} cx="150" cy="150" r={r} stroke="#0ea5e9" strokeWidth="0.5" opacity="0.25" />
                  ))}
                  {/* Crosshairs */}
                  <line x1="150" y1="30" x2="150" y2="270" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.2" />
                  <line x1="30" y1="150" x2="270" y2="150" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.2" />
                  {/* Sweep */}
                  <line
                    x1="150" y1="150" x2="150" y2="30"
                    stroke="url(#sweep-grad)" strokeWidth="1.5"
                    style={{ transformOrigin: "150px 150px", animation: "radarSweep 4s linear infinite" }}
                  />
                  <defs>
                    <linearGradient id="sweep-grad" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Aircraft blips */}
                  <circle cx="185" cy="110" r="4" fill="#00d4ff" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="115" cy="175" r="3" fill="#0ea5e9" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="190" r="3" fill="#38bdf8" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.1;0.7" dur="3s" repeatCount="indefinite" />
                  </circle>
                  {/* Center */}
                  <circle cx="150" cy="150" r="3" fill="#00d4ff" />
                  <circle cx="150" cy="150" r="6" stroke="#00d4ff" strokeWidth="1" opacity="0.4" />
                </svg>
              </div>

              {/* Status bar */}
              <div className="grid grid-cols-3 divide-x divide-white/8 border-t border-white/8">
                {[
                  { label: "Threats", value: "0" },
                  { label: "Range", value: "5 NM" },
                  { label: "Status", value: "CLEAR" },
                ].map((s) => (
                  <div key={s.label} className="py-3 px-4 text-center">
                    <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">{s.label}</div>
                    <div className="text-electric-400 font-mono font-semibold text-sm">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
