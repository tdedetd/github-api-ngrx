import { Repository } from "../models/repository";
import { SearchReposFilters } from "../models/search-repos-filters";
import { ERepoActions, RepoActions } from "./repo.actions";

export interface RepoState {
  filters: SearchReposFilters,
  loadMore: boolean;
  nextPage: number;
  perPage: number;
  repositories: Repository[];
}

export const initialRepoState: RepoState = {
  filters: {
    query: 'angular',
    sort: '',
    order: 'desc'
  },
  loadMore: false,
  nextPage: 1,
  perPage: 30,
  repositories: []
};

export const repoReducer = (
  state: RepoState = initialRepoState,
  action: RepoActions
): RepoState => {
  switch (action.type) {
    case ERepoActions.LoadRepositoriesSuccess: {
      const repositories = [...state.repositories, ...action.payload.repos];
      return {
        ...state,
        loadMore: repositories.length < action.payload.total,
        nextPage: state.nextPage + 1,
        repositories
      };
    }
  }

  return state;
}
