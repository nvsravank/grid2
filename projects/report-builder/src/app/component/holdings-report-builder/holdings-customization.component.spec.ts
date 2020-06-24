import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { HoldingsCustomizationComponent } from './holdings-customization.component';
import { Selection, DataColumn, HoldingsCustomizationOptions, AvailableColumnOptions, WRIHoldingsService } from 'wri-holdings';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MatDialogRefMock {
  close(value = '') {

  }
}

class MockWRIHoldingsService extends WRIHoldingsService {}

describe('HoldingsCustomizationComponent', () => {
  let component: HoldingsCustomizationComponent;
  let fixture: ComponentFixture<HoldingsCustomizationComponent>;
  let data: HoldingsCustomizationOptions = {
    category1: "investor",
    category2: "account",
    category3: "assetClass1",
    category1Data: [],
    category2Data: [],
    category3Data: [],
    dataColumns: []
  };
  let mockWRIHoldingsService: MockWRIHoldingsService;

  beforeEach(async(() => {
    mockWRIHoldingsService = new MockWRIHoldingsService(null);
    TestBed.overrideProvider(WRIHoldingsService, { useValue: mockWRIHoldingsService });
    TestBed.configureTestingModule({
      declarations: [ HoldingsCustomizationComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
      ],
      providers:[
        { provide: MatDialogRef, useClass: MatDialogRefMock },
        MatDialog,
         {provide: MAT_DIALOG_DATA, useValue: data}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingsCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
