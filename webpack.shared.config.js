const { HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV == "production" ? "production" : "development",
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/bundle-[contenthash].css',
      chunkFilename: 'assets/css/bundle-[contenthash].css'
    }),
    new LoadablePlugin()
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".scss"],
  },
};