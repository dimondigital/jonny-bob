var gulp 		= require('gulp');
var browserSync = require('browser-sync').create();
var sass		= require('gulp-sass');

// Static server + watching scss/html files
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch('./scss/*.scss', ['sass']);
	gulp.watch('./*.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
});

// or...

// gulp.task('browser-sync', function() {
// 	browserSync.init({
// 		proxy: "yourlocal.dev"
// 	});
// });