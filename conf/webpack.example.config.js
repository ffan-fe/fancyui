
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';


'use strict';

module.exports = {
  devtool: 'source-map',
  entry: './example/app/app.js',
  output: {
    path: '../ffan-fe.github.io/',
    publicPath: '',
    filename: '[name].min.js',
    chunkFilename: '[name].min.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate-loader!babel-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?\S*)?$/, loader: require.resolve('file-loader') },
      { test: /.(gif|jpg|png)$/, loader: 'file-loader?name=img-[hash].[ext]' },
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
      sourceMap: true,
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
