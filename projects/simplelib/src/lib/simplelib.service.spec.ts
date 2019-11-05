import { TestBed } from '@angular/core/testing';

import { SimplelibService } from './simplelib.service';

describe('SimplelibService', () => {
  let service: SimplelibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplelibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
