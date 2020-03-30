const Config = require("../config/prod");

module.exports = {
  mode: "production",
  entry: Config.entry,
  output: Config.output
};
