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
    component.widget =  {cols: 12, rows: 1, y: 0, x: 0, hasContent: true, dragEnabled: false, resizeEnabled: false, label: 'Header', delete: false,  type: HeaderReportBuilderComponent, edit: true};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
