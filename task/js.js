const gulp = require("gulp");

/* Configuration */
const path = require("../config/path.js");
const app = require("../config/app.js");


/* Plugins */
const plumber = require("gulp-plumber")
const babel = require("gulp-babel")
const webpack = require("webpack-stream")

/* Processing JavaScript */
const js = () => {
    return gulp.src(path.js.src)
        .pipe(plumber(app.plumberJS))
        .pipe(babel())
        .pipe(webpack({mode: "development"}))
        .pipe(gulp.dest(path.js.dest));
}

module.exports = js;