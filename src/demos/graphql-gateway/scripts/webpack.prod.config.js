
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

// Webpack configuration for production building.

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map'
});
