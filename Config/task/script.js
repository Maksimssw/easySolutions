import gulp from "gulp";

/* Configuration */
import path from "../сonfig/path.js";
import app from "../сonfig/app.js";


/* Plugins */
import plumber from "gulp-plumber"
import babel from "gulp-babel"
import webpack from "webpack-stream"

/* Processing JavaScript */
export default () => {
    return gulp.src(path.script.src)
        .pipe(plumber(app.plumberJS))
        .pipe(babel())
        .pipe(webpack({mode: "development"}))
        .pipe(gulp.dest(path.script.dest));
}