import { createSelector } from "@ngrx/store";

import { AppState } from ".";
import { RepoState } from "./repo.reducers";

const selectRepo = (state: AppState) => state.repo;

export const selectLoadMore = createSelector(
  selectRepo,
  (state: RepoState) => state.loadMore
);

export const selectRepositories = createSelector(
  selectRepo,
  (state: RepoState) => state.repositories
);

export const selectFilters = createSelector(
  selectRepo,
  (state: RepoState) => state.filters
);

export const selectTotal = createSelector(
  selectRepo,
  (state: RepoState) => state.total
);
