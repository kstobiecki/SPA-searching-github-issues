import {Component} from '@angular/core';
import {AppRouterUrls} from './app-routing.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appRouterUrls = AppRouterUrls;
}
