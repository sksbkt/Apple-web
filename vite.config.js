import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 2000,
    sourcemap: true
  },
  plugins: [react(), sentryVitePlugin({
    org: "quantic-k9",
    project: "javascript-react"
  })],
});