import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { techStackData } from "../config/data";

export function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="tech"
      ref={ref}
      className="px-[var(--gutter)] max-w-[var(--container-max)] mx-auto py-[var(--section-gap)]"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <p className="font-mono text-label uppercase tracking-widest text-text-muted mb-2">
          02
        </p>
        <h2 className="font-display text-display-md text-text-primary">
          Technologies
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
        {techStackData.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.05 * i,
            }}
            className="flex flex-col items-center gap-3 group cursor-default"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-md bg-surface border border-border transition-all duration-300 group-hover:border-accent/30 group-hover:bg-surface-elevated">
              <img
                src={`/src/assets/vectors/${tech.logoFile}`}
                alt={tech.name}
                className="w-7 h-7 md:w-8 md:h-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
            <span className="text-body-sm text-text-muted group-hover:text-text-secondary transition-colors duration-300 text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
