import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "../config/data";

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
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
          03
        </p>
        <h2 className="font-display text-display-md text-text-primary">
          Experience
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="space-y-0">
        {experienceData.map((job, i) => (
          <ExperienceCard key={job.company} job={job} index={i} parentInView={inView} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
  job,
  index,
  parentInView,
}: {
  job: (typeof experienceData)[number];
  index: number;
  parentInView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={parentInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.15 * index,
      }}
      className="py-10 border-t border-border first:border-t-0"
    >
      {/* Header row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mb-6">
        <div className="md:col-span-4">
          <p className="font-mono text-body-sm text-text-muted">{job.period}</p>
        </div>
        <div className="md:col-span-8">
          <h3 className="font-display text-[1.25rem] font-semibold text-text-primary leading-tight">
            {job.role}
          </h3>
          <p className="text-body-md text-text-secondary mt-1">
            {job.company}
            <span className="text-text-muted"> — {job.subtitle}</span>
          </p>
        </div>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        <div className="md:col-span-4" />
        <div className="md:col-span-8">
          <ul className="space-y-3 mb-6">
            {job.achievements.map((item, i) => (
              <li
                key={i}
                className="text-body-md text-text-secondary pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-px before:bg-text-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2">
            {job.chips.map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 rounded-sm bg-surface border border-border text-body-sm text-text-muted font-mono"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Awards */}
          {job.awards && (
            <p className="mt-4 text-body-sm text-accent/80 font-medium">
              {job.awards}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
