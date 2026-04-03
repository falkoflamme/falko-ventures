"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote: "In the close future Falko will be himself an EAM, DOO, Hotel Manager and General Manager. His daily input, ideas and tremendous creativity was of high value.",
    author: "Vinzenz Rosa de Pauli",
    title: "General Manager, Sofitel Macau",
    brand: "Sofitel",
  },
  {
    quote: "Falko provided his team professional leadership which led to greatly improved results. Injecting a new level of energy and creativity — Falko possesses sound business acumen.",
    author: "Jeremy Aniere",
    title: "Senior Hotelier, Sofitel Macau",
    brand: "Sofitel",
  },
  {
    quote: "The entire Food and Beverage team benefited from his hands-on approach, can-do attitude and creativity. He is a true host who is able to exceed guests' expectations.",
    author: "Martin Rahn",
    title: "General Manager, The Peninsula Hong Kong",
    brand: "Peninsula",
  },
  {
    quote: "He has a unique combination of analytical skills and structure while being able to communicate and motivate on a personal level. It is a rare find.",
    author: "Jakub Mares",
    title: "Director of Food & Beverage",
    brand: "Sofitel Bangkok",
  },
  {
    quote: "Hard working, conscientious and a strong team player. He understands the bigger picture. I have no doubt he will go far in his career.",
    author: "Ronan Fitzgerald",
    title: "Education Specialist",
    brand: "Institute",
  },
  {
    quote: "Falko has been a true asset and an integral part of the team. He is a leader who is focused on business goals and takes special interest in his team's development.",
    author: "Varun Behl",
    title: "Managing Director, KCCO India",
    brand: "JW Marriott",
  },
];

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="relative py-40 px-6 bg-[var(--surface)] overflow-hidden">
      {/* Background gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, var(--gold) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-8 h-px bg-[var(--gold)]" />
          <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">What GMs Say</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Active quote large */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-display text-6xl text-[var(--gold)] opacity-30 mb-4 leading-none">&ldquo;</div>
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display text-2xl md:text-3xl font-light italic leading-[1.4] text-[var(--foreground)] mb-8"
            >
              {testimonials[active].quote}
            </motion.p>
            <motion.div
              key={`author-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="text-sm font-medium text-[var(--gold)]">{testimonials[active].author}</div>
              <div className="text-xs text-[var(--muted)] tracking-wide mt-1">{testimonials[active].title}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] opacity-60 mt-1">
                via {testimonials[active].brand}
              </div>
            </motion.div>
          </motion.div>

          {/* List of all quotes */}
          <div className="space-y-3">
            {testimonials.map((t, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
                onClick={() => setActive(i)}
                className={`w-full text-left p-4 border transition-all duration-300 ${
                  active === i
                    ? "border-[var(--gold)] bg-[var(--surface-2)]"
                    : "border-[var(--border)] hover:border-[var(--gold)] hover:bg-[var(--surface-2)]"
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div
                    className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                    style={{ background: active === i ? "var(--gold)" : "var(--border)" }}
                  />
                  <span className="text-xs font-medium text-[var(--foreground)]">{t.author}</span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] opacity-70 ml-auto">{t.brand}</span>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-2 pl-4">{t.quote}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* LinkedIn stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-[var(--border)] flex flex-wrap items-center gap-8"
        >
          <div>
            <div className="font-display text-4xl font-light text-[var(--gold)]">3,672</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">LinkedIn Followers</div>
          </div>
          <div>
            <div className="font-display text-4xl font-light text-[var(--gold)]">500+</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">Connections</div>
          </div>
          <div className="ml-auto">
            <a
              href="https://www.linkedin.com/in/falkoflamme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] hover:text-[var(--gold-light)] border border-[var(--gold)] px-5 py-2 transition-colors duration-300 inline-block"
            >
              View LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
