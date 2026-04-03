"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const manifesto = [
  {
    num: "I",
    title: "Domain first. Code second.",
    body: "Every Flamme venture starts with a decade of lived experience in that market. We don't study industries — we built careers in them.",
  },
  {
    num: "II",
    title: "The AI advantage.",
    body: "AI is not a feature. It is the force multiplier that allows one founder to move at the speed of a team of twenty. We build AI-native from day one.",
  },
  {
    num: "III",
    title: "Premium or nothing.",
    body: "There is no middle market worth chasing. We build for people who value quality and are willing to pay for it. Design is strategy.",
  },
  {
    num: "IV",
    title: "Ship fast. Iterate honestly.",
    body: "We launch early, learn fast, and kill what doesn't work without sentiment. Velocity and integrity are not opposites.",
  },
];

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="vision" ref={ref} className="relative py-40 overflow-hidden">
      {/* Gold line */}
      <div className="px-6">
        <div className="gold-line max-w-7xl mx-auto mb-24" />
      </div>

      {/* Moving text marquee */}
      <div className="relative mb-24 overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 whitespace-nowrap py-6 opacity-[0.04]">
          {Array(6).fill("VISION · VELOCITY · VENTURES · VALUE · ").map((text, i) => (
            <span key={i} className="font-display text-[10rem] font-light tracking-tight text-[var(--foreground)]">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-10 mb-24">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-px bg-[var(--gold)]" />
                <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">The Manifesto</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-6xl md:text-7xl font-light leading-[1.05]"
              >
                How we build.
                <br />
                <span className="italic text-gold-gradient">Why it works.</span>
              </motion.h2>
            </div>
          </div>

          {/* Manifesto cards */}
          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)]">
            {manifesto.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-10 bg-[var(--background)] group hover:bg-[var(--surface)] transition-colors duration-500"
              >
                <div className="font-display text-6xl font-light text-[var(--gold)] opacity-30 mb-6 group-hover:opacity-60 transition-opacity duration-500">
                  {item.num}
                </div>
                <h3 className="font-display text-2xl font-light mb-4 group-hover:text-[var(--gold)] transition-colors duration-400">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 text-center max-w-3xl mx-auto"
          >
            <div className="font-display text-3xl md:text-4xl lg:text-5xl italic font-light text-[var(--foreground)] leading-[1.3] mb-6">
              &ldquo;The best ventures are built by people who couldn&apos;t find what they needed — so they built it themselves.&rdquo;
            </div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Falko Flamme</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
