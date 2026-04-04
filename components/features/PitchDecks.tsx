"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const liveProducts = [
  {
    id: "wallsup",
    name: "WallsUp",
    description: "Urban art meets platform — community, discovery, commerce.",
    url: "https://www.wallsup.de/",
    deckUrl: "/pitch-decks/WallsUp_PitchDeck_2026.html",
    status: "Live",
  },
  {
    id: "hiddenjobber",
    name: "HiddenJobber",
    description: "Anonymized matching for professionals ready for change.",
    url: "https://hiddenjobber-app.vercel.app/",
    deckUrl: "/pitch-decks/HiddenJobber_PitchDeck.html",
    status: "Beta",
  },
  {
    id: "maxijobber",
    name: "MaxiJobber",
    description: "AI-matched hospitality talent — on demand.",
    url: "https://maxijobber.vercel.app/",
    deckUrl: "/pitch-decks/MaxiJobber_Pitch_Deck.html",
    status: "Beta",
  },
  {
    id: "insider-keys",
    name: "Insider Keys",
    description: "Exclusive access and insider knowledge, curated.",
    url: "https://insider-keys-isfv3jof8-flammefalko-4279s-projects.vercel.app/admin/login",
    deckUrl: "/pitch-decks/INSIDER_KEYS_PITCH_DECK.html",
    status: "Beta",
  },
  {
    id: "stay4skill",
    name: "Stay4Skill",
    description: "Hospitality venues as skill platforms — staying means learning.",
    url: "https://www.stay4.skill.de/",
    deckUrl: "/pitch-decks/stay4skill_investor_pitch_deck.html",
    status: "Live",
  },
  {
    id: "ritloop",
    name: "RitLoop",
    description: "Ritual intelligence — habit loops powered by AI.",
    url: "#",
    deckUrl: "/pitch-decks/RITLOOP_Investment_Deck_2026.html",
    status: "Building",
  },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  Live: { bg: "rgba(74,222,128,0.08)", text: "#4ade80" },
  Beta: { bg: "rgba(201,168,76,0.08)", text: "#C9A84C" },
  Building: { bg: "rgba(147,51,234,0.08)", text: "#a855f7" },
};

export default function PitchDecks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pitch-decks" ref={ref} className="relative py-40 px-6 overflow-hidden">
      <div className="gold-line max-w-7xl mx-auto mb-24" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 mb-20 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">Live Products & Investor Decks</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-7xl font-light leading-[1.05]"
            >
              Built.
              <br />
              <span className="italic text-gold-gradient">Deployed. Real.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[var(--muted)] leading-relaxed text-base max-w-md"
          >
            Six ventures. Each with a live product and a full investor deck — ready to explore right now.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {liveProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 border border-[var(--border)] hover:border-[var(--gold)] bg-[var(--surface)] transition-all duration-400 overflow-hidden"
            >
              {/* Top line animation */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[var(--gold)] group-hover:w-full transition-all duration-700" />

              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-2xl font-light group-hover:text-[var(--gold)] transition-colors duration-300">
                  {product.name}
                </h3>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 shrink-0 ml-3"
                  style={{
                    background: statusColors[product.status].bg,
                    color: statusColors[product.status].text,
                  }}
                >
                  {product.status}
                </span>
              </div>

              <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">{product.description}</p>

              <div className="flex items-center gap-4">
                {product.url !== "#" && (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[9px] tracking-[0.25em] uppercase text-[var(--gold)] opacity-50 hover:opacity-100 transition-opacity duration-300"
                  >
                    <span>Visit</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                <a
                  href={product.deckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[9px] tracking-[0.25em] uppercase text-[var(--foreground)] opacity-40 hover:opacity-100 hover:text-[var(--gold)] transition-all duration-300"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <rect x="1.5" y="1" width="7" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M3.5 3.5h3M3.5 5.5h3M3.5 7h1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                  <span>Investor Deck</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mt-12"
        >
          More ventures in the pipeline — stay tuned.
        </motion.p>
      </div>
    </section>
  );
}
