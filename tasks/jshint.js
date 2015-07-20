'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src(['app/**/*.js'])
    // taken care of by `watchify` (remove or comment out)
    //.pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});