import { motion } from "framer-motion";
import { personalInfo } from "../config/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-[160px] py-10 relative z-10">
      <div className="max-w-[1440px] mx-auto px-[5vw] flex flex-col items-center gap-6">
        {/* Name */}
        <motion.span
          className="font-[var(--font-display)] text-[48px] font-bold text-[var(--color-text-primary)] opacity-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {personalInfo.name}
        </motion.span>

        {/* Social links */}
        <div className="flex gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-cyan)] transition-colors font-[var(--font-mono)] text-sm"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-cyan)] transition-colors font-[var(--font-mono)] text-sm"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="font-[var(--font-mono)] text-xs text-[var(--color-text-muted)] opacity-60">
          © 2025 {personalInfo.name}. Built with craft.
        </p>
      </div>
    </footer>
  );
}
