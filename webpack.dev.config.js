/**
 * 
 */

import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

'use strict';

module.exports = {
  entry: './tests/testapp.js',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, './tests')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      { 
        test: /\.less$/, 
        loader: 'style!css!less' 
      },
      {
        test: /\.css$/, 
        loader: 'style!css'
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?\S*)?$/,
        loader : require.resolve('file-loader')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './tests/index.html',
      inject: 'body',
      hash: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: function (module, count) {
        const s = module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
        const t = module.resource && module.resource.indexOf(path.resolve(__dirname, 'tests')) === -1;
        return s && t;
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};