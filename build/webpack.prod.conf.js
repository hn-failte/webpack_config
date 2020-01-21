const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    output: {
        filename: 'app.[hash:8].js',
        path: path.resolve(__dirname, '../dist/javascript')
    },
    devtool: '@#source-map',
    module: {
        rules: [
            {
                test: /\.jpe?g|png|gif|svg|webp$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10240, // 10kb以内转base64
                        fallback: 'file-loader',
                        quality: 75,
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
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: path.resolve(__dirname, '../dist/html/index.html')
        }),
        new CleanWebpackPlugin()
    ]
}
