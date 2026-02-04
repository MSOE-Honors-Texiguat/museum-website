import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  // Serve static assets (e.g., og_preview.jpg) from the public directory during build.
  publicDir: "public",
  server: {
    allowedHosts: ["samfreund.dev"],
  },
});
