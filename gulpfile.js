'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');



gulp.task('jshint', function() {
  return gulp.src(['*.js','./backend/**/*.js', './backend/routes/user-functions/*.js'])
   .pipe(jshint())
   .pipe(jshint.reporter(stylish));
});

gulp.task('test', function() {
  return gulp.src('./backend/tests/test.js')
      .pipe(mocha( { reporter: 'nyan' } ));
});

gulp.task('default', ['jshint', 'test']);



