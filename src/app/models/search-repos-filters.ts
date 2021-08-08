import { SearchRepoOrder, SearchRepoSort } from "../types";

export class SearchReposFilters {
  query: string;
  sort: SearchRepoSort;
  order: SearchRepoOrder;
}
