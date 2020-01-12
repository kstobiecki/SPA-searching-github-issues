import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SharedService {
  public loadingData: Subject<boolean> = new Subject();
}
