const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'app.[hash:8].js',
        path: path.resolve(__dirname, '../dist/javascript'),
        publicPath: '../javascript'
    },
    devtool: '@#source-map',
    devServer: {
        port: 10086,
        open: 'Firefox',
        openPage: '/index.html'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/html/index.html')
        }),
        new CleanWebpackPlugin()
    ]
}