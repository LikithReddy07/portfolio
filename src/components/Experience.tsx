import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData, ExperienceEntry } from "../config/data";

function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const accentColor = entry.chipStyle === "cyan" ? "#00f0ff" : "#d1bcff";
  const accentBg = entry.chipStyle === "cyan" ? "rgba(0, 240, 255, 0.07)" : "rgba(209, 188, 255, 0.07)";

  return (
    <motion.div
      ref={ref}
      className="rounded-xl p-8 relative group overflow-hidden"
      style={{
        background: "rgba(30, 30, 45, 0.7)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        borderColor: "rgba(0, 240, 255, 0.3)",
        y: -4,
        transition: { duration: 0.3 },
      }}
    >
      {/* Accent shape */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-bl-full -z-10 transition-colors duration-300"
        style={{
          background: accentBg,
        }}
      />

      {/* Awards badge */}
      {entry.awards && (
        <div className="absolute top-8 right-8 flex items-center gap-2 bg-[rgba(245,166,35,0.15)] border border-[rgba(245,166,35,0.4)] px-3 py-1 rounded-full">
          <span className="text-sm">🏆</span>
          <span className="font-[var(--font-mono)] text-xs text-[var(--color-gold)]">
            6x Award Winner
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{entry.icon}</span>
            <h3 className="font-[var(--font-display)] text-[32px] font-semibold text-white">
              {entry.company}
            </h3>
          </div>
          <p className="font-[var(--font-mono)] text-sm" style={{ color: accentColor }}>
            {entry.role} | {entry.period}
          </p>
          <p className="font-[var(--font-body)] text-sm text-[#a0b0b2] mt-1">
            {entry.subtitle}
          </p>
        </div>
      </div>

      {/* Achievements */}
      <ul className="space-y-3 mb-8">
        {entry.achievements.map((achievement, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-3 text-[#b8c8ca] text-base leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
          >
            <span style={{ color: accentColor }} className="mt-1.5 text-sm">
              ▹
            </span>
            <span>{achievement}</span>
          </motion.li>
        ))}
      </ul>

      {/* Tech Chips */}
      <div className="flex flex-wrap gap-3">
        {entry.chips.map((chip) => (
          <span
            key={chip}
            className={entry.chipStyle === "cyan" ? "tech-chip" : "tech-chip tech-chip-violet"}
          >
            {chip}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="mb-[var(--spacing-section)] pt-20"
    >
      <motion.h2
        className="font-[var(--font-display)] text-[48px] md:text-[80px] font-bold leading-tight tracking-[-0.02em] text-[var(--color-text-primary)] mb-16 text-right"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Execution <span className="text-[#d1bcff]">Logs</span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-8">
        {experienceData.map((entry, index) => (
          <ExperienceCard key={entry.company} entry={entry} index={index} />
        ))}
      </div>
    </section>
  );
}
