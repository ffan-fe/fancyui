var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var customConfig = require('./custom.env.config');

var distPath = customConfig.distPath;

config.output = {
  filename: '[name].bundle.js',
  chunkFilename:'[name].min.js',
  publicPath: '',
  path: distPath
};

config.plugins = config.plugins.concat([
  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('sit'),
      'DEBUG': false
    }
  })
]);

module.exports = config;
