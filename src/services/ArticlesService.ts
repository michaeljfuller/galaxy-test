export interface ArticlesService {
    fetchArticles(offset: number, limit: number, filters?: ArticleFilters): Promise<Article[]>;
}
export default ArticlesService;

export interface ArticleFilters {
    order?: 'asc'|'desc'; // published ordering
}
