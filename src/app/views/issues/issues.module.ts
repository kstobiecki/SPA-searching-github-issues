import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IssuesComponents} from './components';
import {IssuesServices} from './services';
import {ApiService} from '../../shared/services';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    ...IssuesComponents
  ],
  declarations: [
    ...IssuesComponents
  ],
  providers: [
    ...IssuesServices,
    ApiService
  ]
})
export class IssuesModule { }
