var path = require('path');


var files = (process.env.npm_config_single_file) ?
  process.env.npm_config_single_file : 'spec.bundle.js';

var config =
  module.exports = function (config) {
    var option = {
      // base path used to resolve all patterns
      basePath: '',

      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['mocha', 'chai'],
      plugins: [
        require("karma-chai"),
        require("karma-chrome-launcher"),
        require("karma-mocha"),
        require("karma-mocha-reporter"),
        require("karma-sourcemap-loader"),
        require("karma-coverage"),
        require("karma-webpack")
      ],

      webpack: {
        devtool: 'inline-source-map',
        module: {
          preLoaders: [{
            test: /\.js$/,
            include: path.resolve('lib/'),
            loader: 'isparta'
          }],
          loaders: [
            { test: /\.js/, exclude: [/app\/bin/, /node_modules/], loader: 'babel-loader?cacheDirectory' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
          ]
        }
      },

      coverageReporter: {
        dir: 'coverage/',
        reporters: [
          { type: 'text-summary' },
          { type: 'html' }
        ]
      },

      webpackServer: {
        noInfo: 'errors-only' // prevent console spamming when running in Karma!
      },

      reporters: ['mocha', 'coverage'],

      // web server port
      port: 9876,

      // enable colors in the output
      colors: true,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,

      // toggle whether to watch files and rerun tests upon incurring changes
      autoWatch: false,

      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['Chrome'],

      // if true, Karma runs tests once and exits
      singleRun: true
    };

    option.files = [
      {
        pattern: files, watched: false
      }
    ];
    option.preprocessors= {};
    option.preprocessors[files] = ['webpack', 'sourcemap']
    config.set(option);
  };