'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');

/**
 * Handle error uses notify to show an OS specific notification.
 */
function handleError() {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'Gulp Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    // Required, else gulp will crash after errors
    this.emit('end');
}

module.exports = {
    handleError: handleError
};