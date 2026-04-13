// Tailwind v4 — theme tokens defined in globals.css via @theme
// This file only needed for content paths
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
};
export default config;
