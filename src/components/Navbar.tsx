"use client";
import { useState, useEffect } from "react";

/* ── Ciconia logo mark: stork bird in crimson + animated radar rings ── */
function CiconiaLogo() {
  return (
    <div className="relative w-9 h-9 shrink-0">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Radar rings — pulsing behind the bird */}
        <circle cx="20" cy="20" r="17" stroke="#0ea5e9" strokeWidth="0.9" opacity="0.22" />
        <circle cx="20" cy="20" r="11" stroke="#0ea5e9" strokeWidth="0.9" opacity="0.30" />

        {/* Radar sweep line rotating around center */}
        <line
          x1="20" y1="20" x2="20" y2="3"
          stroke="#0ea5e9"
          strokeWidth="1"
          opacity="0.55"
          style={{
            transformOrigin: "20px 20px",
            animation: "radarSweep 4s linear infinite",
          }}
        />

        {/* Center dot */}
        <circle cx="20" cy="20" r="1.4" fill="#00d4ff" opacity="0.7" />

        {/*
          Stork / ciconia bird silhouette — angular, viewed from front.
          Two swept wings meeting at body center, with a small head+beak peak.
          Styled in crimson-red matching the real brand mark.
        */}
        {/* Left wing */}
        <path
          d="M20 14 L7 22 L11 23 L20 17 Z"
          fill="#e0294a"
        />
        {/* Right wing */}
        <path
          d="M20 14 L33 22 L29 23 L20 17 Z"
          fill="#c4203d"
        />
        {/* Body / neck */}
        <path
          d="M18.5 14 L21.5 14 L21 26 L19 26 Z"
          fill="#e0294a"
        />
        {/* Head */}
        <circle cx="20" cy="12.5" r="2.2" fill="#e0294a" />
        {/* Beak */}
        <path
          d="M20 11 L22.5 10 L20 12 Z"
          fill="#f87171"
        />
      </svg>
    </div>
  );
}

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Product", href: "#product" },
  { label: "Our Team", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#020818]/96 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
          <CiconiaLogo />
          <span className="text-[17px] font-bold tracking-[0.18em] text-white uppercase">
            Ciconia
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium text-slate-300 hover:text-sky-400 transition-colors duration-200 tracking-wider uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-[13px] font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30 shrink-0"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg gap-[5px]"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-[22px] h-[2px] bg-white rounded-full transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-[22px] h-[2px] bg-white rounded-full transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "none" }}
          />
          <span
            className="block w-[22px] h-[2px] bg-white rounded-full transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }}
          />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pt-2 pb-6 border-t border-white/5">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center py-3.5 text-[15px] font-medium text-slate-200 hover:text-sky-400 transition-colors tracking-wide uppercase border-b border-white/5 last:border-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex w-full justify-center items-center px-5 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold transition-colors active:scale-95"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
