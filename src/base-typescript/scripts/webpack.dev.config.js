const path = require('path');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

// Webpack configuration for local development mode.

module.exports = merge(baseConfig, {
  entry: {
    edge: [path.resolve(__dirname, '../public/edge-dev-tools/injection.js'), baseConfig.entry.edge],
    'edge-dev-tools': path.resolve(__dirname, '../public/edge-dev-tools/index.js'),
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  devServer: {
    injectHot: false,
    injectClient: false,
    liveReload: false,
    contentBase: path.resolve(__dirname, '../public'),
  },
});
