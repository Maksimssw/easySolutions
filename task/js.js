import gulp from "gulp";

/* Configuration */
import path from "../config/path.js";
import app from "../config/app.js";


/* Plugins */
import plumber from "gulp-plumber"
import babel from "gulp-babel"
import webpack from "webpack-stream"

/* Processing JavaScript */
export default () => {
    return gulp.src(path.js.src)
        .pipe(plumber(app.plumberJS))
        .pipe(babel())
        .pipe(webpack({mode: "development"}))
        .pipe(gulp.dest(path.js.dest));
}