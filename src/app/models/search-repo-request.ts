import { SearchRepoOrder, SearchRepoSort } from "../types";

export interface SearchRepoRequest {
  q?: string;
  sort?: SearchRepoSort;
  order?: SearchRepoOrder;
  per_page?: number;
  page?: number;
}
