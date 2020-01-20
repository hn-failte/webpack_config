const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',
    entry: ['./src/index.js'],
    output: {
        filename: 'app.[hash:8].js',
        path: path.resolve(__dirname, '../dist/javascript'),
    },
    devtool: '@#source-map',
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
                test: /\.png$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10240, // 单位：b
                        mimetype: 'image/png',
                        fallback: 'file-loader',
                        quality: 75,
                        name: '[name].[ext]',
                        outputPath: '../images'
                    }
                }
            },
            {
                test: /\.jp(e?)g$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10240, // 单位：kb
                        mimetype: 'image/jpeg',
                        fallback: 'file-loader',
                        quality: 75,
                        name: '[name].[ext]',
                        outputPath: '../images'
                    }
                }
            },
            {
                test: /\.gif$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10240, // 单位：kb
                        mimetype: 'image/gif',
                        fallback: 'file-loader',
                        quality: 75,
                        name: '[name].[ext]',
                        outputPath: '../images'
                    }
                }
            },
            {
                test: /\.svg$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10240, // 单位：kb
                        mimetype: 'image/svg+xml',
                        fallback: 'file-loader',
                        quality: 75,
                        name: '[name].[ext]',
                        outputPath: '../images'
                    }
                }
            },
            {
                test: /\.webp$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../images'
                    }
                }
            },
            {
                test: /\.(eot|otf|fon|font|ttf|ttc|woff|woff2)($|\?.*)/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../fonts'
                    }
                }
            },
            {
                test: /\.(mp4|wav|ogg|avi|webm|mpeg|mid)($|\?.*)/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../audio'
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
            filename: path.resolve(__dirname, '../dist/html/index.html'),
            inject: false
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
        // new UglifyJSPlugin({
        //   test: /\.js($|\?)/i,
        //   cache: true,
        //   parallel: true
        // })
    ]
}
