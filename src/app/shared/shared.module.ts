import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedComponents} from './components';
import {SharedServices} from './services';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    ...SharedComponents
  ],
  declarations: [
    ...SharedComponents
  ],
  providers: [
    ...SharedServices
  ]
})
export class SharedModule { }
