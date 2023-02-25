const path = require('path');

// Basic Webpack configuration.

module.exports = {
  entry: { edge: path.resolve(__dirname, '../src/index.ts') },
  output: {
    // Currently EdgeRoutine only accepts '/edge.js'
    // as the only entry point.
    filename: '[name].js',
    path: path.resolve(__dirname, '../'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
};
