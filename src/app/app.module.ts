import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {IssuesModule} from './views/issues/issues.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    IssuesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
