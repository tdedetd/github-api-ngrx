import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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

  name: string;

  orderName: string;

  sort: string;

  order: string;

  constructor() {
    this.filters = this.filters || {
      query: '',
      sort: '',
      order: 'desc'
    };

    this.name = this.filters.query;
    this.order = this.filters.order;
    this.sort = this.filters.sort;

    this.orderName = 'order' + String(new Date().getTime());
  }

  ngOnInit(): void {
  }

  onNameChange(value: string) {
    console.log('onNameChange', value);
  }

  onSortChange(value: SearchRepoSort) {
    console.log('onSortChange', value);
  }

  selectOrder(value: SearchRepoOrder) {
    console.log('selectOrder', value);
  }

}
