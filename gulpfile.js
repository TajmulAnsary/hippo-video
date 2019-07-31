var gulp = require('gulp'),
  sass = require('gulp-sass'),
  cssmin = require('gulp-cssmin'),
  connect = require('gulp-connect'),
  rename = require('gulp-rename');

var sourcePath = './assets/';

gulp.task('webserver', function (done) {
  connect.server({
    root: './',
    port: 9090,
    livereload: true
  });
  done();
});

gulp.task('html', function () {
  return gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function (done) {
  gulp.src(sourcePath + 'scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sourcePath + 'css'))
    .pipe(rename({
      suffix: '-min'
    }))
    .pipe(cssmin())
    .pipe(gulp.dest(sourcePath + 'css'))
    .pipe(connect.reload());
  done();
});


gulp.task('watch', function (done) {
  gulp.watch(sourcePath + 'scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./*.html', gulp.series('html'));
  done();
});

gulp.task('default', gulp.series(gulp.parallel('webserver', 'html', 'sass', 'watch')));