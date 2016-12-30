var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: './examples/ui.js',
  output: {
    filename: 'examples.js',
    publicPath: '',
    path: path.resolve(__dirname),
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel'},
      {test: /\.html$/, exclude: /formtpl\.html$/, loader: 'raw'},
      {test: /formtpl\.html$/, loader: 'raw!ng-include-loader'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.css$/, loader: 'style!css'},
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?\S*)?$/,
        loader : require.resolve('file-loader')
      },
      // IMAGE
      {
        test: /.(gif|jpg|png)$/,
        loader: 'file?name=img-[hash].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      inject: 'body',
      minify: false
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
