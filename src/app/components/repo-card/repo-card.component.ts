import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

const NO_DESCRIPTION = '<No description>';

@Component({
  selector: 'gan-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoCardComponent implements OnInit {

  @Input() repo: Repository;

  noDescriptionText = NO_DESCRIPTION;

  constructor() { }

  ngOnInit() {
  }

}
