import {Component, OnDestroy, OnInit} from '@angular/core';
import {IssueInterface} from '../../../../shared/interfaces';
import {ApiService, SharedService} from '../../../../shared/services';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-issues-card',
  templateUrl: './issues-card.component.html',
  styleUrls: ['./issues-card.component.scss'],
})
export class IssuesCardComponent implements OnInit, OnDestroy {
  public issues: IssueInterface;
  public showNotFound = true;
  public loading = false;

  private subscription: Subscription = new Subscription();

  constructor(private apiService: ApiService,
              private sharedService: SharedService) {}

  ngOnInit(): void {
    this.subscription.add(this.apiService.issues.subscribe((res: IssueInterface) => {
      res.total_count ? this.showNotFound = false : this.showNotFound = true;
      this.issues = res;
      this.sharedService.loadingData.next(false);
    }));

    this.subscription.add(this.sharedService.loadingData.subscribe((loading: boolean) => {
      this.loading = loading;
      if (loading) {
        this.showNotFound = false;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
