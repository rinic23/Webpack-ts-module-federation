const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // указываем путь к корневому файлу нашего приложения
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    // говорим вебпаку что если не нашёл файл указанный в enty можешь
    // поискать в файлах с другими расширениями
    extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
  },
  module: {
    // говорим что babel-loader должен использовать загрузчик для всех
    // файлов в проекте кроме файлов из node-modules
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
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
  ],
};
