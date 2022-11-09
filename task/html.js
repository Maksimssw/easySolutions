const gulp = require("gulp");

/* Configuration */
const path = require("../config/path.js");
const app = require("../config/app.js");

/* Plugins */
const plumber = require("gulp-plumber")
const webpHtml = require("gulp-webp-html")

/* Processing HTML */
const html = () => {
    return gulp.src(path.html.src)
        .pipe(plumber(app.plumber))
        .pipe(webpHtml())
        .pipe(gulp.dest(path.html.dest));
}

module.exports = html;