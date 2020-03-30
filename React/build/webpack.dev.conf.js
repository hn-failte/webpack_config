const path = require("path");
const Config = require("../config/dev");

const config = {
  mode: "development",
  entry: Config.entry,
  devServer: {
    port: 3000,
    hot: true,
    contentBase: path.resolve(__dirname, "../dist"),
    open: 'chrome'
  }
};

module.exports = config;
