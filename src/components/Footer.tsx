export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#020818] border-t border-white/[0.06] py-8 sm:py-10 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
            <circle cx="18" cy="18" r="15" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.35" />
            <circle cx="18" cy="18" r="8.5" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.55" />
            <circle cx="18" cy="18" r="2.5" fill="#00d4ff" />
          </svg>
          <span className="text-white font-bold tracking-[0.18em] uppercase text-sm">Ciconia</span>
        </a>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {["Home", "About", "Vision", "Product", "Clients", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-slate-500 hover:text-slate-300 text-[11px] sm:text-xs uppercase tracking-widest transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-slate-600 text-[11px] sm:text-xs shrink-0">
          © {year} Ciconia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
