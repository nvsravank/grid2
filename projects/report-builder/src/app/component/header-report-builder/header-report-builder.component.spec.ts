import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReportBuilderComponent } from './header-report-builder.component';

describe('HeaderReportBuilderComponent', () => {
  let component: HeaderReportBuilderComponent;
  let fixture: ComponentFixture<HeaderReportBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderReportBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderReportBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
