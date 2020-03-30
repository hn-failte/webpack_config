const Webpack = require("webpack");
const BaseConfig = require("./webpack.base.conf");
const WebpackDevServer = require("webpack-dev-server");
const WebpackMerge = require("webpack-merge");
const path = require('path')

const env = process.env.NODE_ENV;
if (env === "production") {
  Webpack(
    WebpackMerge(BaseConfig, require("./webpack.prod.conf")),
    (err, stats) => {
      if (!err)
        console.log(
          stats.toString({
            color: true,
            modules: false,
            chunk: false
          })
        );
    }
  );
} else {
  new WebpackDevServer(
    Webpack(
      WebpackMerge(BaseConfig, require("./webpack.dev.conf")),
      (err, stats) => {
        if (!err)
          console.log(
            stats.toString({
              color: true,
              modules: false,
              chunk: false
            })
          );
      }
    ),
    {
      port: 3000,
      hot: true,
      contentBase: path.resolve(__dirname, "../dist"),
      open: "chrome",
      openPage: "http://localhost:3000",
      historyApiFallback: true
    }
  ).listen(3000);
}
