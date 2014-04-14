var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var changed = require('gulp-changed');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var exec = require('gulp-exec');
var livereload = require('gulp-livereload');
var karma = require('gulp-karma');
var _ = require("underscore");
require('jshint-stylish');


var paths = {
    js: ['./src/js/**/*.js'],
    less: './src/less/*.less',
    testJs : [
        'public/bower_components/underscore/underscore.js',
        'public/bower_components/angular/angular.js',
        'public/bower_components/angular-resource/angular-resource.js',
        'public/bower_components/angular-sanitize/angular-sanitize.js',
        'public/bower_components/angular-mocks/angular-mocks.js',
        'spec/**/*.js'
    ]
};

gulp.task('less', function () {
    gulp.src(paths.less)
        .pipe(changed('./public/genere/css'))
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./public/genere/css'));
});

gulp.task('js', function () {
    gulp.src(paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(changed('./public/genere/js'))
        .pipe(concat('app_pkg.js'))
        .pipe(gulp.dest('./public/genere/js'));
});


gulp.task('server', function () {
    gulp.src("server.js")
        .pipe(exec('node server.js'));
});

gulp.task('test', function() {
   gulp.src(_.union(paths.testJs, paths.js))
       .pipe(karma({
           configFile: 'karma.conf.js',
           action: 'watch'
       }));
});

gulp.task('watch', function () {
    var server = livereload();
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.less, ['less']);
    gulp.watch('./public/genere/css/**/*.css').on('change', reload);
    gulp.watch('vues/**/*.jade').on('change', reload);
    function reload() {
        server.changed("");
    }
});

gulp.task('build', ['less', 'js']);

gulp.task('default', ['build','server', 'test', 'watch']);

gulp.task('heroku:production', ['build']);