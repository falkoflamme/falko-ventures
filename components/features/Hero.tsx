"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const brands = ["Rocco Forte", "JW Marriott", "Peninsula Bangkok", "Sofitel", "Kloster Eberbach", "Ruby Hotels"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-[0.04] blur-3xl"
        style={{ background: "var(--gold)" }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-[var(--gold)] opacity-60" />
          <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">Venture Builder · Frankfurt</span>
          <div className="h-px w-16 bg-[var(--gold)] opacity-60" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-7xl md:text-[10rem] lg:text-[13rem] leading-[0.9] font-light tracking-tight mb-6"
        >
          <span className="block italic text-[var(--foreground)]">Falko</span>
          <span className="block text-gold-gradient font-medium">Flamme</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-[var(--muted)] max-w-xl mx-auto leading-relaxed"
        >
          Serial Founder · Luxury Hospitality · AI-Powered Ventures
        </motion.p>

        {/* Real stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16"
        >
          {[
            { num: "15+", label: "Years Hospitality" },
            { num: "8", label: "Active Ventures" },
            { num: "220", label: "Staff Led" },
            { num: "G7", label: "Summit Events" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-light text-[var(--gold)]">{stat.num}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <a
            href="#ventures"
            className="group flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--foreground)] hover:text-[var(--gold)] transition-colors duration-300"
          >
            <span>Explore Ventures</span>
            <div className="w-8 h-px bg-current group-hover:w-14 transition-all duration-500" />
          </a>
          <a
            href="#contact"
            className="text-xs tracking-[0.3em] uppercase px-8 py-3 bg-[var(--gold)] text-black font-medium hover:bg-[var(--gold-light)] transition-colors duration-300"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* Brand trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-[9px] tracking-[0.4em] uppercase text-[var(--muted)] mb-6">
            Career Built Across
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {brands.map((brand) => (
              <span key={brand} className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] opacity-50 hover:opacity-100 transition-opacity duration-300">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent"
        />
        <span className="text-[9px] tracking-[0.4em] uppercase text-[var(--muted)]">Scroll</span>
      </motion.div>
    </section>
  );
}
