var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../config').release;
var ghPages = require('gulp-gh-pages');

gulp.task('release', ['browserify', 'styles', 'assets'], function(done) {
  return gulp.src(config.src)
    .pipe(ghPages())
    .on('error', gutil.log.bind(gutil, 'gh-pages Error'))
    .on('end', function() {
      done();
      process.exit(0);
    });
});
