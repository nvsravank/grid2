import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseReportBuilderComponent } from '../base-report-builder-component.class';
import { MatDialog } from '@angular/material/dialog';
import { HoldingsCustomizationComponent } from './holdings-customization.component';
import { HoldingsCustomizationOptions, AvailableColumnOptions } from 'wri-holdings';
@Component({
  selector: 'app-holdings-report-builder',
  templateUrl: './holdings-report-builder.component.html',
  styleUrls: ['./holdings-report-builder.component.scss']
})
export class HoldingsReportBuilderComponent extends BaseReportBuilderComponent implements OnInit, OnDestroy {
  options: HoldingsCustomizationOptions;
  numberOfColumnsToShow: number = 10;
  constructor(public dialog: MatDialog) {
    super();
    this.options = {
      category1: "investor",
      category2: "account",
      category3: "assetClass1",
      category1Data: [],
      category2Data: [],
      category3Data: [],
      dataColumns: []
    };
        // Starting default configuration being loadeed. If configuration is loaded from server, you need to find the right objects from Available Column Options to use it properly.
        this.options.dataColumns.push(AvailableColumnOptions.columnOptions[12]);
        this.options.dataColumns.push(AvailableColumnOptions.columnOptions[13]);
        this.options.dataColumns.push(AvailableColumnOptions.columnOptions[5]);
        this.options.dataColumns.push(AvailableColumnOptions.columnOptions[0]);
        this.options.dataColumns.push(AvailableColumnOptions.columnOptions[1]);
        this.options.dataColumns.push(AvailableColumnOptions.columnOptions[2]);
        this.options.dataColumns.push(AvailableColumnOptions.columnOptions[7]);
        this.options.dataColumns.push(AvailableColumnOptions.columnOptions[8]);
        this.options.dataColumns.push(AvailableColumnOptions.columnOptions[4]);
        this.options.dataColumns.push(AvailableColumnOptions.columnOptions[6]);
    
        this.options.category1Data.push(AvailableColumnOptions.columnOptions[21]);
        this.options.category2Data.push(AvailableColumnOptions.columnOptions[23]);
        this.options.category2Data.push(AvailableColumnOptions.columnOptions[22]);
        this.options.category2Data.push(AvailableColumnOptions.columnOptions[28]);
        this.options.category3Data.push(AvailableColumnOptions.columnOptions[17]);
        // End default configuration.
    
  }
  ngOnDestroy() {
    //Cleanup subscriptions.
    this.resizeSub.unsubscribe();
  }
  ngOnInit(): void {
    this.optionsOuput.emit(this.options);
    this.resizeSub = this.resizeEvent.subscribe((widget) => {
      if (widget === this.widget) { // or check id , type or whatever you have there
        // resize your widget, chart, map , etc.
        // console.log("Old Size:\nRows: " + widget.rows + "\nColumns: " + widget.cols);
        setTimeout(this.sizing.bind(this), 1000);
      }
    });
    this.sizing();
  }

  sizing() {
    const mincolumns = [0,0,0,0,2,3,4,5,6,7,8,9,10];
    if (this.widget.cols <=12) {this.numberOfColumnsToShow = mincolumns[this.widget.cols]; }
    console.log("dosomething");
  }
  openDialog(): void {
    const doc = document.documentElement;
    const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top != 0 || left != 0) {
      window.scrollTo({
        top : 0,
        left: 0
      });
    }
    const newOptions: HoldingsCustomizationOptions = {
      category1: this.options.category1,
      category2: this.options.category2,
      category3: this.options.category3,
      category1Data: [...this.options.category1Data],
      category2Data: [...this.options.category2Data],
      category3Data: [...this.options.category3Data],
      dataColumns: [...this.options.dataColumns]
    };
    const dialogRef = this.dialog.open(HoldingsCustomizationComponent, {
      disableClose: true,
      width: '1100px',
      data: newOptions
    });
    dialogRef.afterClosed().subscribe(result => {
      // Result is only sent when user does not click cancel.
      if (top != 0 || left != 0) {
        window.scroll({
          top : top,
          left : left
        });
      }
      if(result) {
        this.options = {...result};
        this.options.dataColumns = [...result.dataColumns]
        this.optionsOuput.emit(this.options);
        // this.separateDataIntoCategories();
        // console.log(this.options);
      }
    });
  }

}
