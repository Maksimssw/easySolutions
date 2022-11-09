import gulp from "gulp";

/* Plugins */
import plumber from "gulp-plumber"
import webpCss from "gulp-webp-css"

/* Configuration */
import path from "../config/path.js";
import app from "../config/app.js";

/* CSS Processing */
export default  () => {
    return gulp.src(path.css.src)
        .pipe(plumber(app.plumberCss))
        .pipe(webpCss())
        .pipe(gulp.dest(path.css.dest));
}