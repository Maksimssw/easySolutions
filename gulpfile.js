import gulp from"gulp";
import browserSync from"browser-sync";

/* Configuration */
import path from"./сonfig/path.js";

/* Tasks */
import clear from'./task/clear.js';
import html from'./task/html.js';
import css from'./task/css.js';
import js from'./task/js.js';
import img from'./task/img.js';
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
    gulp.watch(path.css.watch, css).on("all", browserSync.reload);
    gulp.watch(path.js.src, js).on("all", browserSync.reload);
    gulp.watch(path.img.src, img).on("all", browserSync.reload);
    gulp.watch(path.font.src, font).on("all", browserSync.reload);
}


const build = gulp.series(
    clear,
    gulp.parallel(html, css, img, font, js)
)

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
)

/* Assembling */

export {html};
export {clear};
export {watcher};
export {css};
export {js};
export {img};
export {font};

export default dev