import { TestBed } from '@angular/core/testing';

import { WRIFooterService } from './wri-footer.service';

describe('WRIFooterService', () => {
  let service: WRIFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WRIFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
