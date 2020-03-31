const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');

const Path = {
  BUILD: path.join(__dirname, './static'),
  CSS: [
    path.join(__dirname, './frontend/css/fonts.css'),
    path.join(__dirname, './frontend/css/common.blocks/**/*.css'),
    path.join(__dirname, './frontend/css/content.blocks/**/*.css')
  ],
  HTML: [
    path.join(__dirname, './frontend/*.html')
  ]
}

function concatCSS(fromPath, toPath) {
  return gulp.src(fromPath).
  pipe(concat('style.css')).
  pipe(gulp.dest(toPath));
}

function moveHTML(fromPath, toPath) {
  return gulp.src(fromPath).
  pipe(gulp.dest(toPath));
}

function buildCSS() {
  return concatCSS(Path.CSS, Path.BUILD);
}

function buildHTML() {
  return moveHTML(Path.HTML, Path.BUILD);
}

module.exports = {
  default: gulp.parallel([buildCSS, buildHTML])
}
