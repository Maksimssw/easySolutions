const pathSrc = "./src"; 
const pathDest = "./dist";

module.exports = {
    root: pathDest,
    src: pathSrc,

    html: {
        src: pathSrc + "/**/*.html",
        watch: pathSrc +  "/**/*.html",
        dest: pathDest
    },

    css: {
        src: pathSrc + "/static/css/*.css",
        watch: pathSrc +  "/static/css/**/*.css",
        dest: pathDest + "/static/css"
    },

    js: {
        src: pathSrc + "/static/js/**/*.js",
        watch: pathSrc +  "/static/js/**/*.js",
        dest: pathDest + "/static/js"
    }
}