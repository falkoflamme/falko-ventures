"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ventures = [
  {
    id: "01",
    name: "HiddenJobber",
    tagline: "The discreet professional switchboard",
    description: "Anonymized matching for professionals ready for change. First match, then interest, then reveal. Anti-bias architecture. Premium matchmaking — not a job board.",
    tags: ["Future of Work", "Matching", "Privacy-First"],
    status: "Building",
    color: "#0d1f2d",
    pitchDeck: "/pitch-decks/HiddenJobber_PitchDeck_2026.pptx",
    deckType: "pptx",
  },
  {
    id: "02",
    name: "MaxiJobber",
    tagline: "Hospitality talent — on demand",
    description: "The missing infrastructure layer for hospitality staffing. AI-matched talent with verified experience. Built by someone who spent 15 years on the other side of the hire.",
    tags: ["Hospitality", "Talent", "AI-Matching"],
    status: "Building",
    color: "#1a1208",
    pitchDeck: "/pitch-decks/MaxiJobber_Super_Pitch_Deck.pptx",
    deckType: "pptx",
  },
  {
    id: "03",
    name: "WallsUp",
    tagline: "Where urban art meets platform",
    description: "Community, discovery, and commerce for the street art world. Connecting artists, walls, and collectors. Culture as infrastructure.",
    tags: ["Culture", "Community", "Commerce"],
    status: "Live",
    color: "#150a22",
    pitchDeck: "/pitch-decks/WallsUp_PitchDeck_2026.pptx",
    deckType: "pptx",
  },
  {
    id: "04",
    name: "Insider Keys",
    tagline: "Exclusive access, reimagined",
    description: "A premium membership experience built around insider knowledge and curated access. Where the right connections open the right doors.",
    tags: ["Premium", "Access", "Community"],
    status: "Building",
    color: "#1a0f08",
    pitchDeck: "/pitch-decks/INSIDER_KEYS_PITCH_DECK.html",
    deckType: "html",
  },
  {
    id: "05",
    name: "Stay4Skill",
    tagline: "Skill-based hospitality experiences",
    description: "A new concept where staying means learning. Hospitality venues as skill platforms. Merging tourism with professional development.",
    tags: ["Hospitality", "Education", "Travel"],
    status: "Building",
    color: "#1a0a0a",
    pitchDeck: "/pitch-decks/stay4skill_investor_pitch_deck.html",
    deckType: "html",
  },
  {
    id: "06",
    name: "Classified",
    tagline: "Stealth venture",
    description: "In development. Releasing 2026.",
    tags: ["Classified"],
    status: "Stealth",
    color: "#111",
    classified: true,
  },
  {
    id: "07",
    name: "Classified",
    tagline: "Stealth venture",
    description: "In development. Releasing 2026.",
    tags: ["Classified"],
    status: "Stealth",
    color: "#111",
    classified: true,
  },
];

const statusColors: Record<string, string> = {
  Live: "#4ade80",
  Building: "#C9A84C",
  Rebuilding: "#e8c96a",
  Concept: "#60a5fa",
  Stealth: "#444",
};

export default function Ventures() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="ventures" ref={ref} className="relative py-40 px-6">
      <div className="gold-line max-w-7xl mx-auto mb-24" />

      <div className="max-w-7xl mx-auto">
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
              Five ventures.
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
            Five active ventures. Two in stealth. Each one targets a market Falko has operated in for years — not ideas from a whiteboard, but platforms built on institutional domain knowledge and real operator pain.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ventures.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(v.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative group p-6 border transition-all duration-500 overflow-hidden flex flex-col ${
                v.classified
                  ? "border-[var(--border)] opacity-40 hover:opacity-60"
                  : "border-[var(--border)] hover:border-[var(--gold)]"
              }`}
              style={{
                background: hovered === v.id && !v.classified
                  ? `linear-gradient(135deg, ${v.color} 0%, var(--surface) 100%)`
                  : "var(--surface)",
              }}
            >
              {v.classified && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[9px] tracking-[0.5em] uppercase text-[var(--gold)] border border-[var(--gold)] px-3 py-2">
                    Classified
                  </div>
                </div>
              )}

              {!v.classified && (
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-[var(--gold)] group-hover:w-full transition-all duration-700" />
              )}

              <div className={`flex flex-col flex-1 ${v.classified ? "opacity-0" : ""}`}>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display text-xs tracking-[0.3em] text-[var(--muted)]">{v.id}</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColors[v.status] }} />
                    <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: statusColors[v.status] }}>
                      {v.status}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-light mb-1 group-hover:text-[var(--gold)] transition-colors duration-300">
                  {v.name}
                </h3>
                <p className="text-[10px] tracking-[0.15em] text-[var(--muted)] uppercase mb-4">{v.tagline}</p>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-5">{v.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {v.tags.map((tag) => (
                    <span key={tag} className="text-[8px] tracking-[0.2em] uppercase px-2 py-1 border border-[var(--border)] text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>

                {v.pitchDeck && (
                  <div className="mt-auto">
                    <a
                      href={v.pitchDeck}
                      target={v.deckType === "html" ? "_blank" : undefined}
                      download={v.deckType === "pptx" ? true : undefined}
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-[9px] tracking-[0.25em] uppercase text-[var(--gold)] border border-[var(--gold)] border-opacity-30 px-3 py-2 hover:bg-[var(--gold)] hover:text-black transition-all duration-300"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v6M2 5l3 3 3-3M1 9h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      View Pitch
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
