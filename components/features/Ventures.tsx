"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import PitchDeckModal from "./PitchDeckModal";

const ventures = [
  {
    id: "01",
    name: "HiddenJobber",
    tagline: "Der verborgene Talentmarkt",
    description:
      "70% of top professionals are never officially on the market. HiddenJobber makes this hidden talent pool accessible for the first time. Anti-bias by design. Match first — reveal later.",
    tags: ["Future of Work", "Privacy-First", "SaaS"],
    status: "Building",
    accent: "#3730a3",
    liveUrl: "https://hiddenjobber-app.vercel.app/",
    deckUrl: "/pitch-decks/HiddenJobber_PitchDeck.html",
    metrics: [
      { label: "Traction", value: "47 waitlist signups" },
      { label: "TAM", value: "€28B EU Recruiting" },
      { label: "Model", value: "SaaS €490–€1,490/mo" },
    ],
  },
  {
    id: "02",
    name: "RITLOOP",
    tagline: "Tune Your Rituals",
    description:
      "Turning toothbrushing into the world's most powerful daily habit. Starting with kids — scaling to adults. Hardware patent filed.",
    tags: ["Kids", "Habit Tech", "D2C + B2B"],
    status: "Building",
    accent: "#16a34a",
    liveUrl: "https://ritloop-kids.vercel.app",
    deckUrl: "/pitch-decks/RITLOOP_Investment_Deck_2026.html",
    metrics: [
      { label: "Traction", value: "10 test families active" },
      { label: "Model", value: "D2C + Tonies + B2B" },
      { label: "Hardware", value: "Patent filed" },
    ],
  },
  {
    id: "03",
    name: "WallsUp",
    tagline: "Walls Up. Tags Down.",
    description:
      "Vandalism costs German cities €200M per year. WallsUp breaks the cycle: vandalized walls become paid artworks. 6 live stakeholder flows. MVP live in Frankfurt.",
    tags: ["Urban Art", "CSR", "Marketplace"],
    status: "Live",
    accent: "#15803d",
    liveUrl: "https://www.wallsup.de/",
    deckUrl: "/pitch-decks/WallsUp_PitchDeck_2026.html",
    metrics: [
      { label: "Traction", value: "14 live wall pins Frankfurt" },
      { label: "TAM", value: "€1.2B (OOH + CSR DE)" },
      { label: "Pre-Seed Ask", value: "€150K" },
    ],
  },
  {
    id: "04",
    name: "MaxiJobber",
    tagline: "Qualität. Direkt. Sofort.",
    description:
      "7.5M minijob workers in Germany — no market leader for quality. Agencies charge 40–60% markup. MaxiJobber ends that. €25/h minimum. Manually verified. Direct contact. Zero commission.",
    tags: ["Hospitality", "Talent", "Marketplace"],
    status: "Building",
    accent: "#1d4ed8",
    liveUrl: "https://maxijobber.vercel.app/",
    deckUrl: "/pitch-decks/MaxiJobber_Pitch_Deck.html",
    metrics: [
      { label: "Traction", value: "82% launch-ready" },
      { label: "TAM", value: "7.5M minijob workers DE" },
      { label: "Burn Rate", value: "~€50/month" },
    ],
  },
  {
    id: "05",
    name: "Stay4Skill",
    tagline: "Fly & Shine",
    description:
      "Skill is the currency. Stay is the reward. The chef is already in Bangkok — the hotel next door needs exactly that talent. Stay4Skill connects them. Barter exchange: skill for accommodation.",
    tags: ["Hospitality", "Barter", "Travel"],
    status: "Live",
    accent: "#b45309",
    liveUrl: "https://stay4skill.vercel.app/",
    deckUrl: "/pitch-decks/stay4skill_investor_pitch_deck.html",
    metrics: [
      { label: "Traction", value: "8 profiles, 4 exchanges" },
      { label: "TAM", value: "$4.7T global hospitality" },
      { label: "Seed Ask", value: "€150K" },
    ],
  },
  {
    id: "06",
    name: "Insider Keys",
    tagline: "Secret spots, curated by your host",
    description:
      "Every hotel staff member knows the best hidden spots in the city. Insider Keys makes that knowledge immortal. Fog-of-war map, compass navigation, haptics, staff voice notes. Browser-native. No app download.",
    tags: ["Hospitality", "Gamification", "SaaS B2B"],
    status: "Concept",
    accent: "#0f766e",
    liveUrl: "https://insider-keys.vercel.app/",
    deckUrl: "/pitch-decks/INSIDER_KEYS_PITCH_DECK.html",
    metrics: [
      { label: "Traction", value: "Concept complete" },
      { label: "Model", value: "SaaS €150–€350/hotel/mo" },
      { label: "Signal", value: "72% guests want insider tips" },
    ],
  },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  Live: { bg: "rgba(74,222,128,0.08)", text: "#4ade80" },
  Building: { bg: "rgba(201,168,76,0.08)", text: "#C9A84C" },
  Concept: { bg: "rgba(96,165,250,0.08)", text: "#60a5fa" },
};

export default function Ventures() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);
  const [modal, setModal] = useState<{ venture: string; deckUrl: string } | null>(null);

  return (
    <section id="ventures" ref={ref} className="relative py-32 px-6">
      <div className="gold-line max-w-7xl mx-auto mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
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
              Six ventures.
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
            Every venture is built on years of real industry experience — not whiteboard ideas,
            but platforms rooted in institutional domain knowledge and genuine operator pain.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ventures.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(v.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative group p-6 border border-[var(--border)] hover:border-[var(--gold)] bg-[var(--surface)] transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Accent top line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${v.accent}, transparent)` }}
              />

              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <span className="font-display text-xs tracking-[0.3em] text-[var(--muted)]">{v.id}</span>
                <div className="flex items-center gap-1.5">
                  {v.status === "Live" ? (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
                    </span>
                  ) : v.status === "Building" ? (
                    <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-[var(--muted)] opacity-40" />
                  )}
                  <span
                    className="text-[8px] tracking-[0.2em] uppercase"
                    style={{ color: statusColors[v.status]?.text || "#888" }}
                  >
                    {v.status}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h3 className="font-display text-2xl font-light mb-1 group-hover:text-[var(--gold)] transition-colors duration-300">
                {v.name}
              </h3>
              <p className="text-[9px] tracking-[0.2em] text-[var(--muted)] uppercase mb-4 italic font-display">
                {v.tagline}
              </p>

              {/* Description */}
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-5">{v.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-1 gap-2 mb-5">
                {v.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                    <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--muted)]">{m.label}</span>
                    <span className="text-[10px] text-[var(--foreground)] font-light">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {v.tags.map((tag) => (
                  <span key={tag} className="text-[8px] tracking-[0.2em] uppercase px-2 py-1 border border-[var(--border)] text-[var(--muted)]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-auto flex items-center gap-4">
                <a
                  href={v.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[9px] tracking-[0.25em] uppercase text-[var(--gold)] opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <span>Live →</span>
                </a>
                <button
                  onClick={() => setModal({ venture: v.name, deckUrl: v.deckUrl })}
                  className="flex items-center gap-1.5 text-[9px] tracking-[0.25em] uppercase px-3 py-2 border border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
                >
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <rect x="1.5" y="1" width="7" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M3.5 3.5h3M3.5 5.5h3M3.5 7h1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                  Pitch Deck
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gated Pitch Deck Modal */}
      {modal && (
        <PitchDeckModal
          venture={modal.venture}
          deckUrl={modal.deckUrl}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}
