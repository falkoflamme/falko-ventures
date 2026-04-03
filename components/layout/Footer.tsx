"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-[var(--gold)] flex items-center justify-center rotate-45">
            <div className="w-2 h-2 bg-[var(--gold)]" />
          </div>
          <span className="font-display text-sm tracking-[0.15em] uppercase font-light text-[var(--muted)]">
            Falko Flamme
          </span>
        </div>

        <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">
          Frankfurt, Germany · {new Date().getFullYear()}
        </div>

        <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">
          Built by Falko Flamme × Claude
        </div>
      </div>
    </footer>
  );
}
