import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

'use strict';

module.exports = {
  devtool: 'inline-source-map',
  entry: './example/app/app.js',
  output: {
    path: __dirname,
    publicPath: '',
    filename: '[name].min.js',
    chunkFilename: '[name].min.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate-loader!babel-loader' },
      { test: /\.html$/, exclude: /formtpl\.html$/, loader: 'raw-loader' },
      { test: /formtpl\.html$/, loader: 'raw-loader!ng-include-loader' },
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'DEBUG': true
      }
    })
  ]
};
