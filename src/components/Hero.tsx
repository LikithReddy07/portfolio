import { motion } from "framer-motion";
import { personalInfo, heroData } from "../config/data";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-[var(--gutter)] max-w-[var(--container-max)] mx-auto">
      <div className="pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-label uppercase tracking-widest text-text-muted mb-6"
        >
          {personalInfo.location}
        </motion.p>

        {/* Name — the centerpiece */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display text-display-xl text-text-primary mb-6"
        >
          {personalInfo.name}
          <span className="text-accent">.</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-display text-display-md text-text-secondary mb-8 max-w-[600px]"
        >
          {personalInfo.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="text-body-lg text-text-secondary max-w-[540px] leading-relaxed"
        >
          {heroData.tagline}
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mt-12 flex items-center gap-6"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-medium text-body-sm rounded-sm transition-all duration-300 ease-out hover:opacity-90 cursor-pointer"
          >
            Get in touch
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm text-text-muted hover:text-text-primary transition-colors duration-300 cursor-pointer"
          >
            View GitHub &rarr;
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-[var(--gutter)]"
      >
        <div className="w-px h-16 bg-gradient-to-b from-text-muted/60 to-transparent" />
      </motion.div>
    </section>
  );
}
