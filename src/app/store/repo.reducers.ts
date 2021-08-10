import { Repository } from "../models/repository";
import { SearchReposFilters } from "../models/search-repos-filters";
import { ERepoActions, RepoActions } from "./repo.actions";

export interface RepoState {
  filters: SearchReposFilters,
  loadMore: boolean;
  nextPage: number;
  perPage: number;
  repositories: Repository[];
  total: number;
}

export const initialRepoState: RepoState = {
  filters: {
    query: '',
    sort: '',
    order: 'desc'
  },
  loadMore: false,
  nextPage: 1,
  perPage: 30,
  repositories: [],
  total: 0
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
        repositories,
        total: action.payload.total
      };
    }
    case ERepoActions.SetFilters:
      return {
        ...state,
        filters: action.payload,
        loadMore: false,
        nextPage: 1,
        repositories: []
      }
    case ERepoActions.HideLoadMore:
      return {
        ...state,
        loadMore: false
      }
  }

  return state;
}
