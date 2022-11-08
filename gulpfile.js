const gulp = require("gulp");
const browserSync = require("browser-sync").create();

/* Configuration */
const path = require("./config/path.js");


/* Tasks */
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const css = require('./task/css.js');
const js = require('./task/js.js');

/* Server */
const server = () => {
    browserSync.init({ 
        server: {
            baseDir: path.src
        }
    })
}   

/* Observation */
const watcher = () => {
    gulp.watch(path.html.watch, html).on("all", browserSync.reload);
    gulp.watch(path.css.watch, css).on("all", browserSync.reload);
    gulp.watch(path.js.watch, js).on("all", browserSync.reload);
}

/* Assembling */

exports.html = html;
exports.clear = clear;
exports.watcher = watcher;
exports.css = css;
exports.js = js;

exports.dev = gulp.series(
    clear,
    gulp.parallel(html, css, js),
    gulp.parallel(watcher, server)
)