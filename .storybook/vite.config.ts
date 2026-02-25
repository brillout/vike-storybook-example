import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Minimal Vite config for Storybook — Vike is intentionally excluded
// because Storybook sets base:'./' which is incompatible with Vike.
export default defineConfig({
  plugins: [react()],
});
