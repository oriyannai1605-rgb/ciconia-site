export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#020818] border-t border-white/[0.06] py-8 sm:py-10 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
            <circle cx="20" cy="20" r="17" stroke="#0ea5e9" strokeWidth="0.9" opacity="0.22" />
            <circle cx="20" cy="20" r="11" stroke="#0ea5e9" strokeWidth="0.9" opacity="0.30" />
            <circle cx="20" cy="20" r="1.4" fill="#00d4ff" opacity="0.7" />
            <path d="M20 14 L7 22 L11 23 L20 17 Z"  fill="#e0294a" />
            <path d="M20 14 L33 22 L29 23 L20 17 Z" fill="#c4203d" />
            <path d="M18.5 14 L21.5 14 L21 26 L19 26 Z" fill="#e0294a" />
            <circle cx="20" cy="12.5" r="2.2" fill="#e0294a" />
            <path d="M20 11 L22.5 10 L20 12 Z" fill="#f87171" />
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
