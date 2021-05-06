const gulp = require('gulp');
const paths = require('../paths');

const fonts = () => {
  return gulp.src(paths.app.fonts)
    .pipe(gulp.dest(paths.dist.fonts));
}

module.exports = fonts;
