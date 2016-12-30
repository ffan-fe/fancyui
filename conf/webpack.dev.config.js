/**
 *
 */

import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

'use strict';

module.exports = {
  devtool: 'inline-source-map',
  entry: './examples/ui.js',
  output: {
    // Absolute output directory
    path: __dirname,
    //path: __dirname + '/dist',

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: '',

    // Filename for entry points
    // Only adds hash in build mode
    filename: '[name].bundle.js',
    //filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',

    // Filename for non-entry points
    // Only adds hash in build mode
    chunkFilename: '[name].bundle.js'
    //chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate!babel',
      },
      {
        test: /\.html$/,
        exclude: /formtpl\.html$/,
        loader: 'raw'
      },
      {test: /formtpl\.html$/, loader: 'raw!ng-include-loader'},
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
      },
      {
        test: /.(gif|jpg|png)$/,
        loader: 'file?name=img-[hash].[ext]'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      inject: 'body',
      hash: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'DEBUG': true
      }
    })
  ]
};
