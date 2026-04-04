"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  venture: string;
  deckUrl: string;
  onClose: () => void;
}

export default function PitchDeckModal({ venture, deckUrl, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await fetch("/api/pitch-deck-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role, venture, deckUrl }),
      });
    } catch {
      // Silently fail — deck still opens
    }

    // Always open the deck regardless of save success
    window.open(deckUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md bg-[var(--surface)] border border-[var(--gold)] p-8 z-10"
        >
          {/* Gold top line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-200"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="text-[9px] tracking-[0.5em] uppercase text-[var(--gold)] mb-2">Investor Deck</div>
            <h2 className="font-display text-3xl font-light text-[var(--foreground)]">{venture}</h2>
            <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">
              Quick details — the deck opens immediately after.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative group">
              <input
                type="text"
                placeholder="Name *"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--gold)] text-[var(--foreground)] placeholder:text-[var(--muted)] px-4 py-3 text-sm outline-none transition-colors duration-300"
              />
            </div>

            <div className="relative group">
              <input
                type="email"
                placeholder="Email *"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--gold)] text-[var(--foreground)] placeholder:text-[var(--muted)] px-4 py-3 text-sm outline-none transition-colors duration-300"
              />
            </div>

            <div className="relative group">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--gold)] text-[var(--foreground)] px-4 py-3 text-sm outline-none transition-colors duration-300 appearance-none cursor-pointer"
                style={{ color: role ? "var(--foreground)" : "var(--muted)" }}
              >
                <option value="" disabled>Select role</option>
                <option value="Investor">Investor / VC</option>
                <option value="Angel">Business Angel</option>
                <option value="Co-Founder">Co-Founder</option>
                <option value="Partner">Strategic Partner</option>
                <option value="Press">Press / Media</option>
                <option value="Other">Other</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 4l3 3 3-3" stroke="var(--muted)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>

            {error && <p className="text-xs text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[var(--gold)] text-black text-xs tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-light)] disabled:opacity-60 transition-all duration-300 mt-2"
            >
              {loading ? "Opening deck..." : "Open Pitch Deck →"}
            </button>
          </form>

          <p className="text-[9px] text-[var(--muted)] mt-4 text-center leading-relaxed">
            No spam. Falko personally follows up when there&apos;s a fit.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
