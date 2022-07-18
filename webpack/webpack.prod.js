const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production",
  plugins: [
    new Dotenv({
      path: "./enviroment/production.env",
      safe: true,
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
