import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {ApiService} from '../../services';
import {IssueInterface} from '../../interfaces';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  private searchIssueControl: FormControl;
  private debounceTime = 1000;
  private openIssuesQuery = 'is:open is:issue archived:false';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.searchIssueControl = new FormControl('');
    this.searchIssueControl.valueChanges
      .pipe(
        filter(val => val.length > 2),
        map(val => val.trim()),
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
        switchMap((q: string) => {
          const query = `${this.openIssuesQuery} ${q}`;
          return this.apiService.getOpenIssues(query);
        })
      )
      .subscribe( (res: IssueInterface) => {
        this.apiService.issues.next(res);
      });
  }
}
