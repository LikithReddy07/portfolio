import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { techStackData } from "../config/data";

// Import all vector SVGs statically so Vite can resolve them
const logos = import.meta.glob("../assets/vectors/*.svg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;

function getLogoUrl(filename: string): string {
  const key = `../assets/vectors/${filename}`;
  return logos[key] || "";
}

// Shuffle array deterministically for visual variety between rows
function shuffleArray<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = (seed * (i + 1)) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const row1 = [...techStackData, ...techStackData];
  const row2 = [...shuffleArray(techStackData, 7), ...shuffleArray(techStackData, 7)];
  const row3 = [...shuffleArray(techStackData, 13), ...shuffleArray(techStackData, 13)];

  return (
    <section
      id="tech"
      ref={ref}
      className="min-h-screen flex flex-col justify-center py-[var(--section-gap)] overflow-hidden"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="px-[var(--gutter)] max-w-[var(--container-max)] mx-auto mb-16 w-full"
      >
        <p className="font-mono text-label uppercase tracking-widest text-text-muted mb-2">
          02
        </p>
        <h2 className="font-display text-display-md text-text-primary">
          Technologies
        </h2>
      </motion.div>

      {/* Marquee rows — stacked with different speeds/directions */}
      <div className="flex flex-col gap-5">
        {/* Row 1 — left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="scroll-fade-left"
        >
          <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused]">
            {row1.map((tech, i) => (
              <TechChip key={`r1-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </motion.div>

        {/* Row 2 — right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="scroll-fade-left"
        >
          <div className="flex gap-5 animate-marquee-reverse hover:[animation-play-state:paused]">
            {row2.map((tech, i) => (
              <TechChip key={`r2-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </motion.div>

        {/* Row 3 — left, slower */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="scroll-fade-left"
        >
          <div className="flex gap-5 animate-marquee-slow hover:[animation-play-state:paused]">
            {row3.map((tech, i) => (
              <TechChip key={`r3-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TechChip({ tech }: { tech: (typeof techStackData)[number] }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-md border border-border bg-surface/50 hover:border-accent/30 hover:bg-surface-elevated transition-all duration-300 group cursor-default">
      <img
        src={getLogoUrl(tech.logoFile)}
        alt=""
        aria-hidden="true"
        className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
      />
      <span className="text-body-md text-text-secondary group-hover:text-text-primary transition-colors duration-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}
