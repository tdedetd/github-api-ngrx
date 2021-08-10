import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Repository } from 'src/app/models/repository';
import { SearchReposFilters } from 'src/app/models/search-repos-filters';
import { LoadRepositories, SetFilters } from 'src/app/store/repo.actions';
import { selectFilters, selectLoadMore, selectRepositories } from 'src/app/store/repo.selectors';

@Component({
  selector: 'gan-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RepositoriesComponent implements OnInit {

  filters$: Observable<SearchReposFilters>;

  loadMore$: Observable<boolean>;

  repos$: Observable<Repository[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.loadMore$ = this.store.select(selectLoadMore);
    this.repos$ = this.store.select(selectRepositories);
    this.filters$ = this.store.select(selectFilters);
    this.loadRepos();
  }

  onFiltersChange(filters: SearchReposFilters) {
    this.store.dispatch(new SetFilters(filters));
  }

  onLoadMoreButtonClick() {
    this.loadRepos();
  }

  private loadRepos() {
    this.store.dispatch(new LoadRepositories());
  }

}
