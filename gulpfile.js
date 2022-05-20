var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
var plumber = require('gulp-plumber');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var once = require('async-once');



gulp.task('sass', async function() {
    gulp.src([
        'public/**/*.scss',
        'src/modules/**/*.scss',
		'node_modules/bootstrap/dist/css/bootstrap.min.css',
    ])
        .pipe(concat('style.js'))
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('build'));
});

gulp.task('compress-dev', async function() {
    gulp.src([
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-animate/angular-animate.js',
        'app.js',
        'src/**/*.js',
		'node_modules/jquery/dist/jquery.slim.min.js',
		'node_modules/popper.js/dist/umd/popper.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
    ])
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('compress-prod', async function() {
    gulp.src([
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-animate/angular-animate.js',
        'app.js',
        'src/**/*.js',
		'node_modules/jquery/dist/jquery.slim.min.js',
		'node_modules/popper.js/dist/umd/popper.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
    ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('watch',  function() {
    gulp.watch('public/styles/*.scss', gulp.series('sass'));
    gulp.watch('src/modules/**/*.scss', gulp.series('sass'));
    gulp.watch('src/**/*.js', gulp.series('compress-dev'));
    gulp.watch('app.js', gulp.series('compress-dev'));
});

gulp.task('dev',  gulp.parallel('sass', 'compress-dev' , 'watch'));
gulp.task('build', gulp.parallel('sass', 'compress-prod'));