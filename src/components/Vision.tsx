"use client";

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: "Unified Airspace",
    description: "To enable all flying platforms to share airspace safely",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Live Collision Avoidance",
    description: "To provide real-time mid-air conflict management and collision avoidance",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Scalable Aerial Mobility",
    description: "Improve airspace utilization for up-scaled safe aerial transportation",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="relative py-28 bg-gradient-to-b from-navy-950 to-navy-900 overflow-hidden">
      {/* Background decorative arc */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="300" cy="300" r="250" stroke="#0ea5e9" strokeWidth="1" />
          <circle cx="300" cy="300" r="180" stroke="#0ea5e9" strokeWidth="1" />
          <circle cx="300" cy="300" r="110" stroke="#0ea5e9" strokeWidth="1" />
          <line x1="300" y1="50" x2="300" y2="550" stroke="#0ea5e9" strokeWidth="0.5" />
          <line x1="50" y1="300" x2="550" y2="300" stroke="#0ea5e9" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-electric-500" />
          <span className="text-electric-400 text-xs font-semibold tracking-widest uppercase">Our Vision</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
          Unlocking the Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-accent">
            Safer, Smarter Skies
          </span>
        </h2>
        <p className="text-slate-400 text-lg mb-16 max-w-2xl">
          Three core pillars guide everything we build at Ciconia.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl bg-white/4 border border-white/8 hover:border-electric-500/40 hover:bg-white/6 transition-all duration-300 group overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/0 to-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Number */}
              <div className="absolute top-6 right-6 text-7xl font-black text-white/4 select-none leading-none">
                {i + 1}
              </div>

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 mb-6 group-hover:bg-electric-500/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
