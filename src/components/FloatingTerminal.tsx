import { motion } from "framer-motion";

export function FloatingTerminal() {
  return (
    <motion.div
      className="glass-card rounded-lg p-4 w-72 -rotate-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      {/* Traffic lights */}
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      {/* Terminal content */}
      <div className="font-[var(--font-mono)] text-sm leading-relaxed">
        <span className="text-[var(--color-text-muted)]">~/ </span>
        <span className="text-[var(--color-cyan)]">
          git commit -m &quot;shipped to prod&quot;
        </span>
        <br />
        <span className="text-[var(--color-text-secondary)]">
          ✓ [main 4b825dc] shipped to prod
        </span>
        <br />
        <span className="text-[var(--color-text-secondary)]">
          &nbsp; 12 files changed, 847 insertions(+)
        </span>
      </div>
    </motion.div>
  );
}
