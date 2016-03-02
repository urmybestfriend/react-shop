var webpack = require('webpack');
var config = require('../../config');
var webpackConfig = require('./development');

webpackConfig.entry.app.push(
  `webpack-dev-server/client?${config.webpack_public_path}`,
  `webpack/hot/dev-server`
);

webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

module.exports = webpackConfig;
