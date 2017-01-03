import path from 'path';
import template from 'gulp-template';
import gulp from 'gulp';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
import yargs    from 'yargs';
import rimraf   from 'rimraf';
import merge    from 'merge-stream';
import watch    from 'gulp-watch';

'use strict';

let resolveToLibs = (glob = '') => {
  return path.join('lib/', glob); // app/components/{glob}
};

let resolveToComponents = (glob = '') => {
  return path.join('example/client/app/components/', glob); // app/components/{glob}
}

gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;

  const destComponentsPath = path.join(resolveToComponents(), name);
  const destLibPaths = path.join(resolveToLibs(), name);

  let gulpLibs = gulp.src(path.join(__dirname, 'generator', 'lib/**/*.**'))
    .pipe(template({
      name: name,
      upCaseName: cap(name),
      dateTime: new Date()
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destLibPaths));

  let gulpComponents = gulp.src(path.join(__dirname, 'generator', 'example/component/*.**'))
    .pipe(template({
      name: name,
      upCaseName: cap(name),
      dateTime: new Date()
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destComponentsPath));

  return merge(gulpLibs, gulpComponents);
});

gulp.task('build:demo', () => {
  return watch('lib/**')
    .pipe(gulp.dest('example/node_modules/fancyui/lib'))
});