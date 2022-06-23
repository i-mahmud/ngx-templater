import { TestBed } from '@angular/core/testing';

import { NgxBasicTemplaterService } from './ngx-basic-templater.service';

describe('NgxBasicTemplaterService', () => {
  let service: NgxBasicTemplaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBasicTemplaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
