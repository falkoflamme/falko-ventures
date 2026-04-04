"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ventures = [
  { name: "HiddenJobber", som: 180, color: "#3730a3" },
  { name: "MaxiJobber", som: 80, color: "#1d4ed8" },
  { name: "Stay4Skill", som: 10, color: "#b45309" },
  { name: "RITLOOP", som: 5, color: "#16a34a" },
  { name: "Insider Keys", som: 3, color: "#0f766e" },
  { name: "WallsUp", som: 2.5, color: "#15803d" },
];

function useCountUp(target: number, duration = 600) {
  const [value, setValue] = useState(target);
  const prev = useRef(target);

  useEffect(() => {
    const start = prev.current;
    const delta = target - start;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(start + delta * eased);
      if (progress < 1) requestAnimationFrame(tick);
      else prev.current = target;
    };

    requestAnimationFrame(tick);
  }, [target, duration]);

  return value;
}

function fmt(n: number) {
  if (n >= 1000) return `€${(n / 1000).toFixed(1)}B`;
  if (n >= 1) return `€${n.toFixed(1)}M`;
  return `€${(n * 1000).toFixed(0)}K`;
}

export default function Calculator() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(3);

  const selected = ventures.slice(0, count);
  const combinedSOM = selected.reduce((s, v) => s + v.som, 0);
  const arr = combinedSOM * 0.05;
  const exit = arr * 8;

  const animSOM = useCountUp(combinedSOM);
  const animARR = useCountUp(arr);
  const animExit = useCountUp(exit);

  return (
    <section id="calculator" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="gold-line max-w-7xl mx-auto mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-[var(--gold)]" />
          <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">Portfolio Calculator</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-7xl font-light leading-[1.05] mb-4"
        >
          Run the numbers
          <br />
          <span className="italic text-gold-gradient">yourself.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[var(--muted)] text-sm leading-relaxed max-w-md mb-14"
        >
          Wähle wie viele Ventures du im Portfolio siehst. Konservativ: 5% SOM-Capture. Exit: 8× ARR.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* LEFT — Slider + Venture list */}
          <div className="p-8 border border-[var(--border)] bg-[var(--surface)]">
            {/* Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--muted)]">Ventures selected</span>
                <span className="font-display text-3xl font-light text-[var(--gold)]">{count} / 6</span>
              </div>

              <input
                type="range"
                min={1}
                max={6}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-full appearance-none h-0.5 bg-[var(--border)] outline-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--gold) ${((count - 1) / 5) * 100}%, rgba(201,168,76,0.15) ${((count - 1) / 5) * 100}%)`,
                }}
              />
              <div className="flex justify-between mt-2">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <span key={n} className={`text-[9px] tracking-widest ${n === count ? "text-[var(--gold)]" : "text-[var(--muted)] opacity-40"}`}>
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {/* Venture list */}
            <div className="space-y-2">
              {ventures.map((v, i) => {
                const active = i < count;
                return (
                  <motion.div
                    key={v.name}
                    animate={{ opacity: active ? 1 : 0.25 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between py-2.5 border-b border-[var(--border)]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{ background: active ? v.color : "var(--border)" }}
                      />
                      <span className="text-xs text-[var(--foreground)]">{v.name}</span>
                    </div>
                    <span className={`text-[10px] tracking-[0.2em] font-light ${active ? "text-[var(--gold)]" : "text-[var(--muted)]"}`}>
                      €{v.som}M SOM
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Results */}
          <div className="flex flex-col gap-4">
            {/* Combined SOM */}
            <div className="flex-1 p-8 border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--gold)] transition-colors duration-300">
              <div className="text-[9px] tracking-[0.5em] uppercase text-[var(--muted)] mb-3">Combined SOM</div>
              <div className="font-display text-5xl md:text-6xl font-light text-[var(--foreground)] leading-none">
                {fmt(animSOM)}
              </div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-[var(--muted)] mt-2 opacity-60">
                Serviceable Obtainable Market
              </div>
            </div>

            {/* ARR */}
            <div className="flex-1 p-8 border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--gold)] transition-colors duration-300">
              <div className="text-[9px] tracking-[0.5em] uppercase text-[var(--muted)] mb-3">ARR @ 5% Capture</div>
              <div className="font-display text-5xl md:text-6xl font-light text-[var(--gold)] leading-none">
                {fmt(animARR)}
              </div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-[var(--muted)] mt-2 opacity-60">
                Annual Recurring Revenue
              </div>
            </div>

            {/* Exit */}
            <div className="flex-1 p-8 border border-[var(--gold)] bg-[var(--surface)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
              <div className="text-[9px] tracking-[0.5em] uppercase text-[var(--gold)] mb-3">Exit Value @ 8× ARR</div>
              <div className="font-display text-5xl md:text-6xl font-light text-gold-gradient leading-none">
                {fmt(animExit)}
              </div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-[var(--muted)] mt-2 opacity-60">
                Conservative exit multiple
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[9px] text-[var(--muted)] opacity-40 mt-6 text-center"
        >
          Illustrative projections based on SOM estimates from individual pitch decks. Not financial advice.
        </motion.p>
      </div>

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--gold);
          cursor: pointer;
          border: 2px solid var(--background);
          box-shadow: 0 0 0 1px var(--gold);
        }
        input[type='range']::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--gold);
          cursor: pointer;
          border: 2px solid var(--background);
        }
      `}</style>
    </section>
  );
}
