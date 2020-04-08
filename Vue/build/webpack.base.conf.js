const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
    entry: ['./src/index.js'],
    module: {
        rules: [
            {
                test: /\.(css|styl(us)?)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.vue$/i,
                use: 'vue-loader'
            },
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/i,
                use: {
                    loader: 'babel-loader?cacheDirectory=true',
                    options: {
                        presets: ['@babel/preset-env', '@vue/babel-preset-jsx']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', 'json', 'vue', '.jsx'], // 解析扩展名
        alias: { // 别名解析
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': path.resolve(__dirname, '../src/')
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    stats: { // 输出格式化
        colors: true,
        modules: false,
        chunks: false,
        chunkModules: false,
        children: false
    },
    performance: {
        hints: false, // 文件过大时警告，默认warning
        assetFilter: filename => filename.endsWith('.js'), // 对指定类型的输出文件大小进行检测，默认会检测非map文件，这里只指定js文件
        maxEntrypointSize: 250000, // 入口，单位：bytes，默认250000
        maxAssetSize: 1024000 // 出口，单位：bytes，默认250000
    },
    bail: false // 在第一个错误出现时抛出失败结果
}
