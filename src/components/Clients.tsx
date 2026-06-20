"use client";

const team = [
  { name: "Moshe Cohen (Col. Res.)", role: "Co-Founder, CEO",              initials: "MC" },
  { name: "Dr. Ilan Zohar (Lt. Col. Res.)", role: "CTO, Co-Founder",       initials: "IZ" },
  { name: "Gil Yannai (Lt. Col. Res.)", role: "Co-Founder, VP",            initials: "GY" },
  { name: "Doug Coates", role: "Director, Ciconia North America",           initials: "DC" },
];

const platforms = ["Helicopters", "Light Aircraft", "UAS Platforms", "Drones", "Defence"];

export default function Clients() {
  return (
    <section id="clients" className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#040f2a] to-[#020818] overflow-hidden">

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-sky-500" />
          <span className="text-sky-400 text-[11px] font-semibold tracking-[0.18em] uppercase">Leadership</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-3">
          The Team Behind{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-[#00d4ff]">
            Ciconia
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mb-10 sm:mb-14 max-w-2xl">
          Battle-tested expertise from aerospace, defence, and aviation — building the systems that keep skies safe.
        </p>

        {/* Team grid — 2 cols on mobile, 4 on large */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:border-sky-500/40 hover:bg-white/[0.06] transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-sky-500/20 to-[#00d4ff]/10 border border-sky-500/30 flex items-center justify-center mx-auto mb-4 group-hover:border-sky-500/60 transition-colors">
                <span className="text-sky-400 font-bold text-base sm:text-lg">{member.initials}</span>
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-base leading-snug mb-1.5">{member.name}</h3>
              <p className="text-sky-400 text-xs sm:text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 sm:mt-20 pt-10 sm:pt-12 border-t border-white/[0.06]">
          <p className="text-center text-slate-500 text-[11px] sm:text-xs uppercase tracking-widest mb-6 sm:mb-8 font-medium">
            Field-proven across platforms worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {platforms.map((label) => (
              <div
                key={label}
                className="px-4 sm:px-5 py-2 rounded-full border border-white/10 text-slate-400 text-xs sm:text-sm font-medium hover:border-sky-500/40 hover:text-sky-400 transition-all"
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
