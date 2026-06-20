"use client";

const stats = [
  { value: "1000s", label: "Mid-air dangerous events" },
  { value: "100s", label: "Near misses recorded" },
  { value: "10s", label: "Aircraft collisions" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-navy-950 overflow-hidden">
      {/* Top gradient fade from hero */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy-950 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-electric-500" />
          <span className="text-electric-400 text-xs font-semibold tracking-widest uppercase">About Ciconia</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Keep the skies safer with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-accent">
                Ciconia's advanced collision avoidance systems.
              </span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              We're revolutionizing aerial safety with our unique algorithms, designed to prevent
              accidents while enabling multi-user aerial usage. Our systems deliver superb
              performance, meaning fewer false alarms and optimized airspace utilization.
              Rigorously tested and field-proven, our systems have a track record of unparalleled
              world-wide success.
            </p>

            {/* Stat callout */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
              <svg className="w-5 h-5 text-electric-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-slate-200 text-sm font-medium">All could have been avoided</span>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white/4 border border-white/8 hover:border-electric-500/30 hover:bg-white/6 transition-all duration-300 group"
              >
                <div className="text-5xl font-bold text-electric-400 tabular-nums group-hover:text-accent transition-colors">
                  {s.value}
                </div>
                <div>
                  <p className="text-slate-200 font-medium text-lg">{s.label}</p>
                  <p className="text-slate-500 text-sm mt-0.5">documented globally</p>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-gradient-to-br from-electric-500/10 to-accent/5 border border-electric-500/20 text-center">
              <p className="text-2xl font-bold text-white mb-1">All could have been avoided</p>
              <p className="text-electric-400 text-sm font-medium">with the right technology in place</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
