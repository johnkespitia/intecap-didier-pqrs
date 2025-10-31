import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    viewportHeight: 720,
    viewportWidth: 1280,
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', vitePreprocessor({
        configFile: './vite.config.js',
        mode: 'development',
      })) 
    },
  },
});
