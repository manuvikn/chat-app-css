const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "chatAppCss",

  exposes: {
    // Update this whole line (both, left and right part):
    "./ChatAppCssModule": "./src/app/chat-app-css/chat-app-css.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
