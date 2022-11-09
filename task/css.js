const gulp = require("gulp");

/* Plugins */
const plumber = require("gulp-plumber")
const webpCss = require("gulp-webp-css")

/* Configuration */
const path = require("../config/path.js");
const app = require("../config/app.js");

/* CSS Processing */
const css = () => {
    return gulp.src(path.css.src)
        .pipe(plumber(app.plumberCss))
        .pipe(webpCss())
        .pipe(gulp.dest(path.css.dest));
}

module.exports = css;