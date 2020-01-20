const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        filename: 'javascript/app.js',
        publicPath: '/dev/'
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
        inline: true,
        // open: 'firefox',
        open: true,
        openPage: 'dev/html/index.html',
        progress: true,
        quiet: false, //
        compress: false, // gzip
        watchOptions: {
            poll: false
        },
        clientLogLevel: 'warning',
        proxy: {}
    },
    module: {
        rules: [
            {
                test: /\.vue$/i,
                use: 'vue-loader'
            },
            {
                test: /\.js(x?)$/i,
                exclude: /node_modules/i,
                use: {
                    loader: 'babel-loader?cacheDirectory=true',
                    options: {
                        presets: ['@babel/preset-env', '@vue/babel-preset-jsx']
                    }
                }

            },
            {
                test: /\.(css|styl(us)?)$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 102400,
                        mimetype: 'image/png',
                        fallback: 'file-loader',
                        name: 'images/[name].[ext]',
                        publicPath: '/dev/'
                    }
                }
            },
            {
                test: /\.(eot|otf|fon|font|ttf|ttc|woff|woff2)($|\?.*)/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        publicPath: '/dev/'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', 'vue']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'html/index.html',
            inject: false, // 不自动注入，此时需要手动在模板中注入，默认引擎ejs
        }),
        new VueLoaderPlugin()
    ],
    stats: {
        colors: true
    }
}
