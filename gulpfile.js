const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');

const Path = {
  BUILD: __dirname,
  CSS: [
    path.join(__dirname, './css/fonts.css'),
    path.join(__dirname, './css/common.blocks/**/*.css'),
    path.join(__dirname, './css/content.blocks/**/*.css')
  ]
}

function concatCSS(fromPath, toPath) {
  return gulp.src(fromPath).
  pipe(concat('style.css')).
  pipe(gulp.dest(toPath));
}

function buildCSS() {
  return concatCSS(Path.CSS, Path.BUILD);
}

module.exports = {
  default: gulp.parallel([buildCSS])
}
