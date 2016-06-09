/**
 * 我们来玩一下组件
 */

import gulp from 'gulp';
import gutil from 'gulp-util';
import rename from 'gulp-rename';

import webpack from 'webpack';
import webpackDistConfig from './webpack.dist.config';
import webpackDevConfig from './webpack.dev.config';
import webpackDevMiddelware from 'webpack-dev-middleware';

import browserSync from 'browser-sync';
import colorsSupported from 'supports-color';

'use strict';

/**
 * 默认任务, 里面是跑测试应用
 */
gulp.task('default', ['dev']);
/**
 * 开始模式, 跑起来测试模块
 */
gulp.task('dev', callback => {
  const bs = browserSync.create();
  const compiler = webpack(webpackDevConfig)
  bs.init(
    {
      port: process.env.PORT || 3000,
      server: {
        baseDir: 'tests',
        index: 'index.html'
      },
      files: ['tests/**/*.js', 'tests/**/*.html', 'src/**/*.js', 'src/**/*.less', 'src/**/*.html'],
      middleware: [
        webpackDevMiddelware(compiler, {
          stats: {
            colors: colorsSupported,
            chunks: false,
            modules: false
          }
        })
      ]
    }
  );
});
/**
 * 编译整个组件
 */
gulp.task('build', callback => {
  webpack(webpackDistConfig, (err, state) => {
    if (err) throw new gutil.PluginError('webpack', err);
    callback();
  });
});

gulp.task('component', callback => {
  
});