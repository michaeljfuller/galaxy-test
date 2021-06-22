export interface ArticlesProvider {
    fetchArticles(offset: number, limit: number, filters?: ArticleFilters): Promise<Article[]>;
}
export default ArticlesProvider;

export interface ArticleFilters {
    order?: 'asc'|'desc'; // published ordering
}