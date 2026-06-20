"use client";

const stats = [
  { value: "1000s", label: "Mid-air dangerous events", sub: "documented globally" },
  { value: "100s",  label: "Near misses recorded",     sub: "documented globally" },
  { value: "10s",   label: "Aircraft collisions",       sub: "documented globally" },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 bg-[#020818] overflow-hidden">
      {/* Subtle top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-sky-500" />
          <span className="text-sky-400 text-[11px] font-semibold tracking-[0.18em] uppercase">About Ciconia</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left — text */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-5 sm:mb-6">
              Keep the skies safer with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-[#00d4ff]">
                Ciconia's advanced collision avoidance systems.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-7 sm:mb-8">
              We're revolutionizing aerial safety with our unique algorithms, designed to prevent
              accidents while enabling multi-user aerial usage. Our systems deliver superb
              performance, meaning fewer false alarms and optimized airspace utilization.
              Rigorously tested and field-proven, our systems have a track record of unparalleled
              world-wide success.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
              <svg className="w-5 h-5 text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-slate-200 text-sm font-medium">All could have been avoided</span>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:border-sky-500/30 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-sky-400 tabular-nums shrink-0 group-hover:text-[#00d4ff] transition-colors">
                  {s.value}
                </div>
                <div>
                  <p className="text-slate-100 font-semibold text-base sm:text-lg leading-snug">{s.label}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{s.sub}</p>
                </div>
              </div>
            ))}

            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-[#00d4ff]/5 border border-sky-500/20 text-center">
              <p className="text-xl sm:text-2xl font-bold text-white mb-1">All could have been avoided</p>
              <p className="text-sky-400 text-sm font-medium">with the right technology in place</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
