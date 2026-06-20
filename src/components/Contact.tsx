"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For Vercel — hook up to Formspree, Resend, or any API route
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-navy-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(14,165,233,0.08),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-electric-500" />
              <span className="text-electric-400 text-xs font-semibold tracking-widest uppercase">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Let's make the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-accent">
                skies safer
              </span>{" "}
              together
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Whether you're an operator, integrator, or partner — reach out to learn how Ciconia's
              technology can work for your platform.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:info@ciconia.flights"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 shrink-0 group-hover:bg-electric-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-white font-medium group-hover:text-electric-400 transition-colors">info@ciconia.flights</p>
                </div>
              </a>

              <a
                href="tel:+972546510908"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 shrink-0 group-hover:bg-electric-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-white font-medium group-hover:text-electric-400 transition-colors">+972 54 6510 908</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="p-8 rounded-2xl bg-white/4 border border-white/8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-electric-500/20 border border-electric-500/40 flex items-center justify-center">
                  <svg className="w-7 h-7 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl">Message sent!</h3>
                <p className="text-slate-400">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-electric-500/60 focus:ring-1 focus:ring-electric-500/30 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-electric-500/60 focus:ring-1 focus:ring-electric-500/30 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your platform or use case…"
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-electric-500/60 focus:ring-1 focus:ring-electric-500/30 transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-electric-500 hover:bg-electric-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-electric-500/30"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
