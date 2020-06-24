import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReportListService, ReportList } from './report-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReportListComponent } from './report-list.component';
import { allReportsData } from './mock-data';
import { of, Observable } from 'rxjs';
import { FilterArrayPipe } from '../../common/filter-array.pipe';

describe('ReportListComponent', () => {
  let component: ReportListComponent;
  let fixture: ComponentFixture<ReportListComponent>;
  let route: ActivatedRoute;
  let router: Router;
  let reportListService: ReportListService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportListComponent, FilterArrayPipe ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers:[
        {provide: Router, useValue: router},
        {provide: ActivatedRoute, useValue: route},
        ReportListService
      ]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    reportListService = TestBed.get(ReportListService);
    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);
    fixture = TestBed.createComponent(ReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spy = spyOn(reportListService, 'getReportList').and.returnValue(of(allReportsData));
    expect(component).toBeTruthy();
  });
});
