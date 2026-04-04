"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = ["Next.js", "Supabase", "Vercel", "Claude AI", "Tailwind", "Framer Motion"];

export default function AIThesis() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ai-thesis" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="gold-line max-w-7xl mx-auto mb-20" />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-[var(--gold)]" />
          <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">The AI Thesis</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-12 max-w-4xl"
        >
          AI didn&apos;t just change the tools.{" "}
          <span className="italic text-gold-gradient">
            It changed who gets to build.
          </span>
        </motion.h2>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[var(--muted)] leading-relaxed text-base max-w-2xl mb-16"
        >
          For the first time in history, a single person with domain expertise and AI can build what
          used to require a team of twenty. Not as a concept — as a daily reality. Falko Flamme ships
          more product in a month than most seed-funded startups ship in a quarter.
        </motion.p>

        {/* The comparison */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 border border-[var(--border)] bg-[var(--surface)] relative overflow-hidden"
          >
            <div className="text-[9px] tracking-[0.5em] uppercase text-[var(--muted)] mb-6 opacity-60">
              Traditional
            </div>
            <div className="space-y-4">
              {[
                { label: "Team", value: "10–20 Engineers" },
                { label: "Capital", value: "€500K+ Seed" },
                { label: "Time to MVP", value: "12–18 months" },
                { label: "Result", value: "1 product" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">{row.label}</span>
                  <span className="text-sm text-[var(--foreground)] font-light">{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Falko */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="p-8 border border-[var(--gold)] bg-[var(--surface)] relative overflow-hidden"
          >
            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
            <div className="text-[9px] tracking-[0.5em] uppercase text-[var(--gold)] mb-6">
              Falko + AI
            </div>
            <div className="space-y-4">
              {[
                { label: "Team", value: "1 Builder + AI" },
                { label: "Capital", value: "~€50/month" },
                { label: "Time to MVP", value: "Weeks" },
                { label: "Result", value: "6 Ventures, 4 Live" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">{row.label}</span>
                  <span className="text-sm text-[var(--gold)] font-light">{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cost comparison bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mb-16 p-8 border border-[var(--border)] bg-[var(--surface)]"
        >
          <div className="text-[9px] tracking-[0.5em] uppercase text-[var(--muted)] mb-8">Capital Efficiency</div>

          {/* Traditional bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)]">Traditional Startup</span>
              <span className="text-[10px] tracking-[0.2em] text-[var(--muted)] font-light">€50,000 / mo</span>
            </div>
            <div className="h-2 w-full bg-[var(--border)] rounded-none overflow-hidden">
              <motion.div
                className="h-full rounded-none"
                style={{ background: "rgba(240,236,228,0.15)" }}
                initial={{ width: "0%" }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {/* Falko bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)]">Falko + AI</span>
              <span className="text-[10px] tracking-[0.2em] text-[var(--gold)] font-light">€50 / mo</span>
            </div>
            <div className="h-2 w-full bg-[var(--border)] rounded-none overflow-hidden">
              <motion.div
                className="h-full rounded-none"
                style={{ background: "var(--gold)" }}
                initial={{ width: "0%" }}
                animate={inView ? { width: "0.1%" } : {}}
                transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {/* Stat */}
          <div className="flex items-baseline gap-3">
            <span className="font-display text-4xl font-light text-gold-gradient">1,000×</span>
            <span className="text-xs text-[var(--muted)] tracking-wide">more capital efficient</span>
          </div>
        </motion.div>

        {/* Big quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-l-2 border-[var(--gold)] pl-8 mb-16"
        >
          <p className="font-display text-3xl md:text-4xl font-light italic text-[var(--foreground)] leading-[1.2]">
            &ldquo;I don&apos;t build startups.
            <br />
            <span className="text-gold-gradient">I build the machine that builds startups.&rdquo;</span>
          </p>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="text-[9px] tracking-[0.4em] uppercase text-[var(--muted)] mr-2">Built with</span>
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 border border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
