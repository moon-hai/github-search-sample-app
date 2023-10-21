import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 9000,
    host: "0.0.0.0",
  },

  css: {
    postcss: "./postcss.config.cjs",
    modules: {
      generateScopedName: "[name]_[local]__[hash:base64:5]",
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
