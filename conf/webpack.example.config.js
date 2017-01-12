/**
 *
 */

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

'use strict';

module.exports = {
  devtool: 'inline-source-map',
  entry: './example/app/app.js',
  output: {
    // Absolute output directory
    //path: __dirname,
    path: path.resolve(__dirname, '../dist'),

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: '',

    // Filename for entry points
    // Only adds hash in build mode
    filename: '[name].min.js',
    //filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',

    // Filename for non-entry points
    // Only adds hash in build mode
    chunkFilename: '[name].min.js'
    //chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate-loader!babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /formtpl\.html$/,
        loader: 'raw-loader'
      },
      {test: /formtpl\.html$/, loader: 'raw-loader!ng-include-loader'},
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?\S*)?$/,
        loader : require.resolve('file-loader')
      },
      {
        test: /.(gif|jpg|png)$/,
        loader: 'file-loader?name=img-[hash].[ext]'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      inject: 'body',
      hash: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'DEBUG': false
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {

        // You can specify all variables that should not be mangled.
        // For example if your vendor dependency doesn't use modules
        // and relies on global variables. Most of angular modules relies on
        // angular global variable, so we should keep it unchanged
        except: ['$super', '$', 'exports', 'require', 'angular', 'jQuery']
      }
    })
  ]
};
