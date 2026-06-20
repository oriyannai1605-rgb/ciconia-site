"use client";

const features = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Lightweight",
    description: "Small proven anti-collision system with onboard piloting cues",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "Compatible",
    description: "Helicopters, light aircraft, UAS and drone compatible",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "One size fits all",
    description: "Flexible integration variability options",
  },
];

const statusItems = [
  { label: "Threats", value: "0" },
  { label: "Range", value: "5 NM" },
  { label: "Status", value: "CLEAR" },
];

export default function Product() {
  return (
    <section id="product" className="relative py-16 sm:py-24 md:py-32 bg-[#040f2a] overflow-hidden">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,165,233,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040f2a]/0 via-[#040f2a]/60 to-[#040f2a]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-sky-500" />
          <span className="text-sky-400 text-[11px] font-semibold tracking-[0.18em] uppercase">Our Product</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left — text + feature cards */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-4 sm:mb-5">
              An anti-collision system built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-[#00d4ff]">
                every aircraft
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Our system is compact, proven, and ready for integration across the full
              spectrum of modern aviation platforms — from commercial helicopters to
              autonomous drones.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-sky-500/30 hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition-colors">
                    {f.icon}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — HUD panel */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <div className="rounded-2xl bg-[#020818] border border-white/10 overflow-hidden shadow-2xl shadow-black/40">

              {/* Header bar */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-white/[0.04] border-b border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] text-slate-400 font-mono uppercase tracking-widest">System Active</span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">CICONIA ACAS v4.1</span>
              </div>

              {/* Radar */}
              <div className="flex items-center justify-center py-6 sm:py-8 bg-[#020818]">
                <svg viewBox="0 0 280 280" className="w-52 h-52 sm:w-60 sm:h-60" fill="none">
                  {[38, 76, 114].map((r) => (
                    <circle key={r} cx="140" cy="140" r={r} stroke="#0ea5e9" strokeWidth="0.6" opacity="0.22" />
                  ))}
                  <line x1="140" y1="26" x2="140" y2="254" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.18" />
                  <line x1="26" y1="140" x2="254" y2="140" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.18" />
                  <line x1="140" y1="140" x2="140" y2="26"
                    stroke="url(#sg)" strokeWidth="1.5"
                    style={{ transformOrigin: "140px 140px", animation: "radarSweep 4s linear infinite" }}
                  />
                  <defs>
                    <linearGradient id="sg" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle cx="172" cy="104" r="4" fill="#00d4ff" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="108" cy="163" r="3.5" fill="#0ea5e9" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="188" cy="178" r="3" fill="#38bdf8" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.1;0.7" dur="3.1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="140" cy="140" r="3" fill="#00d4ff" />
                  <circle cx="140" cy="140" r="6" stroke="#00d4ff" strokeWidth="0.8" opacity="0.35" />
                </svg>
              </div>

              {/* Status strip */}
              <div className="grid grid-cols-3 divide-x divide-white/[0.07] border-t border-white/[0.07]">
                {statusItems.map((s) => (
                  <div key={s.label} className="py-3 px-2 text-center">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{s.label}</div>
                    <div className="text-sky-400 font-mono font-semibold text-xs sm:text-sm">{s.value}</div>
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
