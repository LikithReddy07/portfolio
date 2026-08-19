/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg: "#0c0c0c",
        surface: {
          DEFAULT: "#141414",
          elevated: "#1a1a1a",
        },
        border: "rgba(255, 255, 255, 0.08)",
        text: {
          primary: "#f0ede8",
          secondary: "#a8a29e",
          muted: "#6b6560",
        },
        accent: {
          DEFAULT: "#e8c574",
          dim: "rgba(232, 197, 116, 0.15)",
        },
      },
      spacing: {
        section: "clamp(120px, 15vh, 200px)",
        gutter: "clamp(20px, 5vw, 80px)",
      },
      maxWidth: {
        container: "1200px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "1.0", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "label": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
