"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const feed = [
  { date: "Apr 4", venture: "HiddenJobber", item: "Candidate onboarding flow v2 deployed" },
  { date: "Apr 3", venture: "WallsUp", item: "Mapbox map — 3 new wall pins Frankfurt Nordend" },
  { date: "Apr 3", venture: "RITLOOP", item: "Dido chapter 3 audio script finalized" },
  { date: "Apr 2", venture: "MaxiJobber", item: "Admin panel magic link auth live" },
  { date: "Apr 1", venture: "Stay4Skill", item: "Bangkok exchange #4 confirmed — sommelier" },
  { date: "Mar 31", venture: "Insider Keys", item: "Fog-of-war map prototype — first demo" },
  { date: "Mar 30", venture: "HiddenJobber", item: "RLS row-level security — GDPR audit passed" },
  { date: "Mar 29", venture: "RITLOOP", item: "DPMA trademark application filed — RITLOOP" },
];

const ventureColors: Record<string, string> = {
  HiddenJobber: "#3730a3",
  WallsUp: "#15803d",
  RITLOOP: "#16a34a",
  MaxiJobber: "#1d4ed8",
  "Stay4Skill": "#b45309",
  "Insider Keys": "#0f766e",
};

export default function ShippedFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="shipped" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="gold-line max-w-7xl mx-auto mb-20" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left header */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">Shipped This Week</span>
              {/* Live pulse */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-7xl font-light leading-[1.05]"
            >
              Always
              <br />
              <span className="italic text-gold-gradient">shipping.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[var(--muted)] text-sm leading-relaxed max-w-sm mt-6"
            >
              Across 6 ventures. Every day. This isn't a pitch — this is an operation.
            </motion.p>
          </div>

          {/* Right feed */}
          <div className="space-y-0">
            {feed.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-4 py-3.5 border-b border-[var(--border)] hover:bg-[var(--surface)] px-3 -mx-3 transition-colors duration-200"
              >
                {/* Date */}
                <span className="text-[9px] tracking-[0.2em] text-[var(--muted)] w-10 shrink-0 pt-0.5 font-mono">
                  {item.date}
                </span>

                {/* Venture tag */}
                <span
                  className="text-[8px] tracking-[0.2em] uppercase px-2 py-0.5 shrink-0 mt-0.5"
                  style={{
                    background: `${ventureColors[item.venture]}18`,
                    color: ventureColors[item.venture],
                  }}
                >
                  {item.venture}
                </span>

                {/* Item */}
                <span className="text-xs text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors duration-200 leading-snug">
                  {item.item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
