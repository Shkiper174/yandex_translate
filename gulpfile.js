var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');


//server
gulp.task('start', function(){
 	gulp.src('app')
	 	.pipe(server({
	 	livereload : true,
	 	open: true	
 	}));
});

gulp.task('style', function(){
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
			browsers: ['last 15 versions']
		}))
		.pipe(gulp.dest('app/css'));

});


gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass', ['style']);
});

gulp.task('default', ['start','watch']);

