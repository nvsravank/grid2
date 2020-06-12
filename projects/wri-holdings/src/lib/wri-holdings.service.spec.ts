import { TestBed } from '@angular/core/testing';

import { WRIHoldingsService } from './wri-holdings.service';

describe('WRIHoldingsService', () => {
  let service: WRIHoldingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WRIHoldingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
