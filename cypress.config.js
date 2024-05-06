import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'za86rv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
  },
});
