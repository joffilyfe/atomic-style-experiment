const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const package = require('./package.json');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Atomic style experiment",
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  watch: true,
  resolve: { extensions: [".js", ".ts"] },
  entry: {
    app: "./src/scripts/app.js",
  },
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/, use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}