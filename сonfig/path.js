const pathSrc = "./src"; 
const pathDest = "./dist";

export default {
    root: pathDest,
    src: pathSrc,

    html: {
        src: pathSrc + "/pages/*.html",
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

    images: {
        src: pathSrc + "/static/images/**/*.*",
        dest: pathDest + "/static/images"
    },

    font: {
        src: pathSrc + "/static/fonts/**/*.{eot,ttf,otf,otc,woff,woff2,svg}",
        dest: pathDest + "/static/fonts"
    }
}