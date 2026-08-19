import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "../config/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop nav */}
      <motion.nav
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 rounded-full px-6 py-3 z-50 items-center gap-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: scrolled ? "rgba(10, 10, 15, 0.8)" : "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: scrolled ? "0 0 30px rgba(0, 0, 0, 0.4)" : "none",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
      >
        <a
          href="#"
          className="font-[var(--font-display)] text-xl font-bold text-[var(--color-cyan-dim)] tracking-tighter"
        >
          {personalInfo.name}
        </a>

        <div className="flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="bg-[var(--color-cyan)] text-black px-4 py-2 rounded-full font-[var(--font-mono)] text-xs font-medium hover:brightness-125 transition-all"
        >
          Resume
        </a>
      </motion.nav>

      {/* Mobile nav toggle */}
      <motion.button
        className="md:hidden fixed top-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          background: "rgba(10, 10, 15, 0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        onClick={() => setMobileOpen(!mobileOpen)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        aria-label="Toggle navigation menu"
      >
        <span className="text-[var(--color-text-primary)] text-lg">
          {mobileOpen ? "✕" : "☰"}
        </span>
      </motion.button>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{
              background: "rgba(10, 10, 15, 0.95)",
              backdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="font-[var(--font-display)] text-3xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-cyan)] transition-colors"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#"
              className="bg-[var(--color-cyan)] text-black px-6 py-3 rounded-full font-[var(--font-mono)] text-sm font-medium mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
