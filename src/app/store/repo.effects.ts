import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, withLatestFrom } from "rxjs/operators";

import { AppState } from ".";
import { GithubService } from "../services/github.service";
import { ERepoActions, LoadRepositoriesSuccess } from "./repo.actions";

@Injectable()
export class RepoEffects {

  laodRepositories$ = createEffect(() => this.actions$.pipe(
    ofType(ERepoActions.LoadRepositories),
    withLatestFrom(this.store$),
    map(([_, state]) => state.repo),
    switchMap(repoState => this.github.getRepositories({
      q: repoState.filters.query,
      sort: repoState.filters.sort,
      order: repoState.filters.order,
      per_page: repoState.perPage,
      page: repoState.nextPage
    })),
    map(data => {
      return new LoadRepositoriesSuccess({ repos: data.items, total: data.total_count });
    })
  ));

  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private github: GithubService) {}
}
