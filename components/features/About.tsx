"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const traits = [
  { label: "Domain Expertise", desc: "15+ years building and operating luxury hospitality concepts across Europe and Asia." },
  { label: "Founder Mindset", desc: "Multiple ventures from zero to live product. Pattern recognition across industries." },
  { label: "AI-Native Builder", desc: "Leveraging AI as a force multiplier — from product design to code to growth." },
  { label: "Brand Intelligence", desc: "Every product built with premium positioning, emotional resonance, and market clarity." },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-40 px-6 overflow-hidden">
      {/* Gold line top */}
      <div className="gold-line max-w-7xl mx-auto mb-24" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* Left: Identity */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">The Founder</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl md:text-7xl font-light leading-[1.05] mb-8"
          >
            Not just{" "}
            <span className="italic text-gold-gradient">one idea.</span>
            <br />
            A whole universe.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-[var(--muted)] leading-relaxed text-base max-w-md"
          >
            Falko Flamme is a serial founder with deep roots in luxury hospitality and a sharp eye for
            where digital intelligence meets human experience. Based in Frankfurt, building globally.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[var(--muted)] leading-relaxed text-base max-w-md mt-4"
          >
            He doesn&apos;t build apps. He builds platforms with unfair advantages — rooted in real industry knowledge,
            designed for the people who use them, and engineered to scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10"
          >
            <a
              href="#ventures"
              className="group inline-flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-[var(--gold)] hover:gap-6 transition-all duration-300"
            >
              <span>See the Portfolio</span>
              <div className="w-10 h-px bg-[var(--gold)]" />
            </a>
          </motion.div>
        </div>

        {/* Right: Trait cards */}
        <div className="grid grid-cols-1 gap-4">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--gold)] hover:bg-[var(--surface-2)] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-0 h-px bg-[var(--gold)] group-hover:w-full transition-all duration-700" />
              <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-2">{trait.label}</div>
              <div className="text-sm text-[var(--muted)] leading-relaxed">{trait.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
