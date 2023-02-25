const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
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
    // fallback: {
    //   assert: require.resolve('assert/'),
    //   buffer: require.resolve('buffer/'),
    //   crypto: require.resolve('crypto-browserify'),
    //   os: require.resolve('os-browserify/browser'),
    //   stream: require.resolve('stream-browserify'),
    //   zlib: require.resolve('browserify-zlib'),
    //   util: require.resolve('util/'),
    //   https:require.resolve("https-browserify"),
    //   http: require.resolve("stream-http")
    // },
  },
  plugins: [
		new NodePolyfillPlugin()
	],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.graphql?$/,
        loader: 'webpack-graphql-loader',
        options: {
          output: 'document'
        }
      },
      {
        test: /\.html?$/,
        loader: 'html-loader',
        options: {
          minimize: true
        }
      },
    ],
  },
};