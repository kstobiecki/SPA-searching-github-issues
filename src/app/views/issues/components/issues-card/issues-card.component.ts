import {Component} from '@angular/core';
import {IssuesService} from '../../services';

@Component({
  selector: 'app-issues-card',
  templateUrl: './issues-card.component.html',
  styleUrls: ['./issues-card.component.scss'],
})
export class IssuesCardComponent {
  constructor(private issuesService: IssuesService) {}
}
