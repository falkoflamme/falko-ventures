"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "€36B+", label: "Combined TAM" },
  { value: "6", label: "Active Ventures" },
  { value: "4", label: "Live Products" },
  { value: "~€50", label: "Monthly Burn" },
  { value: "1", label: "Builder + AI" },
  { value: "~€600", label: "Annual Burn" },
];

const markets = [
  "HR & Recruiting",
  "EdTech & Habits",
  "Luxury Hospitality",
  "Urban Art & CSR",
  "Kids & Family",
  "Fachkräfte & Staffing",
];

export default function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="numbers" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="gold-line max-w-7xl mx-auto mb-20" />

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-[var(--gold)]" />
          <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">The Numbers</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-7xl font-light leading-[1.05] mb-16"
        >
          Aggregated
          <br />
          <span className="italic text-gold-gradient">potential.</span>
        </motion.h2>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
              className="p-5 border border-[var(--border)] bg-[var(--surface)] text-center hover:border-[var(--gold)] transition-all duration-300 group"
            >
              <div className="font-display text-3xl font-light text-[var(--gold)] mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-[var(--muted)]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Markets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <span className="text-[9px] tracking-[0.4em] uppercase text-[var(--muted)] shrink-0">Markets</span>
          <div className="flex flex-wrap gap-3">
            {markets.map((m) => (
              <span
                key={m}
                className="text-[9px] tracking-[0.2em] uppercase px-3 py-2 border border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
              >
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
