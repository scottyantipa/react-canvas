var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var browserify = require('browserify');
var transform  = require('vinyl-transform');
var source     = require('vinyl-source-stream');

var port = process.env.PORT || 8080;
var reloadPort = process.env.RELOAD_PORT || 35729;

gulp.task('clean', function () {
  del(['build']);
});

browserified = transform(function(filename) {
  browserify(filename).bundle();
});

gulp.task('dist', function () {
  browserify([__dirname + '/lib/ReactCanvas.js'])
    .bundle()
      .on('error', function(err) {
        console.log(err.message);
        this.emit('end');
      })
      .pipe(source('ReactCanvas.js'))
      .pipe(gulp.dest('./dist/'))
});

gulp.task('build', function () {
  return gulp.src(webpackConfig.entry.timeline[0])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'));
});

gulp.task('serve', function () {
  connect.server({
    port: port,
    livereload: {
      port: reloadPort
    }
  });
});

gulp.task('reload-js', function () {
  return gulp.src('./build/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./build/*.js'], ['reload-js']);
});

gulp.task('default', ['clean', 'build', 'serve', 'watch']);
