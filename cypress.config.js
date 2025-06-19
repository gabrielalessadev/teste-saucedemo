const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    },
  },
});