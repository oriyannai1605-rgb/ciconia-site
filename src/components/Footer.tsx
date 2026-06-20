export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
            <circle cx="18" cy="18" r="16" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4" />
            <circle cx="18" cy="18" r="9" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.6" />
            <circle cx="18" cy="18" r="2.5" fill="#00d4ff" />
          </svg>
          <span className="text-white font-bold tracking-widest uppercase text-sm">Ciconia</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {["Home", "About", "Vision", "Product", "Clients", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-slate-500 hover:text-slate-300 text-xs uppercase tracking-widest transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <p className="text-slate-600 text-xs">
          © {year} Ciconia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
