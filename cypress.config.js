module.exports = {
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://katalon-demo-cura.herokuapp.com/",
  },
};
