import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  private searchIssueControl: FormControl;
  private debounceTime = 1000;

  constructor() {}

  ngOnInit(): void {
    this.searchIssueControl = new FormControl('');
    this.searchIssueControl.valueChanges
      .pipe(
        filter(val => val.length > 2),
        map(val => val.trim()),
        debounceTime(this.debounceTime),
        distinctUntilChanged()
      )
      .subscribe(query => {
        console.log(query);
      });
  }
}
