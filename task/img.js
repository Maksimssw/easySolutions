const gulp = require("gulp");

/* Configuration */
const path = require("../config/path.js");
const app = require("../config/app.js");


/* Plugins */
const plumber = require("gulp-plumber")
const imagemin = require("gulp-imagemin")
const newer = require("gulp-newer")
const webp = require("gulp-webp")

/* Processing Images */
const img = () => {
    return gulp.src(path.img.src)
        .pipe(plumber(app.plumberIMG))
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(gulp.dest(path.img.dest))
        .pipe(gulp.src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(imagemin(app.imagemin))
        .pipe(gulp.dest(path.img.dest));
}

module.exports = img;