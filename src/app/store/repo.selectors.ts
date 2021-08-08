import { createSelector } from "@ngrx/store";

import { AppState } from ".";
import { RepoState } from "./repo.reducers";

const selectRepo = (state: AppState) => state.repo;

export const selectRepositories = createSelector(
  selectRepo,
  (state: RepoState) => state.repositories
);
