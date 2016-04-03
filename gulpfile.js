var
  gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , uglifycss = require('gulp-uglifycss')
  , gutil = require('gulp-util')

gulp.task('nodemon', function(){
  nodemon({
    ext: 'js html css',
    env: { 'NODE_ENV' :  'development' }
  })
})

gulp.task('default', ['nodemon'])
