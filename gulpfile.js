var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer')

gulp.task('styles', function() {
  return gulp.src('sass/main.sass')
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(gulp.dest('./css/'))
	.pipe(notify({ message: 'Styles task complete' }))
})
