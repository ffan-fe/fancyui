import path from 'path';
import template from 'gulp-template';
import gulp from 'gulp';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
import gulpIf from 'gulp-if';
import yargs    from 'yargs';

'use strict';

let resolveToComponents = (glob = '') => {
  return path.join('lib/', glob); // app/components/{glob}
};

gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(path.join(__dirname, 'generator', 'component/**/*.**'))
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});
