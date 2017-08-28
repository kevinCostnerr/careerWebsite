/**
 * This is the configuration to run the websites
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/router/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [{
      test:  /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_module/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
