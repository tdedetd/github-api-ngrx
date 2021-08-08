import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchReposFilters } from 'src/app/models/search-repos-filters';

@Component({
  selector: 'gan-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent implements OnInit {

  @Input() filters: SearchReposFilters;

  name = '';

  orderName: string;

  constructor() {
    this.filters = this.filters || {
      query: '',
      sort: '',
      order: 'desc'
    };

    this.orderName = 'order' + String(new Date().getTime());
  }

  ngOnInit(): void {
  }

  onNameChange(value: string) {
    console.log('onNameChange', value);
  }

}
