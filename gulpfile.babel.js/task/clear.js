/* Plugins */
import del from "del";

/* Configuration */
import path from "../сonfig/path.js";


/* Deleting directories */
export default () => {
    return del(path.root);
}
 