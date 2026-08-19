import { motion } from "framer-motion";
import { MorphingText } from "./MorphingText";
import { Icosahedron } from "./Icosahedron";
import { FloatingTerminal } from "./FloatingTerminal";
import { personalInfo, heroData } from "../config/data";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-32 pb-[160px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side — Text */}
        <div className="z-10">
          <motion.h1
            className="font-[var(--font-display)] text-[48px] md:text-[120px] font-bold leading-[1.1] tracking-[-0.04em] text-gradient mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            className="font-[var(--font-display)] text-[32px] leading-[40px] font-semibold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <MorphingText />
          </motion.div>

          <motion.p
            className="font-[var(--font-body)] text-lg leading-7 text-[var(--color-text-secondary)] max-w-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {heroData.tagline}
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="bg-[var(--color-cyan)] text-black px-8 py-4 rounded-full font-[var(--font-mono)] text-sm font-medium hover:brightness-125 transition-all hover:scale-105 inline-block"
            >
              Let&apos;s Connect
            </a>
            <a
              href="#experience"
              className="glass-panel px-8 py-4 rounded-full font-[var(--font-mono)] text-sm text-[var(--color-text-primary)] hover:text-[var(--color-cyan)] transition-all hover:scale-105 inline-block"
            >
              View Experience
            </a>
          </motion.div>
        </div>

        {/* Right side — 3D Icosahedron + Terminal */}
        <div className="relative h-[500px] lg:h-[600px] w-full z-0 hidden lg:block">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Icosahedron />
          </motion.div>

          {/* Floating Terminal */}
          <div className="absolute bottom-10 left-[-30px]">
            <FloatingTerminal />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ animation: "bounce 2s infinite" }}
      >
        <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2">
          Scroll
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[var(--color-text-muted)]"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
