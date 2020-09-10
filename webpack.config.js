var path = require('path');
const webpack = require('webpack');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  target: 'node',
  node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // exclude: '/node_modules/',
        // include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", '@babel/preset-react']
        }
      }
    ]
  }
};
