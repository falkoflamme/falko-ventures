"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const brands = [
  "Rocco Forte",
  "JW Marriott",
  "The Peninsula Bangkok",
  "Sofitel",
  "Kloster Eberbach",
  "Ruby Hotels",
  "Deutsche Bank Park",
  "Sofitel Macau",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Radial glow left */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
      />

      {/* Layout: text left, image right */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center min-h-screen py-28">

        {/* LEFT — Text */}
        <motion.div style={{ y, opacity }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-12 bg-[var(--gold)] opacity-60" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-[var(--gold)]">
              Venture Builder · Frankfurt · 2026
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light tracking-tight mb-6"
            style={{ fontSize: "clamp(4rem, 9vw, 8rem)", lineHeight: 0.9 }}
          >
            <span className="block italic text-[var(--foreground)]">Falko</span>
            <span className="block text-gold-gradient font-medium">Flamme</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm md:text-base tracking-[0.2em] uppercase text-[var(--muted)] leading-relaxed mb-14 max-w-sm"
          >
            One Founder. Six Ventures. Zero Excuses.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14"
          >
            {[
              { num: "6", label: "Ventures" },
              { num: "4", label: "Live MVPs" },
              { num: "15+", label: "Yrs Hospitality" },
              { num: "~€50", label: "Burn / Month" },
            ].map((stat) => (
              <div key={stat.label} className="border-l border-[var(--border)] pl-4">
                <div className="font-display text-3xl md:text-4xl font-light text-[var(--gold)]">{stat.num}</div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-[var(--muted)] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#ventures"
              className="text-xs tracking-[0.3em] uppercase px-8 py-4 bg-[var(--gold)] text-black font-medium hover:bg-[var(--gold-light)] transition-colors duration-300"
            >
              Das Portfolio
            </a>
            <a
              href="#contact"
              className="text-xs tracking-[0.3em] uppercase px-8 py-4 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300"
            >
              Pitch Deck anfordern
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — Visionary Photo */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: imgY }}
          className="relative hidden lg:block"
        >
          {/* Gold frame accent */}
          <div className="absolute -top-4 -right-4 w-full h-full border border-[var(--gold)] opacity-20 pointer-events-none" />
          <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-[var(--gold)] opacity-50 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-[var(--gold)] opacity-50 pointer-events-none" />

          {/* Image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/images/Falko_Flamme_Visionary.JPG"
              alt="Falko Flamme — Venture Builder"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 0px, 50vw"
            />
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
          </div>

          {/* Name tag overlay */}
          <div className="absolute bottom-8 left-6">
            <div className="text-[9px] tracking-[0.5em] uppercase text-[var(--gold)] mb-1">Falko Flamme</div>
            <div className="text-[10px] text-[var(--muted)] tracking-widest">Venture Builder · Frankfurt</div>
          </div>
        </motion.div>
      </div>

      {/* Hotel marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t border-[var(--border)] py-4 overflow-hidden bg-[var(--background)]/80 backdrop-blur-sm"
      >
        <div className="text-[8px] tracking-[0.5em] uppercase text-[var(--muted)] text-center mb-2 opacity-60">
          Career built across
        </div>
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex shrink-0 gap-12 pr-12"
          >
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] opacity-50 whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-20 right-8 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent"
        />
        <span className="text-[8px] tracking-[0.4em] uppercase text-[var(--muted)]">Scroll</span>
      </motion.div>
    </section>
  );
}
