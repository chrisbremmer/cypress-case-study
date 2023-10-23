const { defineConfig } = require("cypress");

// Configuration for Cypress. This can be extended with more configurations as needed
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://vuoriclothing.com', // Default base URL for end-to-end tests
    setupNodeEvents(on, config) {
      // Event listeners for Node can be added here
    }
  },
});
