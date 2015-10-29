var gulp = require('gulp');
var bower = require('bower');
var sass = require('gulp-ruby-sass');
var minifyCss = require('gulp-minify-css');
var browserify = require('browserify');
var babel = require("babelify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');


var paths = {
  es6: ['./src/**/*.js'],
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['babel', 'sass']);


gulp.task('sass', function () {
  return sass('./scss/ionic.app.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css'));
});

gulp.task("babel", function () {
  var bundler = browserify("./src/app.js", { debug: true }).transform(babel);
  bundler.bundle()
    .on('error', function(err) { console.error(err); this.emit('end'); })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest("www/js"));
});

gulp.task('watch', function() {
  gulp.watch(paths.es6, ['babel']);
  gulp.watch(paths.sass, ['sass']);
});


