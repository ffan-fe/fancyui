/**
 * 我们来玩一下组件
 */

import path from 'path';

import gulp from 'gulp';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
import template from 'gulp-template';
import gulpIf from 'gulp-if';
import babel from 'gulp-babel';

import webpack from 'webpack';
import webpackDistConfig from './webpack.dist.config';
import webpackDevConfig from './webpack.dev.config';
import webpackExampleConfig from './webpack.example.config';
import webpackDevMiddelware from 'webpack-dev-middleware';

import browserSync from 'browser-sync';
import colorsSupported from 'supports-color';

import yargs from 'yargs';

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
  const compiler = webpack(webpackDevConfig);
  bs.init(
    {
      port: process.env.PORT || 3000,
      server: {
        baseDir: 'examples',
        index: 'index.html'
      },
      files: ['examples/**/*.js',
              'examples/**/*.less',
              'examples/**/*.html',
              'src/**/*.js',
              'src/**/*.less',
              'src/**/*.html'],
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
gulp.task('betaBuild', callback => {
  webpack(webpackDistConfig, (err, state) => {
    if (err) throw new gutil.PluginError('webpack', err);
    callback();
  });
});

gulp.task('build',callback=>{
  return gulp.src(['./index.js','./src/**/*'])
    /**.pipe(gulpIf((file)=>{
      return file.path.indexOf('.js')>-1;
    },
      babel({
          presets: ['es2015']
      }))) */
    .pipe(gulpIf(file=>{
      return file.path.indexOf('/components/')>-1;
    },
      rename(path=>{
        path.dirname = path.dirname.replace('components/','');
        path.dirname = path.dirname.replace('components','');
        return path;
      })
    ))
    .pipe(gulp.dest('./lib',{
      overwrite:false
    }));
  
})


/**
 * 生成网站
 */
gulp.task('build:example', callback => {
  webpack(webpackExampleConfig, (err, state) => {
    if (err) throw new gutil.PluginError('webpack', err);
    callback();
  });
});


gulp.task('component', () => {
  // 组件名
  const name = yargs.argv.name;
  // code name 主要是Classname
  const codeName = name.charAt(0).toUpperCase() + name.slice(1);
  // 发布路径
  const distPath = path.join('src/components', name);

  return gulp.src('./generator/**/*')
    .pipe(template({
      name,
      codeName
    }))
    .pipe(rename(path => {
      path.basename = path.basename.replace('name', name);
    }))
    .pipe(gulp.dest(distPath));

});
