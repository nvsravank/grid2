import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WRIFooterComponent } from './wri-footer.component';

describe('WRIFooterComponent', () => {
  let component: WRIFooterComponent;
  let fixture: ComponentFixture<WRIFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WRIFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WRIFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
