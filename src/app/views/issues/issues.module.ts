import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IssuesComponents} from './components';
import {IssuesServices} from './services';

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
    ...IssuesServices
  ]
})
export class IssuesModule { }
