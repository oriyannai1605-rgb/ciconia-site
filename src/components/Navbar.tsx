"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Product", href: "#product" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            {/* Simple inline SVG logo mark */}
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
              <circle cx="18" cy="18" r="16" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4" />
              <circle cx="18" cy="18" r="9" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.6" />
              <circle cx="18" cy="18" r="2.5" fill="#00d4ff" />
              <line x1="18" y1="18" x2="18" y2="2" stroke="#0ea5e9" strokeWidth="1.5"
                style={{ transformOrigin: "18px 18px", animation: "radarSweep 4s linear infinite" }} />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-widest text-white uppercase">
            Ciconia
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-300 hover:text-electric-400 transition-colors duration-200 tracking-wider uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-electric-500 hover:bg-electric-400 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-electric-500/30"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/5 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium text-slate-200 hover:text-electric-400 transition-colors py-1 tracking-wider uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 inline-flex w-full justify-center items-center px-5 py-3 rounded-full bg-electric-500 text-white text-sm font-semibold"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
