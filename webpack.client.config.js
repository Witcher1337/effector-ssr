const { merge } = require('webpack-merge');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const sharedConfig = require('./webpack.shared.config');

const config = {
  name: "client",
  entry: path.resolve(__dirname, "src/client.tsx"),
  devServer: {
    open: false,
    host: "localhost",
  },
  plugins: [],
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist/client"),
  },
};


module.exports = () => {
  if (sharedConfig.mode) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return merge(config, sharedConfig);
};

