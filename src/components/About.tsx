import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData } from "../config/data";
import myselfImg from "../assets/myself.png";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Build bio with highlighted keywords
  const renderBio = () => {
    let bioText = aboutData.bio;
    const parts: { text: string; highlight: boolean }[] = [];

    // Sort keywords by length descending to match longer phrases first
    const sorted = [...aboutData.highlightedKeywords].sort(
      (a, b) => b.length - a.length
    );

    // Simple split approach
    let remaining = bioText;
    while (remaining.length > 0) {
      let earliestIndex = remaining.length;
      let matchedKeyword = "";

      for (const kw of sorted) {
        const idx = remaining.toLowerCase().indexOf(kw.toLowerCase());
        if (idx !== -1 && idx < earliestIndex) {
          earliestIndex = idx;
          matchedKeyword = kw;
        }
      }

      if (matchedKeyword) {
        if (earliestIndex > 0) {
          parts.push({ text: remaining.slice(0, earliestIndex), highlight: false });
        }
        parts.push({ text: remaining.slice(earliestIndex, earliestIndex + matchedKeyword.length), highlight: true });
        remaining = remaining.slice(earliestIndex + matchedKeyword.length);
      } else {
        parts.push({ text: remaining, highlight: false });
        remaining = "";
      }
    }

    return parts.map((part, i) =>
      part.highlight ? (
        <span
          key={i}
          className="text-[var(--color-cyan)] font-bold"
          style={{ textShadow: "0 0 8px rgba(0, 219, 233, 0.6)" }}
        >
          {part.text}
        </span>
      ) : (
        <span key={i}>{part.text}</span>
      )
    );
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="mb-[var(--spacing-section)] pt-20"
    >
      <motion.h2
        className="font-[var(--font-display)] text-[48px] md:text-[80px] font-bold leading-tight tracking-[-0.02em] text-[var(--color-text-primary)] mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        System <span className="text-[var(--color-cyan-dim)]">Overview</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-gutter)]">
        {/* Profile Image with Morphing Blob */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="w-full aspect-square overflow-hidden relative"
            style={{
              animation: "morphBlob 20s linear infinite",
              boxShadow: "0 0 50px rgba(0, 219, 233, 0.2)",
            }}
          >
            {/* Your photo */}
            <img
              src={myselfImg}
              alt="Likith"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </motion.div>

        {/* Bio & Stats */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            className="glass-card p-8 rounded-xl mb-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="font-[var(--font-body)] text-lg leading-8 text-[var(--color-text-secondary)]">
              {renderBio()}
            </p>
          </motion.div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            {aboutData.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 rounded-lg text-center flex flex-col items-center justify-center relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                {stat.label === "Awards Won" && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(245,166,35,0.08)] to-transparent" />
                )}
                <span
                  className="font-[var(--font-display)] text-[48px] font-bold mb-2"
                  style={{
                    color:
                      stat.label === "Awards Won"
                        ? "var(--color-gold)"
                        : stat.label === "Industries"
                        ? "#d1bcff"
                        : "var(--color-cyan)",
                  }}
                >
                  {stat.value}
                </span>
                <span className="font-[var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
