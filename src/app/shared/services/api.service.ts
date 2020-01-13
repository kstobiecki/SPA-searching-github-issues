import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IssueInterface} from '../interfaces';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ApiService {
  public issues: Subject<IssueInterface> = new Subject();
  private issuesUrl = environment.api.issues;

  constructor(private readonly httpClient: HttpClient) {}

  public getOpenIssues(query: string): Observable<IssueInterface> {
    return this.httpClient.get<IssueInterface>(this.issuesUrl, {params: {q: query}});
  }
}
