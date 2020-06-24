import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReportBuilderComponent } from './report-builder.component';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Observable } from 'rxjs';

describe('ReportBuilderComponent', () => {
  let component: ReportBuilderComponent;
  let fixture: ComponentFixture<ReportBuilderComponent>;
  let route: ActivatedRoute;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBuilderComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers:[
        {provide: Router, useValue: router},
        {provide: ActivatedRoute, useValue: route},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);
    fixture = TestBed.createComponent(ReportBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
