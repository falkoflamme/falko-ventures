"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const roadmap = [
  {
    year: "2026",
    title: "Proof of Concept",
    description: "Erste Nutzer, erste Erlöse. Jedes Venture validiert seinen Kernmarkt. Gebaut von einem Menschen — bewiesen von echten Kunden.",
  },
  {
    year: "2027",
    title: "Venture Studio Formation",
    description: "Top 2–3 Ventures fokussiert skalieren. Erste strategische Hires. Das Studio-Modell formalisieren: Falko als Architekt, AI als Team.",
  },
  {
    year: "2028+",
    title: "Scale & Exit",
    description: "EU-Expansion. Strategische Partner. Erste Exits oder Profitabilität. Das Playbook repliziert auf neue Märkte und neue Ventures.",
  },
];

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="vision" ref={ref} className="relative py-32 overflow-hidden">
      <div className="px-6">
        <div className="gold-line max-w-7xl mx-auto mb-20" />
      </div>

      {/* Moving text marquee */}
      <div className="relative mb-20 overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 whitespace-nowrap py-4 opacity-[0.03]">
          {Array(6).fill("VISION · VELOCITY · VENTURES · VALUE · ").map((text, i) => (
            <span key={i} className="font-display text-[8rem] font-light tracking-tight text-[var(--foreground)]">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">The Vision</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-7xl font-light leading-[1.05]"
            >
              From Builder
              <br />
              <span className="italic text-gold-gradient">to Studio.</span>
            </motion.h2>
          </div>

          {/* Roadmap timeline */}
          <div className="relative mb-20">
            {/* Connecting line */}
            <div className="absolute left-0 top-8 bottom-8 w-px bg-[var(--border)] hidden md:block" style={{ left: "5.5rem" }} />

            <div className="space-y-4">
              {roadmap.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex gap-8 items-start p-6 hover:bg-[var(--surface)] transition-colors duration-400 -mx-6 px-6"
                >
                  {/* Year */}
                  <div className="flex flex-col items-center shrink-0 w-16">
                    <div className="font-display text-2xl font-light text-[var(--gold)] group-hover:text-[var(--gold-light)] transition-colors duration-300">
                      {item.year}
                    </div>
                    <div className="w-3 h-3 rounded-full border-2 border-[var(--gold)] bg-[var(--background)] mt-3 group-hover:bg-[var(--gold)] transition-colors duration-300 relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-2xl font-light mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed max-w-lg">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="font-display text-3xl md:text-4xl lg:text-5xl italic font-light text-[var(--foreground)] leading-[1.3] mb-6">
              &ldquo;The best ventures are built by people who couldn&apos;t find what they needed — so they built it themselves.&rdquo;
            </div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">— Falko Flamme</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
