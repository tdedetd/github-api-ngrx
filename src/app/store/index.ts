import { ActionReducerMap } from "@ngrx/store";
import { repoReducer, RepoState } from "./repo.reducers";

export interface AppState {
  repo: RepoState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  repo: repoReducer
}
