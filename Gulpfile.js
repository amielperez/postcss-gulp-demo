var gulp = require('gulp')
// This is the postcss gulp plugin
var postcss = require('gulp-postcss')
// Require all the processors, aka, plugins, you need
var cssnext = require('postcss-cssnext')
var specificityRatings = require('postcss-specificity-ratings')

// Define the task to post-process your css thru postcss
gulp.task('css', function(){
  /*
    Define your postcss processors here
    You can also do pluginName({options})
  */
  var processors = [
    cssnext,
    specificityRatings
  ]

  // Do the magic!
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
})
