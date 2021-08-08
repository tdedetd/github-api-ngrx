import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Repository } from 'src/app/models/repository';
import { LoadRepositories } from 'src/app/store/repo.actions';
import { selectRepositories } from 'src/app/store/repo.selectors';

@Component({
  selector: 'gan-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesComponent implements OnInit {

  repos$: Observable<Repository[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new LoadRepositories());
    this.repos$ = this.store.select(selectRepositories);
  }

}
