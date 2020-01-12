import {Component, Input} from '@angular/core';
import {IssueInterface} from '../../../../shared/interfaces';

@Component({
  selector: 'app-issues-card-header',
  templateUrl: './issues-card-header.component.html',
  styleUrls: ['./issues-card-header.component.scss'],
})
export class IssuesCardHeaderComponent {
  @Input() issues: IssueInterface;

  constructor() {}
}
