"use client";

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: "Unified Airspace",
    description: "To enable all flying platforms to share airspace safely",
    num: "01",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Live Collision Avoidance",
    description: "To provide real-time mid-air conflict management and collision avoidance",
    num: "02",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Scalable Aerial Mobility",
    description: "Improve airspace utilization for up-scaled safe aerial transportation",
    num: "03",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#020818] to-[#040f2a] overflow-hidden">

      {/* Decorative radar graphic — only visible on large screens */}
      <div className="hidden lg:block absolute -right-40 top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 520 520" fill="none">
          <circle cx="260" cy="260" r="230" stroke="#0ea5e9" strokeWidth="1" />
          <circle cx="260" cy="260" r="165" stroke="#0ea5e9" strokeWidth="1" />
          <circle cx="260" cy="260" r="100" stroke="#0ea5e9" strokeWidth="1" />
          <line x1="260" y1="30" x2="260" y2="490" stroke="#0ea5e9" strokeWidth="0.5" />
          <line x1="30" y1="260" x2="490" y2="260" stroke="#0ea5e9" strokeWidth="0.5" />
          <line x1="97" y1="97" x2="423" y2="423" stroke="#0ea5e9" strokeWidth="0.5" />
          <line x1="423" y1="97" x2="97" y2="423" stroke="#0ea5e9" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-sky-500" />
          <span className="text-sky-400 text-[11px] font-semibold tracking-[0.18em] uppercase">Our Vision</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-3 max-w-3xl">
          Unlocking the Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-[#00d4ff]">
            Safer, Smarter Skies
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mb-10 sm:mb-14 max-w-xl">
          Three core pillars guide everything we build at Ciconia.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:border-sky-500/40 hover:bg-white/[0.06] transition-all duration-300 group overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              {/* Large background number */}
              <div className="absolute top-4 right-5 text-6xl sm:text-7xl font-black text-white/[0.04] select-none leading-none">
                {p.num}
              </div>

              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5 sm:mb-6 group-hover:bg-sky-500/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
