var
  gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , uglifycss = require('gulp-uglifycss')
  , gutil = require('gulp-util')

gulp.task('minify-js', function(){
  gulp.src('public-dev/js/*.js')
    .pipe(concat('application.min.js'))
    .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest('public/js'))
})

gulp.task('nodemon', function(){
  nodemon({
    ext: 'js html css',
    env: { 'NODE_ENV' :  'development' }
  })
})

gulp.watch('public-dev/js/*.js', ['minify-js'])

gulp.task('default', ['nodemon'])
