"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — wire to Supabase or Resend later
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  return (
    <section id="contact" ref={ref} className="relative py-40 px-6 overflow-hidden">
      {/* Gold line */}
      <div className="gold-line max-w-7xl mx-auto mb-24" />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, var(--gold) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[var(--gold)]" />
              <span className="text-xs tracking-[0.4em] uppercase text-[var(--gold)]">Get In Touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-7xl font-light leading-[1.05] mb-8"
            >
              Let&apos;s build
              <br />
              <span className="italic text-gold-gradient">something real.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[var(--muted)] leading-relaxed text-base max-w-md mb-10"
            >
              If you&apos;re an investor, co-founder, or strategic partner who sees the same opportunities —
              let&apos;s talk. Direct, honest, no fluff.
            </motion.p>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="space-y-4"
            >
              {[
                { label: "Based in", value: "Frankfurt, Germany" },
                { label: "Building since", value: "2008" },
                { label: "Looking for", value: "Investors · Co-Founders · Partners" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] w-28">{item.label}</div>
                  <div className="h-px flex-1 bg-[var(--border)]" />
                  <div className="text-sm text-[var(--foreground)]">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <div className="border border-[var(--gold)] p-12 text-center">
                <div className="font-display text-4xl italic text-[var(--gold)] mb-4">Received.</div>
                <p className="text-sm text-[var(--muted)]">Falko will be in touch personally.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Your Name", type: "text", required: true },
                  { name: "email", label: "Email Address", type: "email", required: true },
                  { name: "company", label: "Company / Fund", type: "text", required: false },
                ].map((field) => (
                  <div key={field.name} className="relative group">
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      placeholder={field.label}
                      className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--gold)] text-[var(--foreground)] placeholder:text-[var(--muted)] px-5 py-4 text-sm outline-none transition-colors duration-300"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[var(--gold)] group-focus-within:w-full transition-all duration-500" />
                  </div>
                ))}

                <div className="relative group">
                  <textarea
                    name="message"
                    required
                    placeholder="Tell me about your interest..."
                    rows={4}
                    className="w-full bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--gold)] text-[var(--foreground)] placeholder:text-[var(--muted)] px-5 py-4 text-sm outline-none transition-colors duration-300 resize-none"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[var(--gold)] group-focus-within:w-full transition-all duration-500" />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[var(--gold)] text-black text-xs tracking-[0.3em] uppercase font-medium hover:bg-[var(--gold-light)] disabled:opacity-60 transition-all duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
