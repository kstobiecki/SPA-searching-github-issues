import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IssueInterface} from '../interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  public getOpenIssues(query: string): Observable<IssueInterface[] | any> {
    const issuesUrl = environment.api.issues;
    return this.httpClient.get(issuesUrl, this.httpOptions);
  }
}
