const gulp = require("gulp");

/* Plugins */
const plumber = require("gulp-plumber")

/* Configuration */
const path = require("../config/path.js");
const app = require("../config/app.js");

/* CSS Processing */
const css = () => {
    return gulp.src(path.css.src)
        .pipe(plumber(app.plumberCss))
        .pipe(gulp.dest(path.css.dest));
}

module.exports = css;