const Webpack = require('webpack')
const ora = require('ora')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const spinner = ora('building')
const startTime = new Date().toLocaleTimeString()

spinner.start()

Webpack({
  mode: 'development',
  devtool: '#@source-map',
  devServer: {
    host: 'localhost',
    open: 'Google Chrome',
    openPage: 'dev/htmls/index.html',
    publicPath: '/dev/',
    devtool: '@#cheap-module-eval-source-map',
    port: 10086
  },
  entry: ['./main.js'],
  output: {
      path: path.resolve(process.cwd(), './dist'),
      filename: '[name].[hash:8].js'
  },
  plugins: [
    new Webpack.DefinePlugin({
      'flag': true,
      'name': '"del"'
    }),
    new HtmlWebpackPlugin(),
    new UglifyJSPlugin({
      test: /\.js($|\?)/i,
      cache: true,
      parallel: true
    })
  ],
  bail: true
}, (error, stats) => {
  if(error) throw error;
  spinner.stop()
  console.log(stats.toString({
    colors: true
  }))
  console.log('\033[32mbuild time: ' + startTime + '\033[0m')
  console.log('\033[32mfinish time: ' + new Date().toLocaleTimeString() + '\033[0m')
})
