const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.shared.config');
const path = require("path");

const { RunScriptWebpackPlugin } = require("run-script-webpack-plugin");

const config = {
  name: "server",
  target: "node",
  devtool: 'cheap-module-source-map',
  entry: [
    sharedConfig.mode !== "production" && 'webpack/hot/poll?100',
    'source-map-support/register',
    path.resolve(__dirname, "src/server.tsx"),
  ].filter(Boolean),
  output: {
    clean: true,
    path: path.resolve(__dirname, `./dist/server`),
    filename: 'index.js',
  },
  plugins: []
};

if (sharedConfig.mode === "development") {
  config.plugins.push(new RunScriptWebpackPlugin({
    name: 'index.js',
    nodeArgs: ['--inspect'],
    signal: false,
    keyboard: false,
  }))
}

module.exports = merge(config, sharedConfig);