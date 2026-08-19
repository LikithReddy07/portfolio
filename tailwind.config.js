/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        base: "#0a0a0f",
        surface: {
          DEFAULT: "#12121c",
          dim: "#0d0d17",
          elevated: "#1f1f29",
          bright: "#292934",
        },
        cyan: {
          DEFAULT: "#00f0ff",
          dim: "#00dbe9",
        },
        violet: {
          DEFAULT: "#7000ff",
          dim: "#5700c9",
        },
        gold: "#f5a623",
      },
    },
  },
  plugins: [],
};
