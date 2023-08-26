import { TestBed } from '@angular/core/testing';

import { CutsomerreviewService } from './cutsomerreview.service';

describe('CutsomerreviewService', () => {
  let service: CutsomerreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CutsomerreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
