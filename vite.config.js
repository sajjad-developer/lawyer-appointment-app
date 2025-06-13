import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-purgecss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    htmlPurge({
      content: [
        "./index.html", // My main HTML file
        "./src/**/*.js", // My JS file
        "./src/**/*.jsx", // My React JSX components,
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
