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
                    'css-loader',
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
        extensions: ['.js', 'json', 'vue', '.jsx'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': path.resolve(__dirname, '../src/')
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    stats: {
        colors: true,
        warnings: false
    }
    // { all?, assets?, assetsSort?, builtAt?, cached?, cachedAssets?, children?, chunkGroups?, chunkModules?, chunkOrigins?, chunks?, chunksSort?,
    // colors?, context?, depth?, entrypoints?, env?, errorDetails?, errors?, exclude?, excludeAssets?, excludeModules?, hash?, logging?,
    // loggingDebug?, loggingTrace?, maxModules?, moduleAssets?, moduleTrace?, modules?, modulesSort?, nestedModules?, optimizationBailout?,
    // outputPath?, performance?, providedExports?, publicPath?, reasons?, source?, timings?, usedExports?, version?, warnings?, warningsFilter? }
}
