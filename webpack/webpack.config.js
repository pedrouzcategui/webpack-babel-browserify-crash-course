const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: './webpack/src/index.js',
        print: './webpack/src/print.js'
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}),
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
        filename: "[name].bundle.js", // Dinamically names
        path: path.resolve(__dirname, "dist")
    },
}