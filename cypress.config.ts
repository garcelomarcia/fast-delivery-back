import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  screenshotsFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      
    }
  }
});
