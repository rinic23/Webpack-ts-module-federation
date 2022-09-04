const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // указываем путь к корневому файлу нашего приложения
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    preferRelative: true,
    // говорим вебпаку что если не нашёл файл указанный в enty можешь
    // поискать в файлах с другими расширениями
    extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
    alias: {
      shared: path.resolve(__dirname, '..', 'src/shared'),
      hooks: path.resolve(__dirname, '..', 'src/hooks'),
      services: path.resolve(__dirname, '..', 'src/services'),
    },
  },
  module: {
    // говорим что babel-loader должен использовать загрузчик для всех
    // файлов в проекте кроме файлов из node-modules
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },

      {
        test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    // говорим куда будем складывать наш билд
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },

  plugins: [
    // вствляет bundle.js в index.html(не надо указывать тег script) и помещает его в build
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new Dotenv({
      path: './enviroment/development.env',
      safe: true,
    }),
  ],
};
