import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'gan-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RepoCardComponent implements OnInit {

  @Input() repo: Repository;

  noDescriptionText = '<No description>';

  constructor() { }

  ngOnInit() {
  }

}
