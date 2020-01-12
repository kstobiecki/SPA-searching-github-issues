import {Component, Input, OnInit} from '@angular/core';
import {IssueItemInterface} from '../../../../shared/interfaces';

@Component({
  selector: 'app-issues-card-result',
  templateUrl: './issues-card-result.component.html',
  styleUrls: ['./issues-card-result.component.scss'],
})
export class IssuesCardResultComponent implements OnInit {
  @Input() issue: IssueItemInterface;
  public creationDate: string;

  ngOnInit(): void {
    this.creationDate = new Date(this.issue.created_at).toDateString();
  }
}
