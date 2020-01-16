const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'javascript/app.js',
        publicPath: '/dev'
    },
    devtool: '@#eval',
    devServer: {
        host: 'localhost',
        port: 10086,
        publicPath: '/dev/',
        hot: true,
        index: 'index.html',
        historyApiFallback: {
            rewrites: [{ from: /.*/, to: 'index.html' }]
        },
        inline: false,
        open: true,
        openPage: 'dev/html/index.html',
        progress: true,
        quiet: false, //
        compress: true, // gzip
        watchOptions: {
            poll: false
        },
        clientLogLevel: 'warning',
        proxy: {}
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'html/index.html',
            inject: false, // 不自动注入，此时需要手动在模板中注入，默认引擎ejs
        })
    ],
    stats: {
        colors: true
    }
}
