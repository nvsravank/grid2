import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WRIHeaderComponent } from './wri-header.component';

describe('WRIHeaderComponent', () => {
  let component: WRIHeaderComponent;
  let fixture: ComponentFixture<WRIHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WRIHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WRIHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
