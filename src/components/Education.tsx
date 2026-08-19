import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { educationData } from "../config/data";

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
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
          04
        </p>
        <h2 className="font-display text-display-md text-text-primary">
          Education
        </h2>
      </motion.div>

      {/* Entries */}
      <div className="space-y-0">
        {educationData.map((entry, i) => (
          <motion.div
            key={entry.institution}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1 * i,
            }}
            className="py-6 border-t border-border first:border-t-0 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8"
          >
            <div className="md:col-span-4">
              <p className="font-mono text-body-sm text-text-muted">
                {entry.period}
              </p>
            </div>
            <div className="md:col-span-8">
              <h3 className="font-display text-body-lg font-semibold text-text-primary">
                {entry.degree}
                {entry.major && (
                  <span className="text-text-secondary font-normal">
                    {" "}
                    [Major : {entry.major}]
                  </span>
                )}
              </h3>
              <p className="text-body-md text-text-muted mt-1">
                {entry.institution}
                {entry.location && `, ${entry.location}`}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
