import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from './api.service';
import {environment} from '../../../environments/environment';

describe('apiService', () => {

  let service: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        ApiService
      ]
    });

    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('getOpenIssues', () => {
    it('should return open issues',  done => {
      const dummyResponse = {status: 200};

      service.getOpenIssues('test').subscribe(
        res => {
          expect(res).toEqual(dummyResponse);
        },
        () => done(),
        () => done());

      const req = httpMock.expectOne( `${environment.api.issues}?q=test`);
      expect(req.request.method).toBe('GET');

      req.flush(dummyResponse);
    });
  });
});
