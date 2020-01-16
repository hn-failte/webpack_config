const WebpackDevServer = require('webpack-dev-server')
const Webpack = require('webpack');
WebpackDevServer(Webpack(), require('./development.config'))
