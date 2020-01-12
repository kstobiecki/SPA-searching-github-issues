import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../shared/services';
import {IssueInterface} from '../../../../shared/interfaces';

@Component({
  selector: 'app-issues-card-header',
  templateUrl: './issues-card-header.component.html',
  styleUrls: ['./issues-card-header.component.scss'],
})
export class IssuesCardHeaderComponent implements OnInit {
  public totalValue = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.issues.subscribe((res: IssueInterface) => {
      this.totalValue = res.total_count;
    });
  }
}
