import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { HoldingsReportBuilderComponent } from './holdings-report-builder.component';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MatDialogRefMock {
  close(value = '') {

  }
}

describe('HoldingsReportBuilderComponent', () => {
  let component: HoldingsReportBuilderComponent;
  let fixture: ComponentFixture<HoldingsReportBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingsReportBuilderComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
      ],
      providers:[
        { provide: MatDialogRef, useClass: MatDialogRefMock },
        MatDialog
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingsReportBuilderComponent);
    component = fixture.componentInstance;
    component.resizeEvent = new EventEmitter<any>();
    component.widget = {cols: 6, rows: 2, y: 0, x: 0, hasContent: true,  dragEnabled: true, resizeEnabled: true, delete: true, label: 'Multi Page Holdings', type: HoldingsReportBuilderComponent, edit: true};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
