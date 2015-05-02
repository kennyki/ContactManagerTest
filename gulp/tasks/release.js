var gulp = require('gulp');
var config = require('../config').release;
var ghPages = require('gulp-gh-pages');

gulp.task('release', ['browserify', 'styles', 'assets'], function(done) {
  gulp.src(config.src)
    .pipe(ghPages())
    .on('end', function() {
      done();
      process.exit(0);
    });
});
