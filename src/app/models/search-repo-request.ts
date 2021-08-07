export interface SearchRepoRequest {
  q?: string;
  sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated';
  order?: 'acs' | 'desc';
  per_page?: number;
  page?: number;
}
