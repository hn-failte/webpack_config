const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, ".."),
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/public/index.html"),
      filename: "index.html"
    })
  ],
  resolve: {
    alias: {
      "@": "/src"
    },
    extensions: [".js", ".jsx", ".json", ".es6", ".node"]
  }
};
