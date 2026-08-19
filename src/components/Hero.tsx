import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { personalInfo, heroData } from "../config/data";

export function Hero() {
  const containerRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Cycle roles every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroData.roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Parallax: text moves slower, decorative elements move faster
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const decoY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const decoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-[var(--gutter)] max-w-[var(--container-max)] mx-auto overflow-hidden"
    >
      {/* Large decorative number — parallax layer */}
      <motion.div
        style={{ y: decoY, opacity: decoOpacity }}
        className="absolute top-[15%] right-[5%] select-none pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <span className="font-display text-[20rem] font-bold leading-none text-white/[0.02]">
          LR
        </span>
      </motion.div>

      {/* Accent line — decorative */}
      <motion.div
        style={{ y: decoY }}
        className="absolute top-[30%] right-[15%] w-px h-[200px] bg-gradient-to-b from-accent/40 to-transparent hidden md:block"
        aria-hidden="true"
      />

      {/* Main content — parallax layer */}
      <motion.div style={{ y: textY }} className="pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
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

        {/* Role — cycling */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-display text-display-md text-text-secondary mb-8 max-w-[600px] h-[1.3em] relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={heroData.roles[roleIndex]}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute"
            >
              {heroData.roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

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
      </motion.div>

      {/* Scroll indicator — fades on scroll */}
      <motion.div
        style={{ opacity: decoOpacity }}
        className="absolute bottom-10 left-[var(--gutter)]"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted/50 [writing-mode:vertical-lr]">
            scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-text-muted/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
