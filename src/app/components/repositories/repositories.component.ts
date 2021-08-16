import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Repository } from 'src/app/models/repository';
import { SearchReposFilters } from 'src/app/models/search-repos-filters';
import { HideLoadMore, LoadRepositories, SetFilters } from 'src/app/store/repo.actions';
import { selectFilters, selectLoadMore, selectRepositories, selectTotal } from 'src/app/store/repo.selectors';

@Component({
  selector: 'gan-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RepositoriesComponent implements OnInit {

  filters$: Observable<SearchReposFilters>;

  loading = false;

  loadMore$: Observable<boolean>;

  repos$: Observable<Repository[]>;

  total$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.repos$ = this.store.select(selectRepositories).pipe(
      tap(_ => this.loading = false)
    );

    this.loadMore$ = this.store.select(selectLoadMore);
    this.filters$ = this.store.select(selectFilters);
    this.total$ = this.store.select(selectTotal);
    this.loadRepos();
  }

  onFiltersChange(filters: SearchReposFilters) {
    this.loading = true;
    this.hideLoadMore();
    this.store.dispatch(new SetFilters(filters));
  }

  onLoadMoreButtonClick() {
    this.loadRepos();
  }

  private hideLoadMore() {
    this.store.dispatch(new HideLoadMore());
  }

  private loadRepos() {
    this.loading = true;
    this.hideLoadMore();
    this.store.dispatch(new LoadRepositories());
  }
}
