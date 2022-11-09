/* Plugins */
const notify = require("gulp-notify")

module.exports = {
    plumberHTML: {
        errorHandler: notify.onError(error => ({
            title: "HTML",
            message: error.message
        })) 
    },
    plumberCss: {
        errorHandler: notify.onError(error => ({
            title: "CSS",
            message: error.message
        })) 
    },
    plumberJS: {
        errorHandler: notify.onError(error => ({
            title: "JS",
            message: error.message
        })) 
    },
    plumberIMG: {
        errorHandler: notify.onError(error => ({
            title: "Images",
            message: error.message
        })) 
    },

    imagemin: {
        verbose: true
    }
}