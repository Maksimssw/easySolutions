import gulp from "gulp";

/* Plugins */
import del from "del";
import clean from 'gulp-clean';

/* Configuration */
import path from "../сonfig/path.js";


/* Deleting directories */
export default () => {
    return gulp.src(path.root)  
        .pipe(clean({force: true}, del(path.root)))
}
 