import gulp from "gulp";

/* Configuration */
import path from "../config/path.js";
import app from "../config/app.js";

/* Plugins */
import plumber from "gulp-plumber"
import webpHtml from "gulp-webp-html"

/* Processing HTML */
export default () => {
    return gulp.src(path.html.src)
        .pipe(plumber(app.plumber))
        .pipe(webpHtml())
        .pipe(gulp.dest(path.html.dest));
}