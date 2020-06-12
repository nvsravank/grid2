import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WRIHoldingsComponent } from './wri-holdings.component';

describe('WRIHoldingsComponent', () => {
  let component: WRIHoldingsComponent;
  let fixture: ComponentFixture<WRIHoldingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WRIHoldingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WRIHoldingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
