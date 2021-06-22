import {createContext} from "react";
import type ArticlesProvider from "./ArticlesProvider";

export type {ArticlesProvider} from "./ArticlesProvider";

export const ArticlesContext = createContext<ArticlesProvider|undefined>(undefined);
export default ArticlesContext;
