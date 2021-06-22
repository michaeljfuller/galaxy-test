import {ArticlesProvider, ArticleFilters} from "../ArticlesProvider";
import {wait, createArticle} from "../../../utils/mock-utils";

export interface MockArticlesApiOptions {
    fetchArticlesDelay: number;
}

export default class MockArticlesApi implements ArticlesProvider {
    current: Article[] = [];

    private options: MockArticlesApiOptions = {
        fetchArticlesDelay: 500,
    }

    constructor(options?: Partial<MockArticlesApiOptions>) {
        Object.assign(this.options, options);
    }

    async fetchArticles(offset: number, limit: number, filters?: ArticleFilters): Promise<Article[]> {
        await wait(this.options.fetchArticlesDelay);
        return this.current = [
            createArticle(1),
            createArticle(2),
            createArticle(3),
        ];
    }

}