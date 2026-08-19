import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { techStackData } from "../config/data";

// Import all SVGs statically (Vite needs static imports for assets)
import javaSvg from "../assets/vectors/java.svg";
import springSvg from "../assets/vectors/spring.svg";
import reactSvg from "../assets/vectors/react.svg";
import typescriptSvg from "../assets/vectors/typescript.svg";
import pythonSvg from "../assets/vectors/python.svg";
import nodejsSvg from "../assets/vectors/nodejs.svg";
import awsSvg from "../assets/vectors/aws.svg";
import dockerSvg from "../assets/vectors/docker.svg";
import githubActionsSvg from "../assets/vectors/githubActions.svg";
import postgreSQLSvg from "../assets/vectors/postgreSQL.svg";
import bashSvg from "../assets/vectors/bash.svg";
import gitSvg from "../assets/vectors/git.svg";
import powerPlatformSvg from "../assets/vectors/powerPlatform.svg";

// Map filenames to imported assets
const logoMap: Record<string, string> = {
  "java.svg": javaSvg,
  "spring.svg": springSvg,
  "react.svg": reactSvg,
  "typescript.svg": typescriptSvg,
  "python.svg": pythonSvg,
  "nodejs.svg": nodejsSvg,
  "aws.svg": awsSvg,
  "docker.svg": dockerSvg,
  "githubActions.svg": githubActionsSvg,
  "postgreSQL.svg": postgreSQLSvg,
  "bash.svg": bashSvg,
  "git.svg": gitSvg,
  "powerPlatform.svg": powerPlatformSvg,
};

function FloatingLogo({ name, logoFile, index }: { name: string; logoFile: string; index: number }) {
  const duration = 4 + (index % 5) * 0.8;
  const delay = index * 0.3;
  const src = logoMap[logoFile];

  return (
    <motion.div
      className="flex flex-col items-center gap-3 cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{
        scale: 1.3,
        filter: "drop-shadow(0 0 14px rgba(0, 240, 255, 0.7))",
      }}
    >
      <motion.img
        src={src}
        alt={name}
        className="w-12 h-12 md:w-16 md:h-16 object-contain"
        animate={{
          y: [0, -12, 0, 8, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="font-[var(--font-mono)] text-[10px] md:text-xs text-[var(--color-text-secondary)]">
        {name}
      </span>
    </motion.div>
  );
}

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="mb-[var(--spacing-section)] pt-20"
    >
      {/* Section Title */}
      <motion.div
        className="mb-16 flex items-center gap-6"
        style={{ y: titleY }}
      >
        <motion.h2
          className="font-[var(--font-display)] text-[48px] md:text-[80px] font-bold leading-tight tracking-[-0.02em] text-[var(--color-text-primary)] whitespace-nowrap"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Tech <span className="text-[var(--color-cyan-dim)]">Arsenal</span>
        </motion.h2>
        <motion.div
          className="h-[1px] flex-1 bg-gradient-to-r from-[var(--color-cyan-dim)] to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>

      {/* Evenly spread grid of floating logos */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-12 gap-x-6 place-items-center py-12">
        {techStackData.map((item, index) => (
          <FloatingLogo
            key={item.name}
            name={item.name}
            logoFile={item.logoFile}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
