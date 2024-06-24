//
//

const { startDevServer } = require("@cypress/webpack-dev-server");
const webpackConfig = require("@cypress/react/plugins/next-webpack-config");

module.exports = (on, config) => {
  on("dev-server:start", async (options) => {
    return startDevServer({ options, webpackConfig });
  });

  return config;
};
