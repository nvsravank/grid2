import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriCommonComponent } from './wri-common.component';

describe('WriCommonComponent', () => {
  let component: WriCommonComponent;
  let fixture: ComponentFixture<WriCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
