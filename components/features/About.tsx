"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const timeline = [
  { year: "2006", role: "Apprentice", place: "Rocco Forte · Villa Kennedy Frankfurt" },
  { year: "2010", role: "F&B Operations", place: "JW Marriott · Thailand" },
  { year: "2015", role: "F&B Manager", place: "Sofitel · Bangkok" },
  { year: "2017", role: "F&B Manager", place: "The Peninsula · Bangkok" },
  { year: "2018", role: "Co-Founder & MD", place: "GrabCasual · Bangkok" },
  { year: "2019", role: "Director F&B", place: "Sofitel Macau · Ponte 16" },
  { year: "2021", role: "Director Operations", place: "Kloster Eberbach · Germany" },
  { year: "2024", role: "Hotel Manager", place: "Ruby Hotels · Frankfurt" },
  { year: "2025", role: "Head of Public Catering", place: "Deutsche Bank Park · Frankfurt" },
];

const achievements = [
  { metric: "+30%", label: "F&B revenue growth at Kloster Eberbach" },
  { metric: "€20K+", label: "Revenue per rooftop event at Ruby Hotels" },
  { metric: "220", label: "Person F&B team led at The Peninsula Bangkok" },
  { metric: "G7", label: "Interior Ministers Summit — event executed" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="gold-line max-w-7xl mx-auto mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Top: Photo + Bio */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden max-w-sm" style={{ aspectRatio: "3/4" }}>
              {/* Gold frame offset */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[var(--gold)] opacity-20 z-10 pointer-events-none" />
              <div className="absolute top-5 left-5 w-8 h-8 border-t border-l border-[var(--gold)] opacity-60 z-10 pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-8 h-8 border-b border-r border-[var(--gold)] opacity-60 z-10 pointer-events-none" />

              <Image
                src="/images/Falko_Flamme1.JPG"
                alt="Falko Flamme"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent z-10" />
            </div>

            {/* Name tag */}
            <div className="absolute bottom-6 left-4 z-20">
              <div className="text-[9px] tracking-[0.5em] uppercase text-[var(--gold)]">Falko Flamme</div>
              <div className="text-[10px] text-[var(--muted)] tracking-wider">Frankfurt · Germany</div>
            </div>
          </motion.div>

          {/* Bio */}
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
              className="font-display text-5xl md:text-6xl font-light leading-[1.1] mb-8"
            >
              Not just an operator.
              <br />
              <span className="italic text-gold-gradient">An architect.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-4 text-[var(--muted)] leading-relaxed text-sm mb-10"
            >
              <p>
                Falko Flamme hat 15 Jahre lang die Luxushotellerie von innen aufgebaut — Villa Kennedy
                Frankfurt, JW Marriott Thailand, The Peninsula Bangkok (220 Mitarbeiter), Sofitel Macau,
                Kloster Eberbach (G7 Summit), Ruby Hotels, Deutsche Bank Park.
              </p>
              <p>
                2018, während er in Bangkok ein 220-köpfiges F&B Team führte, gründete er GrabCasual —
                ein Tech-Startup das Hospitality-Staffing digitalisierte. Das war der Moment: Domain
                Expertise + Technologie = unfairer Vorteil.
              </p>
              <p>
                Heute baut er mit AI als Co-Builder ein Portfolio von 6 Ventures gleichzeitig — jedes in
                einem Markt den er von innen kennt. Mit einer Burn Rate von ~€50/Monat. Ohne Team.
                Ohne Office. Ohne Bullshit.
              </p>
            </motion.div>

            {/* Achievement metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 gap-3"
            >
              {achievements.map((a) => (
                <div key={a.metric} className="p-4 border border-[var(--border)] bg-[var(--surface)]">
                  <div className="font-display text-3xl font-light text-[var(--gold)] mb-1">{a.metric}</div>
                  <div className="text-xs text-[var(--muted)] leading-snug">{a.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">Career Timeline</span>
          </div>

          <div className="relative">
            <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-[var(--border)]" />
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                  className="group flex items-center gap-6 py-3 hover:bg-[var(--surface)] px-4 -mx-4 transition-colors duration-300 cursor-default"
                >
                  <div className="text-[10px] tracking-[0.2em] text-[var(--gold)] font-mono w-10 shrink-0">{item.year}</div>
                  <div className="w-2 h-2 rounded-full bg-[var(--border)] group-hover:bg-[var(--gold)] transition-colors duration-300 shrink-0 relative z-10" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0">
                    <span className="text-xs text-[var(--foreground)] font-medium">{item.role}</span>
                    <span className="hidden sm:block text-[var(--border)]">·</span>
                    <span className="text-xs text-[var(--muted)]">{item.place}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
