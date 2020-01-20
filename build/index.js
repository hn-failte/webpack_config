const Webpack = require('webpack')
const Config = require('./webpack.config')

Webpack(Config, (err, stats) => {
    if(err) throw err;
    console.log(stats.toString({
        colors: true,
        warnings: false
    }))
})
