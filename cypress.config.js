const { defineConfig } = require("cypress");

const exampleBaseUrl = "https://localhost.someDomain.com:3001/";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = exampleBaseUrl;

      return config;
    },
    // Uncomment the line below and the test loads properly
    // baseUrl: exampleBaseUrl
  },
  // Removing the port setting also fixes the issue
  port: 3000
});
