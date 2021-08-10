import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { SearchReposFilters } from 'src/app/models/search-repos-filters';
import { SearchRepoOrder, SearchRepoSort } from 'src/app/types';

@Component({
  selector: 'gan-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent implements OnInit {

  @Input() filters: SearchReposFilters;

  @Output() filtersChange: EventEmitter<SearchReposFilters> = new EventEmitter();

  readonly orderName: string;

  private value$: Subject<SearchReposFilters> = new Subject();

  constructor() {
    this.orderName = 'order' + String(new Date().getTime());
    this.filters = this.filters || {
      query: '',
      sort: '',
      order: 'desc'
    };
  }

  ngOnInit(): void {
    this.value$.pipe(
      debounceTime(300)
    ).subscribe(filters => this.filtersChange.emit(filters));
  }

  onNameChange(value: string) {
    this.value$.next({
      ...this.filters,
      query: value
    });
  }

  onSortChange(value: SearchRepoSort) {
    this.value$.next({
      ...this.filters,
      sort: value
    });
  }

  selectOrder(value: SearchRepoOrder) {
    this.value$.next({
      ...this.filters,
      order: value
    });
  }

}
