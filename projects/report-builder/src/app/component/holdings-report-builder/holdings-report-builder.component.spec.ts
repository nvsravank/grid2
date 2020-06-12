import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingsReportBuilderComponent } from './holdings-report-builder.component';

describe('HoldingsReportBuilderComponent', () => {
  let component: HoldingsReportBuilderComponent;
  let fixture: ComponentFixture<HoldingsReportBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingsReportBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingsReportBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
