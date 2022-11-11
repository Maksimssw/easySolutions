import gulp from "gulp";
import browserSync from "browser-sync";

/* Configuration */
import path from"./сonfig/path.js";

/* Tasks */
import clear from'./task/clear.js';
import html from'./task/html.js';
import styles from'./task/styles.js';
import js from'./task/script.js';
import img from'./task/images.js';
import font from'./task/font.js';

/* Server */
const server = () => {
    browserSync.init({ 
        server: {
            baseDir: path.root
        }
    })
}   

/* Observation */
const watcher = () => {
    gulp.watch(path.html.src, html).on("all", browserSync.reload);
    gulp.watch(path.styles.watch, styles).on("all", browserSync.reload);
    gulp.watch(path.script.src, js).on("all", browserSync.reload);
    gulp.watch(path.images.src, img).on("all", browserSync.reload);
    gulp.watch(path.font.src, font).on("all", browserSync.reload);
}

const build = gulp.series(
    clear,
    gulp.parallel(html, styles, img, font, js)
)

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
)

/* Assembling */

export {html};
export {watcher};
export {styles};
export {js};
export {img};
export {font};

export default dev