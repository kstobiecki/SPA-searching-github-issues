import {Component} from '@angular/core';
import {AppRouterUrls} from '../../../app-routing.config';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {

  appRouterUrls = AppRouterUrls;

  constructor() {}
}
