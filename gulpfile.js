const gulp = require("gulp");
const browserSync = require("browser-sync").create();

/* Configuration */
const path = require("./config/path.js");


/* Tasks */
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const css = require('./task/css.js');
const js = require('./task/js.js');
const img = require('./task/img');
const font = require('./task/font');

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
    gulp.parallel(html, css, img, font, js);
)

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server);
)

/* Assembling */

exports.html = html;
exports.clear = clear;
exports.watcher = watcher;
exports.css = css;
exports.js = js;
exports.img = img;
exports.font = font;

exports.dev = dev;
exports.build = build;