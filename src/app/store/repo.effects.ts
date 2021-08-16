import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { iif, of } from "rxjs";
import { map, mergeMap, withLatestFrom } from "rxjs/operators";

import { AppState } from ".";
import { SearchRepoResponse } from "../models/search-repo-response";
import { GithubService } from "../services/github.service";
import { ERepoActions, LoadRepositories, LoadRepositoriesSuccess } from "./repo.actions";

@Injectable()
export class RepoEffects {

  laodRepositories$ = createEffect(() => this.actions$.pipe(
    // Отфильтровыаем по типу действия
    ofType(ERepoActions.LoadRepositories),

    // Вызываем текущее состояние
    withLatestFrom(this.store$),

    // Принимаем на вход кортеж из действия и состояния. Действие полезной нагржузки не имеет, оно нам в дальнейшем не нужно
    map(([_, state]) => state.repo),

    // Проверяем наличие заполенной строки запроса. Если строка пустая, возвращаем пустые данные.
    mergeMap(repoState =>
      iif(
        () => !!repoState.filters.query,
        this.github.getRepositories({
          q: repoState.filters.query,
          sort: repoState.filters.sort,
          order: repoState.filters.order,
          per_page: repoState.repositories.perPage,
          page: repoState.repositories.nextPage
        }),
        of({
          incomplete_results: false,
          items: [],
          total_count: 0
        } as SearchRepoResponse),
      )
    ),

    // Возвращаем действие, парадаем туда полученные данные
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
