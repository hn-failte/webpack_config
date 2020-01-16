const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'app.[hash:8].js',
        path: path.resolve(__dirname, '../dist/javascript'),
        publicPath: '../javascript'
    },
    devtool: '@#source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/html/index.html')
        }),
        new CleanWebpackPlugin(),
        // new UglifyJSPlugin({
        //   test: /\.js($|\?)/i,
        //   cache: true,
        //   parallel: true
        // })
    ]
}
