import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppRouterUrls, AppRoutes} from './app-routing.config';
import {IssuesCardComponent} from './views/issues/components';

const routes: Routes = [
  { path: '', redirectTo: AppRouterUrls.DEFAULT, pathMatch: 'full' },
  { path: AppRoutes.DEFAULT, component: IssuesCardComponent },
  { path: '**', redirectTo: AppRouterUrls.DEFAULT }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
