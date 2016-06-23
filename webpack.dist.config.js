
module.exports = {
  
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'anaheim.js',
    library: 'Anaheim',
    libraryTarget: 'umd'
  },
  externals: [
    {
      angular: true
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate!babel',
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  }
};