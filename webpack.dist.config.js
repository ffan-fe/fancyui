var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'anaheim.js',
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  externals: {
    'jquery': true,
    'angular': true
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel'},
      {test: /\.html$/, exclude: /formtpl\.html$/, loader: 'raw'},
      {test: /formtpl\.html$/, loader: 'raw!ng-include-loader'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.css$/, loader: 'style!css'},
      // IMAGE
      {
        test: /.(gif|jpg|png)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {

        // You can specify all variables that should not be mangled.
        // For example if your vendor dependency doesn't use modules
        // and relies on global variables. Most of angular modules relies on
        // angular global variable, so we should keep it unchanged
        except: ['$super', '$', 'exports', 'require', 'angular', 'jQuery']
      }
    }),
  ],
  resolve: {
    alias: {
        moment: "moment/min/moment-with-locales.min.js"
    }
  }
};
