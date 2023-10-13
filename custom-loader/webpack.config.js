const path = require('path')

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './index.cas'),
  output: {
    path: path.resolve(__dirname, './dist'),
    // filename: 'index-[hash:8].js'
    filename: 'index.js'
  },
  context: path.resolve(__dirname, "."),
  module: {
    rules: [
      {
        test: /\.cas$/i,
        use: {
          loader: "./cas-loader",
          options: {}
        }
      }
    ]
  },
  plugins: []
}
