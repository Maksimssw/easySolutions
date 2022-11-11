const pathSrc = "../src"; 
const pathDest = "../dist";

export default {
    root: pathDest,
    src: pathSrc,

    html: {
        src: pathSrc + "/pages/*.html",
        dest: pathDest
    },

    styles: {
        src: pathSrc + "/static/styles/*.css",
        watch: pathSrc +  "/static/styles/**/*.css",
        dest: pathDest + "/static/styles"
    },

    script: {
        src: pathSrc + "/static/script/**/*.js",
        dest: pathDest + "/static/script"
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