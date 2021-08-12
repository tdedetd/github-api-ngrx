import { Repository } from "../models/repository";
import { SearchReposFilters } from "../models/search-repos-filters";
import { ERepoActions, RepoActions } from "./repo.actions";

export interface RepoState {
  filters: SearchReposFilters,
  repositories: {
    list: Repository[];
    loadMore: boolean;
    nextPage: number;
    perPage: number;
    total: number;
  }
}

export const initialRepoState: RepoState = {
  filters: {
    query: '',
    sort: '',
    order: 'desc'
  },
  repositories: {
    loadMore: false,
    nextPage: 1,
    perPage: 30,
    list: [],
    total: 0
  },
};

export const repoReducer = (
  state: RepoState = initialRepoState,
  action: RepoActions
): RepoState => {
  switch (action.type) {
    case ERepoActions.LoadRepositoriesSuccess: {
      const repositories = [...state.repositories.list, ...action.payload.repos];
      return {
        ...state,
        repositories: {
          ...state.repositories,
          list: repositories,
          loadMore: repositories.length < action.payload.total,
          nextPage: state.repositories.nextPage + 1,
          total: action.payload.total
        }
      };
    }
    case ERepoActions.SetFilters:
      return {
        ...state,
        filters: action.payload,
        repositories: {
          ...state.repositories,
          list: [],
          loadMore: false,
          nextPage: 1,
        }
      };
    case ERepoActions.HideLoadMore:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          loadMore: false
        }
      };
  }

  return state;
}
