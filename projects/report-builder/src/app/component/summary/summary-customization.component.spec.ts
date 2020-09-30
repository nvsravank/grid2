import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCustomizationComponent } from './summary-customization.component';

describe('SummaryCustomizationComponent', () => {
  let component: SummaryCustomizationComponent;
  let fixture: ComponentFixture<SummaryCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
