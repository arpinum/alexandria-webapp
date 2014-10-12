var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var exec = require('gulp-exec');
var livereload = require('gulp-livereload');
var karma = require('gulp-karma');
var _ = require("underscore");
require('jshint-stylish');


var paths = {
    js: ['./assets/js/**/*.js'],
    testJs: [
        'public/bower_components/underscore/underscore.js',
        'public/bower_components/angular/angular.js',
        'public/bower_components/angular-resource/angular-resource.js',
        'public/bower_components/angular-sanitize/angular-sanitize.js',
        'public/bower_components/angular-route/angular-route.js',
        'public/bower_components/angular-mocks/angular-mocks.js',
        'assets/**/*.spec.js'
    ]
};


gulp.task('server', function () {
    gulp.src("server.js")
        .pipe(exec('node server.js'));
});

gulp.task('test', function () {
    gulp.src(_.union(paths.testJs, paths.js))
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        })).on('error', function(err) {
        });
});

gulp.task('watch', function () {
    gulp.watch(_.union(paths.js, paths.testJs), ['test']);
});


gulp.task('default', ['server', 'test', 'watch']);

gulp.task('heroku:production', ['build']);