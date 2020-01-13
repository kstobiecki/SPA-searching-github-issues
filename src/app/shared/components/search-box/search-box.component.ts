import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {catchError, debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {ApiService, SharedService} from '../../services';
import {IssueInterface} from '../../interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  public searchIssueControl: FormControl;

  private subscription: Subscription = new Subscription();
  private debounceTime = 1000;
  private openIssuesQuery = 'is:open is:issue archived:false';

  constructor(private apiService: ApiService,
              private sharedService: SharedService) {}

  ngOnInit(): void {
    this.searchIssueControl = new FormControl('');
    this.subscription.add(this.searchIssueControl.valueChanges
      .pipe(
        filter(val => val.length > 2),
        map(val => val.trim()),
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
        switchMap((q: string) => {
          const query = `${this.openIssuesQuery} ${q}`;
          this.sharedService.loadingData.next(true);
          return this.apiService.getOpenIssues(query);
        }),
        catchError(err => {
          throw new Error('Error in source. Details: ' + err);
        })
      )
      .subscribe( (res: IssueInterface) => {
        this.apiService.issues.next(res);
      }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
