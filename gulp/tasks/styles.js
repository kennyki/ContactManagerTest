var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var gutil = require('gulp-util');
var minifyCss = require('gulp-minify-css');
var config = require('../config.js').sass;

gulp.task('styles', function() {
  var isRelease = gutil.env.type === 'release';
  
  gulp.src(config.src)
    .pipe(sass(config.settings))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});
