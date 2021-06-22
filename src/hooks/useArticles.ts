import {useContext} from "react";
import {ArticlesContext, ArticlesProvider} from "../services/articles/ArticlesContext";

export default function useArticles(): ArticlesProvider {
    const provider = useContext(ArticlesContext);
    if (!provider) throw Error("No ArticlesContext.Provider");
    return provider;
}
