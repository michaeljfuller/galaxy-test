import {createContext, useContext} from "react";

export const BasePathContext = createContext("/");

/** Returns the base path. Can also add the passed string to it. */
export function useBasePath(appendPath = '') {
    let base = useContext(BasePathContext);
    if (appendPath.includes("://")) return appendPath;
    if (appendPath.startsWith('/')) appendPath = appendPath.slice(1); // Remove slash at start of appendPath
    if (!base.endsWith('/')) base += '/'; // Add slash to start of base
    return base + appendPath;
}
export default useBasePath;
