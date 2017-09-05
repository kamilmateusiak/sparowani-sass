var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    server = require('gulp-server-livereload');

gulp.task('concatCss', function() {
  return gulp.src('sass/main.sass')
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(gulp.dest('./dist/css'))
	.pipe(notify({ message: 'ConcatCss task complete' }))
})

gulp.task('concatJs', function() {
  return gulp.src('js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'ConcatJs task complete' }));
});

gulp.task('clean', function() {
    return del(['dist/css', 'dist/js']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('concatCss', 'concatJs');
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.sass', ['concatCss']);
  gulp.watch('js/**/*.js', ['concatJs']);
});

gulp.task('server', ['watch'], function() {
  gulp.src('.')
      .pipe(server({
        livereload: {
          enable: true
        },
        port: 5012,
        directoryListing: false,
        open: true
      }));
});
