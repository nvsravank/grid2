import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReportListService } from './report-list.service';

describe('ReportListService', () => {
  let service: ReportListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers:[
        HttpClient
      ]
    });
    service = TestBed.inject(ReportListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
