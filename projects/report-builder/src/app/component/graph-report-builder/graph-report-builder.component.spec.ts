import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphReportBuilderComponent } from './graph-report-builder.component';

describe('GraphReportBuilderComponent', () => {
  let component: GraphReportBuilderComponent;
  let fixture: ComponentFixture<GraphReportBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphReportBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphReportBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
