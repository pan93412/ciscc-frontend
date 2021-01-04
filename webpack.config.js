/* eslint-disable */
// Due to some issues of ESLint, I disabled these statements.
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/* eslint-enable */

module.exports = {
  mode: "development",
  entry: "./src/index.ts",

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "main.[contenthash].css" }),
    new webpack.EnvironmentPlugin(["BACKEND_URL"]),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [/node_modules/],
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /.s(?:a|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: false,
    },
  },
};
