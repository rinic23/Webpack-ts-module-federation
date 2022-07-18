const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => {
  const config = {
    // указываем путь к корневому файлу нашего приложения
    entry: path.resolve(__dirname, "./src/index.tsx"),
    resolve: {
      // говорим вебпаку что если не нашёл файл указанный в enty можешь поискать в файлах с другими расширениями
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      // говорим что babel-loader должен использовать загрузчик для всех файлов в проекте кроме файлов из node-modules
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
      ],
    },
    output: {
      // говорим куда будем складывать наш билд
      path: path.resolve(__dirname, "./build"),
      filename: "bundle.js",
    },

    plugins: [
      // вствляет bundle.js в index.html(не надо указывать тег script) и помещает его в build
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/index.html"),
      }),
    ],
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };

  // выбираем нужный нам мод
  if (argv.mode === "development") {
    config.mode = "development";
    config.plugins.push(
      new Dotenv({
        path: "./enviroment/development.env",
        safe: true,
      })
    );
  } else if (argv.mode === "production") {
    config.mode = "production";
    config.plugins.push(
      new Dotenv({
        path: "./enviroment/production.env",
        safe: true,
      })
    );
  } else {
    config.mode = "none";
  }
  console.log(config.mode);

  return config;
};
