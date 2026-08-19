import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { educationData } from "../config/data";

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const primary = educationData[0];
  const secondary = educationData.slice(1);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="mb-[var(--spacing-section)] pt-20"
    >
      <motion.h2
        className="font-[var(--font-display)] text-[48px] md:text-[80px] font-bold leading-tight tracking-[-0.02em] text-[var(--color-text-primary)] mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Education
      </motion.h2>

      {/* Bento grid: left = BE (tall), right = PU + School stacked */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bachelor's — tall card spanning full left height */}
        <motion.div
          className="rounded-xl p-8 md:p-10 relative row-span-2 flex flex-col justify-center"
          style={{
            background: "rgba(30, 30, 45, 0.7)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(0, 240, 255, 0.15)",
          }}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[rgba(0,240,255,0.08)] rounded-bl-full" />

          <span className="text-4xl mb-4">{primary.icon}</span>
          <h3 className="font-[var(--font-display)] text-[28px] md:text-[36px] font-bold text-white leading-tight mb-2">
            {primary.degree}
          </h3>
          {primary.major && (
            <p className="font-[var(--font-mono)] text-sm text-[var(--color-cyan)] mb-4">
              Major: {primary.major}
            </p>
          )}
          <p className="font-[var(--font-body)] text-lg text-[#c0d0d2] mb-6">
            {primary.institution}
          </p>
          <div className="flex items-center gap-3">
            <span className="font-[var(--font-mono)] text-sm text-[var(--color-cyan)]">
              {primary.period}
            </span>
            {primary.location && (
              <>
                <span className="text-[#607070]">•</span>
                <span className="font-[var(--font-mono)] text-sm text-[#a0b0b2]">
                  {primary.location}
                </span>
              </>
            )}
          </div>
        </motion.div>

        {/* Secondary entries stacked on the right */}
        {secondary.map((entry, i) => (
          <motion.div
            key={entry.institution}
            className="rounded-xl p-6 md:p-8 flex flex-col justify-center"
            style={{
              background: "rgba(30, 30, 45, 0.7)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 + i * 0.15 }}
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">{entry.icon}</span>
              <div>
                <h3 className="font-[var(--font-display)] text-[20px] md:text-[24px] font-semibold text-white leading-tight">
                  {entry.degree}
                </h3>
                <p className="font-[var(--font-body)] text-base text-[#c0d0d2] mt-1">
                  {entry.institution}
                </p>
                <span className="font-[var(--font-mono)] text-sm text-[#a0b0b2] mt-2 inline-block">
                  {entry.period}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
