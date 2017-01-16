const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },

  module: {
    
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'] 
      }
    ]

  },

  devtool: 'cheap-module-eval-source-map'
}
