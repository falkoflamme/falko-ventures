"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pipeline" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="gold-line max-w-7xl mx-auto mb-20" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">The Pipeline</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-7xl font-light leading-[1.05] mb-8"
            >
              The portfolio
              <br />
              <span className="italic text-gold-gradient">grows.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[var(--muted)] leading-relaxed text-base max-w-md mb-10"
            >
              Weitere Ventures entstehen im RITLOOP Studio. Jedes basiert auf einem echten Problem
              in einem Markt den Falko von innen kennt. Mehr kommt.
            </motion.p>

            {/* Besserwisser preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="p-6 border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--gold)] transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[var(--gold)] group-hover:w-full transition-all duration-700" />
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-2xl font-light group-hover:text-[var(--gold)] transition-colors duration-300">
                  Besserwisser
                </h3>
                <span className="text-[8px] tracking-[0.2em] uppercase px-2.5 py-1 bg-[rgba(96,165,250,0.08)] text-[#60a5fa]">
                  Live
                </span>
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                Quiz & Wissens-App. Bereits live. Weitere Details folgen.
              </p>
              <a
                href="https://besserwisser-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] tracking-[0.25em] uppercase text-[var(--gold)] opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                Ansehen →
              </a>
            </motion.div>
          </div>

          {/* Right — Signal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Animated pulse rings */}
            <div className="relative flex items-center justify-center h-64">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-[var(--gold)]"
                  animate={{
                    width: [`${40 + i * 60}px`, `${80 + i * 60}px`],
                    height: [`${40 + i * 60}px`, `${80 + i * 60}px`],
                    opacity: [0.4 - i * 0.08, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeOut",
                  }}
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[var(--gold)] bg-[var(--gold)] opacity-80" />
            </div>

            <div className="text-center mt-6">
              <div className="font-display text-2xl font-light text-[var(--foreground)] mb-2">
                Neue Ventures im Studio
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">
                Stay tuned — mehr kommt.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
