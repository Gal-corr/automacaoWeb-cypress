const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Coloque aqui qualquer configuração adicional de eventos
    },
    baseUrl: "https://automationpratice.com.br", // URL base para os testes
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-report",
    overwrite: false,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
  }
});



