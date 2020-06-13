import { Component, OnInit, Input, } from '@angular/core';
import { WRIHoldingsService, HoldingsCustomizationOptions, Category, CategorizedData } from './wri-holdings.service';
import { isArray } from 'util';

@Component({
  selector: 'wri-holdings',
  templateUrl: './wri-holdings.component.html',
  styleUrls: ['./wri-holdings.component.scss']
})
export class WRIHoldingsComponent implements OnInit {
  @Input()
  options: HoldingsCustomizationOptions;
  @Input()
  useDummyData: boolean = false;
  @Input()
  numberOfColumnsToShow: number = 10;
  categories: Category[] = [];
  uncategorized: Category;
  valueColumnIndex: number = 0;
  constructor(private service: WRIHoldingsService) {
  }

  ngOnInit(): void {
    this.service.getData(this.options, this.useDummyData).subscribe(
      (returnValue: CategorizedData) => {
        if (returnValue.isCategorized) {
          this.categories = returnValue.categorizedData;
        } else {
          this.uncategorized = returnValue.uncategorizedData;
        }
        this.setValueColumnIndex();    
      }
    );
  }

  setValueColumnIndex(){
    let found = false;
    this.valueColumnIndex = 0;
    // console.log(this.valueColumnIndex);
    for (let index = 0; index < this.options.dataColumns.length && !found; index++) {
      const element = this.options.dataColumns[index];
      if (element.value === "value") {
        found = true;
        this.valueColumnIndex = index;
      }
    }
    // console.log(this.valueColumnIndex);
  }
}
