const pathSrc = "./src"; 
const pathDest = "./dist";

module.exports = {
    root: pathDest,
    src: pathSrc,

    html: {
        src: pathSrc + "/**/*.html",
        dest: pathDest
    },

    css: {
        src: pathSrc + "/static/css/*.css",
        watch: pathSrc +  "/static/css/**/*.css",
        dest: pathDest + "/static/css"
    },

    js: {
        src: pathSrc + "/static/js/**/*.js",
        dest: pathDest + "/static/js"
    },

    img: {
        src: pathSrc + "/static/img/**/*.*",
        dest: pathDest + "/static/img"
    },

    font: {
        src: pathSrc + "/static/fonts/**/*.{eot,ttf,otf,otc,woff,woff2,svg}",
        dest: pathDest + "/static/fonts"
    }
}