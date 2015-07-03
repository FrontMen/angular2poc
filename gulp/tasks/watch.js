'use strict';

var gulp = require('gulp');

gulp.task('watch', ['connect'], function () {
    gulp.watch(['app/styles/**/*.scss'], ['styles']);
    gulp.watch(['app/views/**/*.html', 'app/modules/**/*.html'], ['templates']);
});