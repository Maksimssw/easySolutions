/* Plugins */
import notify from "gulp-notify";

export default {
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
    plumberFont: {
        errorHandler: notify.onError(error => ({
            title: "Font",
            message: error.message
        })) 
    },

    imagemin: {
        verbose: true
    },
    
    fonter: {
        format: ["ttf", "woff", "eot", "svg"]
    }
}