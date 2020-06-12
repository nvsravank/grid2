import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterReportBuilderComponent } from './footer-report-builder.component';

describe('FooterReportBuilderComponent', () => {
  let component: FooterReportBuilderComponent;
  let fixture: ComponentFixture<FooterReportBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterReportBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterReportBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
