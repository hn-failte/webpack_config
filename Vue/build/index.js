const WebpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const prodConfig = require('./webpack.prod.conf')
const devConfig = require('./webpack.dev.conf')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const prodMode = process.env.NODE_ENV.indexOf('production') > -1
const devMode = process.env.NODE_ENV.indexOf('development') > -1

const Config = WebpackMerge(baseConfig, prodMode ? prodConfig : devMode ? devConfig : {})

// require('fs').writeFileSync(require('path').resolve(__dirname, 'webpack.config.json'), JSON.stringify(Config, false, '\t'))

if(process.env.analyzer) Config.plugins.push(new BundleAnalyzerPlugin());

module.exports = Config
