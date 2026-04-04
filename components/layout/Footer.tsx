"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "AI Thesis", href: "#ai-thesis" },
  { label: "Ventures", href: "#ventures" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 border border-[var(--gold)] flex items-center justify-center rotate-45">
                <div className="w-2.5 h-2.5 bg-[var(--gold)]" />
              </div>
              <span className="font-display text-base tracking-[0.15em] uppercase font-light">
                Falko Flamme
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] leading-relaxed max-w-xs">
              Serial founder. Luxury hospitality veteran. AI-powered venture builder. Frankfurt, Germany.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[9px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">Navigation</div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[9px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">Connect</div>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/falkoflamme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-300 tracking-wide inline-flex items-center gap-2"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:flamme.falko@gmail.com"
                className="text-xs text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-300 tracking-wide inline-flex items-center gap-2"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                flamme.falko@gmail.com
              </a>
              <a
                href="#contact"
                className="text-xs text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors duration-300 tracking-wide mt-2"
              >
                → Investor inquiry
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">
            Frankfurt, Germany · {new Date().getFullYear()}
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">
            Built with Claude AI
          </div>
        </div>
      </div>
    </footer>
  );
}
