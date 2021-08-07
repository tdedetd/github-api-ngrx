import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Repository } from 'src/app/models/repository';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'gan-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesComponent implements OnInit {

  repos$: Observable<Repository[]>;

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.repos$ = this.github.getRepositories({ q: 'angular' }).pipe(
      pluck('items')
    );
  }

}
