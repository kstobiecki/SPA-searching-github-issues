import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedComponents} from './components';
import {SharedServices} from './services';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
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
