const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sing-spa-test",
    projectName: "store-events",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
        port: 8082,
    },
  });
};
