var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('build', function () {
  return browserify({
    entries: ['./vue.js']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./'));
});

gulp.task('build-dev', function () {
  return browserify({
    entries: ['./vue.js']
  })
  .bundle()
  .pipe(source('bundle-dev.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./'));
});
