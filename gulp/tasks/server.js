'use strict';

var gulp = require('gulp');
var connect = require('connect'),
    http = require('http'),
    livereload = require('connect-livereload'),
    livereloadPort = 35729,
    modrewrite = require('connect-modrewrite'),
    httpProxy = require('http-proxy'),
    serveStatic = require('serve-static'),
    tinyLr = require('tiny-lr');

var util = require('gulp-util');

var proxy = httpProxy.createProxyServer();

var server,
    lr;

gulp.task('connect', function (done) {
    var app = connect()
        .use(modrewrite(['!(\\.\\w+($|\\?)|\/docs) /index.html']))
        /* Livereload */
        .use(livereload({port: livereloadPort}))
        /* Mount app */
        .use(serveStatic('app/'));

    server = http.createServer(app);

    server.listen(9095, '0.0.0.0', function (err) {
        if (err) {
            util.log('Error on starting server:', err);
        } else {
            util.log('Server started at', 'http://0.0.0.0:9095');

            lr = tinyLr();
            lr.listen(livereloadPort, function () {
                util.log('LiveReload started on port', livereloadPort);

                done();
            });
        }
    });

    gulp
        .watch([
            'app/*.html',
            'app/scripts/*.js',
            'app/scripts/**/*.js',
            'app/modules/**/*.js',
            'target/dist/scripts/*.js',
            'target/dist/scripts/**/*.js',
            'target/dist/styles/*.css'
        ], function (event) {
            util.log('Reloading');

            lr.changed({
                body: {
                    files: event.path
                }
            });
        });
});