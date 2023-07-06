const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4jgp8r',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', 
    baseUrl1: 'https://black-mud-0604c9510.3.azurestaticapps.net'
  },
});
