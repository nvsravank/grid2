import { TestBed } from '@angular/core/testing';

import { WriCommonService } from './wri-common.service';

describe('WriCommonService', () => {
  let service: WriCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WriCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
