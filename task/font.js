const gulp = require("gulp");

/* Configuration */
const path = require("../config/path.js");
const app = require("../config/app.js");


/* Plugins */
const plumber = require("gulp-plumber")
const newer = require("gulp-newer")
const fonter = require("gulp-fonter")
const ttf2woff2 = require("gulp-ttf2woff2")

/* Processing Fonts */
const font = () => {
    return gulp.src(path.font.src)
        .pipe(plumber(app.plumberFont))
        .pipe(newer(path.font.dest))
        .pipe(fonter())
        .pipe(gulp.dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.font.dest));
}

module.exports = font;