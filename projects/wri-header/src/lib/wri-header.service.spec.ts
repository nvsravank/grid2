import { TestBed } from '@angular/core/testing';

import { WRIHeaderService } from './wri-header.service';

describe('WRIHeaderService', () => {
  let service: WRIHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WRIHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
