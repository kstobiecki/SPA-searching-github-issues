import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IssuesComponents} from './components';
import {IssuesServices} from './services';
import {ApiService} from '../../shared/services';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
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
