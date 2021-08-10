import { Action } from "@ngrx/store";
import { Repository } from "../models/repository";
import { SearchReposFilters } from "../models/search-repos-filters";

export enum ERepoActions {
  LoadRepositories = '[Repo] Load Repositories',
  LoadRepositoriesSuccess = '[Repo] Load Repositories Success',
  SetFilters = '[Repo] Set Filters',
  HideLoadMore = '[Repo] Hide Load More'
}

export class LoadRepositories implements Action {
  readonly type = ERepoActions.LoadRepositories;
}

export class LoadRepositoriesSuccess implements Action {
  readonly type = ERepoActions.LoadRepositoriesSuccess;
  constructor(public payload: { repos: Repository[], total: number }) {}
}

export class SetFilters implements Action {
  readonly type = ERepoActions.SetFilters;
  constructor(public payload: SearchReposFilters) {}
}

export class HideLoadMore implements Action {
  readonly type = ERepoActions.HideLoadMore;
}

export type RepoActions = LoadRepositories
  | LoadRepositoriesSuccess
  | SetFilters
  | HideLoadMore;
