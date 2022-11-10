import gulp from "gulp";

/* Configuration */
import path from "../сonfig/path.js";
import app from "../сonfig/app.js";


/* Plugins */
import plumber from "gulp-plumber"
import newer from "gulp-newer"
import fonter from "gulp-fonter"
import ttf2woff2 from "gulp-ttf2woff2"

/* Processing Fonts */
export default () => {
    return gulp.src(path.font.src)
        .pipe(plumber(app.plumberFont))
        .pipe(newer(path.font.dest))
        .pipe(fonter())
        .pipe(gulp.dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.font.dest));
}