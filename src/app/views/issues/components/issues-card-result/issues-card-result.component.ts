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
  public status = false;

  ngOnInit(): void {
    this.creationDate = new Date(this.issue.created_at).toDateString();
    if (localStorage.getItem(this.issue.id.toString())) {
      this.status = true;
    }
  }

  public toggleSave(issueId: string) {
    this.status = !this.status;
    if (localStorage.getItem(issueId)) {
      localStorage.removeItem(issueId);
    } else {
      localStorage.setItem(issueId, 'save');
    }
  }
}
