import path from 'path';

import gulp from 'gulp';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
import gulpIf from 'gulp-if';

'use strict';

gulp.task('default', ['build']);

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

