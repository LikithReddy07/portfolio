import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroData } from "../config/data";

export function MorphingText() {
  const [index, setIndex] = useState(0);
  const roles = heroData.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="relative h-[1.5em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 whitespace-nowrap"
          style={{ color: index % 2 === 0 ? "#e3e1ef" : "#00f0ff" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
