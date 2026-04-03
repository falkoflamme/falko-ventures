"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ventures = [
  {
    id: "01",
    name: "HiddenJobber",
    tagline: "The discreet professional switchboard",
    description: "Anonymized matching for professionals ready for change. First match, then interest, then reveal. Anti-bias architecture from day one.",
    tags: ["Future of Work", "Matching", "Privacy-First"],
    status: "Building",
    color: "#1a3a4a",
  },
  {
    id: "02",
    name: "GrabCasual 2.0",
    tagline: "Hospitality workforce, reimagined",
    description: "Built from 15 years of operating luxury venues. Solving real staffing problems with digital intelligence — fast shifts, verified talent, zero friction.",
    tags: ["Hospitality", "Workforce", "SaaS"],
    status: "Building",
    color: "#2a1a0a",
  },
  {
    id: "03",
    name: "Graffiti Urban",
    tagline: "Where urban art meets platform",
    description: "Community, discovery, and commerce for the street art world. Culture meets technology — built for the people who actually live it.",
    tags: ["Culture", "Community", "Commerce"],
    status: "Live",
    color: "#1a0a2a",
  },
  {
    id: "04",
    name: "Zahndrache Dido",
    tagline: "A character universe for kids",
    description: "Dido — the dental dragon. A full brand universe: product, story, app, and character world. Premium kids brand with emotional depth.",
    tags: ["Kids", "Brand", "IP"],
    status: "Concept",
    color: "#0a2a1a",
  },
  {
    id: "05",
    name: "Classified",
    tagline: "Stealth venture #1",
    description: "Under development. Releasing Q3 2026.",
    tags: ["Classified"],
    status: "Stealth",
    color: "#111",
    classified: true,
  },
  {
    id: "06",
    name: "Classified",
    tagline: "Stealth venture #2",
    description: "Under development. Releasing Q4 2026.",
    tags: ["Classified"],
    status: "Stealth",
    color: "#111",
    classified: true,
  },
];

const statusColors: Record<string, string> = {
  Live: "#4ade80",
  Building: "#C9A84C",
  Concept: "#60a5fa",
  Stealth: "#666",
};

export default function Ventures() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="ventures" ref={ref} className="relative py-40 px-6">
      {/* Gold line */}
      <div className="gold-line max-w-7xl mx-auto mb-24" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">The Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-7xl font-light leading-[1.05]"
            >
              Eight ventures.
              <br />
              <span className="italic text-gold-gradient">One architect.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[var(--muted)] leading-relaxed self-end text-base max-w-md"
          >
            Each venture is rooted in deep domain expertise. Not passion projects — calculated bets on
            underserved markets where Falko has unfair structural advantages.
          </motion.p>
        </div>

        {/* Venture grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ventures.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(v.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative group p-8 border cursor-pointer transition-all duration-500 overflow-hidden ${
                v.classified
                  ? "border-[var(--border)] opacity-50 hover:opacity-70"
                  : "border-[var(--border)] hover:border-[var(--gold)]"
              }`}
              style={{
                background: hovered === v.id && !v.classified
                  ? `linear-gradient(135deg, ${v.color} 0%, var(--surface) 100%)`
                  : "var(--surface)",
              }}
            >
              {/* Classified overlay */}
              {v.classified && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[10px] tracking-[0.5em] uppercase text-[var(--gold)] border border-[var(--gold)] px-4 py-2">
                      Classified
                    </div>
                  </div>
                </div>
              )}

              {/* Top line animation */}
              {!v.classified && (
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-[var(--gold)] group-hover:w-full transition-all duration-700" />
              )}

              <div className={v.classified ? "opacity-0" : ""}>
                {/* ID + Status */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-xs tracking-[0.3em] text-[var(--muted)]">{v.id}</span>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: statusColors[v.status] }}
                    />
                    <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: statusColors[v.status] }}>
                      {v.status}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-display text-3xl font-light mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                  {v.name}
                </h3>
                <p className="text-xs tracking-[0.15em] text-[var(--muted)] uppercase mb-4">{v.tagline}</p>

                {/* Description */}
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">{v.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {v.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-[0.25em] uppercase px-3 py-1 border border-[var(--border)] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
