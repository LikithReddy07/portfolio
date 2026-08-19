import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData } from "../config/data";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center px-[var(--gutter)] max-w-[var(--container-max)] mx-auto py-[var(--section-gap)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left — section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-3"
        >
          <p className="font-mono text-label uppercase tracking-widest text-text-muted mb-2">
            01
          </p>
          <h2 className="font-display text-display-md text-text-primary">
            About
          </h2>
        </motion.div>

        {/* Right — content */}
        <div className="lg:col-span-9 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-body-lg text-text-secondary leading-relaxed max-w-[640px]"
          >
            {aboutData.bio}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="flex gap-12 pt-4"
          >
            {aboutData.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-display-md text-accent">
                  {stat.value}
                </p>
                <p className="text-body-sm text-text-muted mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
