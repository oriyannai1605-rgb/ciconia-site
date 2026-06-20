"use client";

const team = [
  {
    name: "Moshe Cohen (Col. Res.)",
    role: "Co-Founder, CEO",
    initials: "MC",
  },
  {
    name: "Dr. Ilan Zohar (Lt. Col. Res.)",
    role: "CTO, Co-Founder",
    initials: "IZ",
  },
  {
    name: "Gil Yannai (Lt. Col. Res.)",
    role: "Co-Founder, VP",
    initials: "GY",
  },
  {
    name: "Doug Coates",
    role: "Director, Ciconia North America",
    initials: "DC",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-28 bg-gradient-to-b from-navy-900 to-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-electric-500" />
          <span className="text-electric-400 text-xs font-semibold tracking-widest uppercase">Leadership</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          The Team Behind{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-accent">
            Ciconia
          </span>
        </h2>
        <p className="text-slate-400 text-lg mb-16 max-w-2xl">
          Battle-tested expertise from aerospace, defence, and aviation — building the systems that keep skies safe.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-white/4 border border-white/8 hover:border-electric-500/40 hover:bg-white/6 transition-all duration-300 group text-center"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-500/20 to-accent/10 border border-electric-500/30 flex items-center justify-center mx-auto mb-5 group-hover:border-electric-500/60 transition-colors">
                <span className="text-electric-400 font-bold text-lg">{member.initials}</span>
              </div>
              <h3 className="text-white font-semibold text-base leading-snug mb-2">{member.name}</h3>
              <p className="text-electric-400 text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-20 pt-12 border-t border-white/8">
          <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8 font-medium">
            Field-proven across platforms worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Helicopters", "Light Aircraft", "UAS Platforms", "Drones", "Defence"].map((label) => (
              <div
                key={label}
                className="px-5 py-2 rounded-full border border-white/10 text-slate-400 text-sm font-medium hover:border-electric-500/40 hover:text-electric-400 transition-all"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
