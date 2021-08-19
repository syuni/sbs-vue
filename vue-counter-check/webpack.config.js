const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: {
    index: path.join(__dirname, "src", "index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name]-[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      inject: "head"
    }),
    new VueLoaderPlugin()
  ]
};
