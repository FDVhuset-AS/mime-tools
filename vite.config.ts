import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: "./src/mime-tools.ts",
      name: "mime-tools",
      formats: ["es"],
      fileName: "mime-tools",
    },
  },
})
