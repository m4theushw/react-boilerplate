const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');
const path = require('path');

module.exports = merge(base, {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    open: true,
  },
});
