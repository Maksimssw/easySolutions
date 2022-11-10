import gulp from "gulp";

/* Configuration */
import path from "../сonfig/path.js";
import app from "../сonfig/app.js";


/* Plugins */
import plumber from "gulp-plumber"
import imagemin from "gulp-imagemin"
import newer from "gulp-newer"
import webp from "gulp-webp"

/* Processing Images */
export default () => {
    return gulp.src(path.images.src)
        .pipe(plumber(app.plumberIMG))
        .pipe(newer(path.images.dest))
        .pipe(webp())
        .pipe(gulp.dest(path.images.dest))
        .pipe(gulp.src(path.images.src))
        .pipe(newer(path.images.dest))
        .pipe(imagemin(app.imagemin))
        .pipe(gulp.dest(path.images.dest));
}
