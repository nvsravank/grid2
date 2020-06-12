import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTableReportBuilderComponent } from './graph-table-report-builder.component';

describe('GraphTableReportBuilderComponent', () => {
  let component: GraphTableReportBuilderComponent;
  let fixture: ComponentFixture<GraphTableReportBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphTableReportBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTableReportBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
