const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    output: {
        filename: 'javascript/app.js',
        publicPath: '/dev/'
    },
    // devtool: '@#cheap-module-eval-source-map',
    devtool: '@#eval',
    devServer: {
        host: 'localhost', // 访问域名
        port: 10086, // 访问端口
        publicPath: '/dev/', // 公共路径，即服务器运行的路径，该路径不会创建真实的文件夹
        hot: true, // 热重载
        index: 'index.html', // 主页
        historyApiFallback: { // 使用history前端路由时，可以配置该项
            rewrites: [{ from: /.*/, to: 'index.html' }] // 重定向所有请求为index.html
        },
        inline: true, // 是否开启行内模式，行内是相对于iframe的行内
        open: true, // 也可以指定浏览器。如：'firefox'
        openPage: 'dev/html/index.html', // 自动打开页面
        progress: true, // 显示模块加载进度
        quiet: false, // 安静模式，除启动信息外的信息不打印，错误和警告不会打印
        compress: true, // gzip模式
        watchOptions: {
            poll: false // 观察间隔
        },
        clientLogLevel: 'warning',
        proxy: { // 代理服务器
        }
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
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
            },
            {
                test: /\.(mp4|wav|ogg|avi|webm|mpeg|mid)($|\?.*)/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'audio/[name].[ext]',
                        publicPath: '/dev/'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'html/index.html'
        }),
        new HotModuleReplacementPlugin()
    ]
}
