var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    tsPath = 'typescript/*.ts',
    compilePath = 'scripts/compiled',
    dist = 'scripts/dist';


gulp.task('compressScripts', function () {
  gulp.src([
      compilePath + '/javascript/*.js'
  ])
      .pipe(plumber())
      .pipe(concat('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(dist))

});

gulp.task('typescript', function () {
    var tsResult = gulp.src(tsPath)
                        .pipe(ts({
                            target: 'ES5',
                            declarationFiles: false,
                            noExternalResolve: true
                        }));

    tsResult.dts.pipe(gulp.dest('scripts/typings'));

    return tsResult.js.pipe(gulp.dest(compilePath + '/javascript'));
});

gulp.task('watch', function() {
    gulp.watch([tsPath], ['typescript']);
});

gulp.task('default', ['typescript', 'watch', 'compressScripts']);
