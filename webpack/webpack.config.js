const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (envVars) => {
  const { env } = envVars;

  // мерджим дефолтный конфиг и конфиг окружения в котором мы запускаем наше приложение
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);

  return config;
};
