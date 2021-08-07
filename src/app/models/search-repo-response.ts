import { Repository } from "./repository";

export interface SearchRepoResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}
