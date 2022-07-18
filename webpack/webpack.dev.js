const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  plugins: [
    new Dotenv({
      path: "./enviroment/development.env",
      safe: true,
    }),
  ],
};
