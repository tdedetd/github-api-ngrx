import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, switchMap, withLatestFrom } from "rxjs/operators";

import { AppState } from ".";
import { SearchRepoResponse } from "../models/search-repo-response";
import { GithubService } from "../services/github.service";
import { ERepoActions, LoadRepositories, LoadRepositoriesSuccess } from "./repo.actions";

@Injectable()
export class RepoEffects {

  laodRepositories$ = createEffect(() => this.actions$.pipe(
    ofType(ERepoActions.LoadRepositories),
    withLatestFrom(this.store$),
    map(([_, state]) => state.repo),
    switchMap(repoState => {
      if (!repoState.filters.query) {
        return of({
          incomplete_results: false,
          items: [],
          total_count: 0
        } as SearchRepoResponse);
      }

      return this.github.getRepositories({
        q: repoState.filters.query,
        sort: repoState.filters.sort,
        order: repoState.filters.order,
        per_page: repoState.repositories.perPage,
        page: repoState.repositories.nextPage
      })
    }),
    map(data => new LoadRepositoriesSuccess({ repos: data.items, total: data.total_count }))
  ));

  setFilters$ = createEffect(() => this.actions$.pipe(
    ofType(ERepoActions.SetFilters),
    map(_ => new LoadRepositories())
  ));

  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private github: GithubService) {}
}
