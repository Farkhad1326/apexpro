import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from '@tailwindcss/vite' // <--- ƏSAS BU SƏTİR ÇATMIRDI

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- Plugini bura əlavə edirik
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})