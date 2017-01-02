var config = 

module.exports = function (config) {
  config.set({
    // base path used to resolve all patterns
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // list of files/patterns to load in the browser
    files: [
      {
        pattern: 'node_modules/angular/angular.js'
      },
      {
        pattern: 'node_modules/angular-mocks/angular-mocks.js'
      },
      {
        pattern: 'lib/**/**.spec.js', watched: false
      }
    ],

    plugins: [
      require("karma-chai"),
      require("karma-chrome-launcher"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-sourcemap-loader"),
      require("karma-coverage"),
      require("karma-webpack")
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 
      //'lib/**/!(*.spec).js':['webpack', 'sourcemap', 'coverage']
      'lib/**/**.spec.js': ['webpack', 'sourcemap', 'coverage'] 
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js/, exclude: [/app\/bin/, /node_modules/], loader: 'babel-loader?cacheDirectory' },
          { test: /\.html$/, loader: 'raw-loader' },
          { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
          { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
      }
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
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
  });
};