const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

// Webpack configuration for production building.

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map'
});
