import {Component, OnInit} from '@angular/core';
import {IssueInterface} from '../../../../shared/interfaces';
import {ApiService} from '../../../../shared/services';

@Component({
  selector: 'app-issues-card',
  templateUrl: './issues-card.component.html',
  styleUrls: ['./issues-card.component.scss'],
})
export class IssuesCardComponent implements OnInit {
  public issues: IssueInterface;
  public foundIssues = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.issues.subscribe((res: IssueInterface) => {
      res.total_count ? this.foundIssues = true : this.foundIssues = false;
      this.issues = res;
    });
  }
}
