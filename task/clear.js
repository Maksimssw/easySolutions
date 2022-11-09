/* Plugins */
import del from "del";

/* Configuration */
import path from "../config/path.js";


/* Deleting directories */
export default () => {
    return del(path.root);
}
 