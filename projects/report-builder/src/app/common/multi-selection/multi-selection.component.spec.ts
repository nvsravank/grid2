import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MultiSelectionComponent } from './multi-selection.component';

const dialogMock = {
  open: () => {
    return {
      afterClosed: () => { return of(true); }
    };
  }
};
describe('MultiSelectionComponent', () => {
  let component: MultiSelectionComponent;
  let fixture: ComponentFixture<MultiSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MultiSelectionComponent ],
      providers: [
        { provide: MatDialog, useValue: dialogMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectionComponent);
    component = fixture.componentInstance;
    component.name = '';
    component.maxSelections = 10;
    component.selections = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
