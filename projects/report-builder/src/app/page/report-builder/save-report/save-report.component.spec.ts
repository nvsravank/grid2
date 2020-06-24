import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Section, PageType } from '../section';
import { MatDialog } from '@angular/material/dialog';
import { SaveReportComponent } from './save-report.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ReportService } from '../report.service';

const dialogMock = {
  open: () => {
    return {
      afterClosed: () => { return of(true); }
    };
  }
};

describe('SaveReportComponent', () => {
  let component: SaveReportComponent;
  let fixture: ComponentFixture<SaveReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ SaveReportComponent ],
      providers: [
        ReportService,
        { provide: MatDialog, useValue: dialogMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveReportComponent);
    component = fixture.componentInstance;
    component.sections = [];
    component.portraitOrientation = false;
    component.pageType = PageType.MultiPage;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
