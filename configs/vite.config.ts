import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./../index.html"),
        notFound: resolve(__dirname, "./../public/404.html"),
      },
    },
  },
});
