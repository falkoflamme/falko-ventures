"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "AI Thesis", href: "#ai-thesis" },
  { label: "Ventures", href: "#ventures" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-[var(--gold)] flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <div className="w-3 h-3 bg-[var(--gold)]" />
            </div>
            <span className="font-display text-lg tracking-[0.15em] text-[var(--foreground)] uppercase font-light">
              Falko Flamme
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ventures"
              className="text-xs tracking-[0.2em] uppercase px-5 py-2 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300"
            >
              Pitch Decks →
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-px bg-[var(--foreground)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block w-6 h-px bg-[var(--foreground)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[var(--foreground)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--background)] flex flex-col items-center justify-center gap-6"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-display text-4xl tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--gold)] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#ventures"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 }}
              className="mt-4 text-xs tracking-[0.3em] uppercase px-8 py-3 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300"
            >
              Pitch Decks
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
