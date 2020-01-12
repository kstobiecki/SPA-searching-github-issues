import {Component, OnInit} from '@angular/core';
import {IssueInterface} from '../../../../shared/interfaces';
import {ApiService, SharedService} from '../../../../shared/services';

@Component({
  selector: 'app-issues-card',
  templateUrl: './issues-card.component.html',
  styleUrls: ['./issues-card.component.scss'],
})
export class IssuesCardComponent implements OnInit {
  public issues: IssueInterface;
  public showIssues = true;
  public loading = false;

  constructor(private apiService: ApiService,
              private sharedService: SharedService) {}

  ngOnInit(): void {
    this.apiService.issues.subscribe((res: IssueInterface) => {
      res.total_count ? this.showIssues = false : this.showIssues = true;
      this.issues = res;
      this.sharedService.loadingData.next(false);
    });

    this.sharedService.loadingData.subscribe((loading: boolean) => {
      this.loading = loading;
      if (loading) {
        this.showIssues = false;
      }
    });
  }
}
