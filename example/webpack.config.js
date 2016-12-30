var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var colors = require('colors/safe');
let allChunks = [];

function isVendor(module){
  return module.resource 
        && 
        ((module.resource.indexOf('node_modules/angular/') > -1 )||
        (module.resource.indexOf('node_modules/jquery/')>-1));
}

function moduleConsole(module){
  if(module && module.resource){
    let size = parseInt(module._source.size()/1000);
    let info =`moduleName:${module.resource}, moduleSize: ${  parseInt(module._source.size()/1000)} kb`;
    if(size>50){
      console.log(colors.red(info));
    }
    else{
      console.log(info)
    }
  }
}

module.exports = {
  devtool: 'sourcemap',
  entry: {
    vendor: ['angular', 'jquery']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules\/(?!(fancyui)\/).*/], loader: 'ng-annotate!babel' },
      //{ test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.css$/, loader: 'style!css' },
      // IMAGE
      {
        test: /.(gif|jpg|png)$/,
        loader: 'file?name=img-[hash].[ext]'
      },
      // FONT
      // {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" },
      // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" },
      // {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" },
      // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" }
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: require.resolve('file-loader')
      }
    ]
  },
  resolve: {
    alias: {
      'angular': path.resolve(path.join(__dirname, 'node_modules', 'angular'))
    }
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      excludeChunks:['vendor'],
      hash: true
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    /**
     * 两个commons chunk, 第一个主要为了计算AllChunks
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        if (module.chunks) {
          for (var i = 0, len = module.chunks.length; i < len; i++) {
            if (allChunks.indexOf(module.chunks[i].name) === -1) {
              allChunks.push(module.chunks[i].name);
            }
          }
        }
        
        moduleConsole(module);

        return isVendor(module);
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: allChunks,
      minChunks: function (module, count) {
        //console.log(module.resource?module.resource:'null',count);
        if(count>=2){
          //moduleConsole(module);
        }

        return count>=2 ;
      }
    })
  ]
};
