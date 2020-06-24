import { Component, OnInit, Inject, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Selection, DataColumn, HoldingsCustomizationOptions, AvailableColumnOptions } from 'wri-holdings';
import { MultiSelectSelection } from '../../common/multi-selection/multi-selection.component';

@Component({
  selector: 'app-holdings-customization',
  templateUrl: './holdings-customization.component.html',
  styleUrls: ['./holdings-customization.component.scss']
})
export class HoldingsCustomizationComponent implements OnInit {
  saveDisabled: boolean = true;
  categories: Selection[] = [
    {value: null, viewValue: 'No Category Selected'},
    {value: 'investor', viewValue: 'Investor'},
    {value: 'asset', viewValue: 'Asset Holdings'},
    {value: 'account', viewValue: 'Account'},
    {value: 'assetClass1', viewValue: 'Asset Classification 1'},
    {value: 'assetClass2', viewValue: 'Asset Classification 2'},
    {value: 'assetClass3', viewValue: 'Asset Classification 3'},
  ];
  columnOptions: Selection[] = [];
  investorAvailableDataColumns: DataColumn[] = [];
  assetAvailableDataColumns: DataColumn[] = [];
  accountAvailableDataColumns: DataColumn[] = [];
  assetClass1AvailableDataColumns: DataColumn[] = [];
  assetClass2AvailableDataColumns: DataColumn[] = [];
  assetClass3AvailableDataColumns: DataColumn[] = [];
  columnMultiSelection: MultiSelectSelection[] = [];
  category1MultiSelections: MultiSelectSelection[] = [];
  category2MultiSelections: MultiSelectSelection[] = [];
  category3MultiSelections: MultiSelectSelection[] = [];

  categoriesDialogRef: MatDialogRef<any>;
  @ViewChild("myButton", { read: ElementRef }) buttonRef: ElementRef;
  category1PanelOpen = false;
  category2PanelOpen = false;
  category3PanelOpen = false;

  constructor(public selfDialogRef: MatDialogRef<HoldingsCustomizationComponent>,
    @Inject(MAT_DIALOG_DATA) public params: HoldingsCustomizationOptions, public dialog: MatDialog) {
    // Setup the column options from previous selection.
    for (const option of AvailableColumnOptions.columnOptions) {
      let found = false;
      for (let index = 0; index < params.dataColumns.length; index++) {
        const element = params.dataColumns[index];
        if (element.value === option.value) {found = true;}
      }
      if (!found) {this.columnOptions.push(option); }
      // Setup columns for different grouping categories.
      switch (option.parentValue) {
        case "account":
          this.accountAvailableDataColumns.push(option);
        break;
        case "investor":
          this.investorAvailableDataColumns.push(option);
        break;
        case "asset":
          this.assetAvailableDataColumns.push(option);
        break;
        case "assetClass1":
          this.assetClass1AvailableDataColumns.push(option);
        break;
        case "assetClass2":
          this.assetClass2AvailableDataColumns.push(option);
        break;
        case "assetClass3":
          this.assetClass3AvailableDataColumns.push(option);
        break;
        default:
        break;
      }
    }
    // Available options and basic column option selection is complete. Now separate the available data columns based on the category selections and selected columsn for the category.
    this.setupAndFixSelections();
  }

  show(dialogTemplate: TemplateRef<any>) {
    const rect = this.buttonRef.nativeElement.getBoundingClientRect();
    let position = {
      left: (rect.right - 400) + 'px',
      top: (rect.bottom) + 'px'
    };
    this.categoriesDialogRef = this.dialog.open(dialogTemplate, {
      disableClose: false,
      width: '400px',
      maxHeight: '600px',
      hasBackdrop: true,
      position: position
    });
    // Positioning the drop down appropriately needs more work
  }

  save(){
    this.categoriesDialogRef.close();
  }

  cancel() {
    this.categoriesDialogRef.close();
  }


  columnsSelected(newSelections: MultiSelectSelection[]){
    let newDataColumns: DataColumn[] = [];
    for (const selection of newSelections) {
      if(selection.selected) {
        newDataColumns.push(selection.element);
      }
    }
    this.params.dataColumns = newDataColumns;
    this.disableSaveIfRequiredColumnsNotSelected()
  }

  category1ColumnsSelected(newSelections: MultiSelectSelection[]){
    let newDataColumns: DataColumn[] = [];
    for (const selection of newSelections) {
      if(selection.selected) {
        newDataColumns.push(selection.element);
      }
    }
    this.params.category1Data = newDataColumns;
    this.disableSaveIfRequiredColumnsNotSelected()
  }
  category2ColumnsSelected(newSelections: MultiSelectSelection[]){
    let newDataColumns: DataColumn[] = [];
    for (const selection of newSelections) {
      if(selection.selected) {
        newDataColumns.push(selection.element);
      }
    }
    this.params.category2Data = newDataColumns;
    this.disableSaveIfRequiredColumnsNotSelected()
  }
  category3ColumnsSelected(newSelections: MultiSelectSelection[]){
    let newDataColumns: DataColumn[] = [];
    for (const selection of newSelections) {
      if(selection.selected) {
        newDataColumns.push(selection.element);
      }
    }
    this.params.category3Data = newDataColumns;
    this.disableSaveIfRequiredColumnsNotSelected()
  }

  setupMultiSelections(selectedDataColumns: DataColumn[], availableDataColumns: DataColumn[]) {
    let list: MultiSelectSelection[] = [];
    let multiSelectSelection: MultiSelectSelection = null;
    for (const selectedColumn of selectedDataColumns) {
      multiSelectSelection = {
        draggable: true,
        selected: true,
        disabled: false,
        element: selectedColumn,
        name: selectedColumn.viewValue
      };
      list.push(multiSelectSelection);
    }
    for (const avaiableColumn of availableDataColumns) {
      let found = false;
      for (const selectedColumn of selectedDataColumns) {
        if (selectedColumn.value === avaiableColumn.value) {
          found = true;
          break
        }
      }
      if(!found) {
        multiSelectSelection = {
          draggable: true,
          selected: false,
          disabled: false,
          element: avaiableColumn,
          name: avaiableColumn.viewValue
        };
        list.push(multiSelectSelection);
      }

    }
    return list;
  }

  setupAndFixSelections() {
    this.disableSaveIfRequiredColumnsNotSelected();

    if(this.params.category1 === "account") {this.category1MultiSelections = this.setupMultiSelections(this.params.category1Data, this.accountAvailableDataColumns);}
    if(this.params.category2 === "account") {this.category2MultiSelections = this.setupMultiSelections(this.params.category2Data, this.accountAvailableDataColumns);}
    if(this.params.category3 === "account") {this.category3MultiSelections = this.setupMultiSelections(this.params.category3Data, this.accountAvailableDataColumns);}
    if(this.params.category1 === "investor") {this.category1MultiSelections = this.setupMultiSelections(this.params.category1Data, this.investorAvailableDataColumns);}
    if(this.params.category2 === "investor") {this.category2MultiSelections = this.setupMultiSelections(this.params.category2Data, this.investorAvailableDataColumns);}
    if(this.params.category3 === "investor") {this.category3MultiSelections = this.setupMultiSelections(this.params.category3Data, this.investorAvailableDataColumns);}
    if(this.params.category1 === "asset") {this.category1MultiSelections = this.setupMultiSelections(this.params.category1Data, this.assetAvailableDataColumns);}
    if(this.params.category2 === "asset") {this.category2MultiSelections = this.setupMultiSelections(this.params.category2Data, this.assetAvailableDataColumns);}
    if(this.params.category3 === "asset") {this.category3MultiSelections = this.setupMultiSelections(this.params.category3Data, this.assetAvailableDataColumns);}
    if(this.params.category1 === "assetClass1") {this.category1MultiSelections = this.setupMultiSelections(this.params.category1Data, this.assetClass1AvailableDataColumns);}
    if(this.params.category2 === "assetClass1") {this.category2MultiSelections = this.setupMultiSelections(this.params.category2Data, this.assetClass1AvailableDataColumns);}
    if(this.params.category3 === "assetClass1") {this.category3MultiSelections = this.setupMultiSelections(this.params.category3Data, this.assetClass1AvailableDataColumns);}
    if(this.params.category1 === "assetClass2") {this.category1MultiSelections = this.setupMultiSelections(this.params.category1Data, this.assetClass2AvailableDataColumns);}
    if(this.params.category2 === "assetClass2") {this.category2MultiSelections = this.setupMultiSelections(this.params.category2Data, this.assetClass2AvailableDataColumns);}
    if(this.params.category3 === "assetClass2") {this.category3MultiSelections = this.setupMultiSelections(this.params.category3Data, this.assetClass2AvailableDataColumns);}
    if(this.params.category1 === "assetClass3") {this.category1MultiSelections = this.setupMultiSelections(this.params.category1Data, this.assetClass3AvailableDataColumns);}
    if(this.params.category2 === "assetClass3") {this.category2MultiSelections = this.setupMultiSelections(this.params.category2Data, this.assetClass3AvailableDataColumns);}
    if(this.params.category3 === "assetClass3") {this.category3MultiSelections = this.setupMultiSelections(this.params.category3Data, this.assetClass3AvailableDataColumns);}
    this.columnMultiSelection = this.setupMultiSelections(this.params.dataColumns, AvailableColumnOptions.columnOptions);

  }
  sortSelectedColumns(availableColumns: DataColumn[], selectedColumns: DataColumn[], unSelectedColumns: DataColumn[]) {
    for (let index = 0; index < availableColumns.length; index++) {
      const availableElement = availableColumns[index];
      let found=false;
      for (let index = 0; index < selectedColumns.length; index++) {
        const selectedElement = selectedColumns[index];
        if(availableElement.value === selectedElement.value) {found = true; }
      }
      if(!found) {unSelectedColumns.push(availableElement);}
    }
  }

  disableSaveIfRequiredColumnsNotSelected(){
    this.saveDisabled = false;
    if (this.params.category1 !== null && this.params.category1Data.length === 0) {this.saveDisabled = true; }
    if (this.params.category2 !== null && this.params.category2Data.length === 0) {this.saveDisabled = true; }
    if (this.params.category3 !== null && this.params.category3Data.length === 0) {this.saveDisabled = true; }
    if (this.params.dataColumns.length === 0) {this.saveDisabled = true; }
  }

  ngOnInit(): void {
    // console.log('The dialog is being opened with:' + JSON.stringify(this.params));

  }
  onNoClick(): void {
    // console.log('The dialog is being closed:' + JSON.stringify(this.params));
    this.selfDialogRef.close();
  }

  onChange1(){
    this.params.category1Data=[];
    this.onChange();
  }
  onChange2(){
    this.params.category2Data=[];
    this.onChange();
  }
  onChange3(){
    this.params.category3Data=[];
    this.onChange();
  }

  onChange(){
    if (this.params.category3 === this.params.category2) {
      //Category 2 was selected to be the same as category 3. So clean category 3 and move it's setting to category 2.
      this.params.category3 = null;
      this.params.category2Data = this.params.category3Data;
      this.params.category3Data = [];
      this.setupAndFixSelections();
      return;
    }
    if (this.params.category3 === this.params.category1) {
      //Category 1 was selected to be the same as category 3. So clean category 3 and move it's setting to category 1.
      this.params.category3 = null;
      this.params.category1Data = this.params.category3Data;
      this.params.category3Data = [];
      this.setupAndFixSelections();
      return;
    }
    if (this.params.category2 === this.params.category1) {
      //Category 1 was selected to be the same as category 2. So clean category 2 and move it's setting to category 1.
      this.params.category2 = null;
      this.params.category3 = null;
      this.params.category1Data = this.params.category2Data;
      this.params.category2Data = [];
      this.params.category3Data = [];
      this.setupAndFixSelections();
      return;
    }
    if (this.params.category1 === null) {
      // Category 1 is unselected after selecting category 2. So clean category 2 and move it's setting to category 1.
      this.params.category2 = null;
      this.params.category3 = null;
      this.params.category2Data = [];
      this.params.category3Data = [];
      this.setupAndFixSelections();
      return;
    }
    if (this.params.category2 === null) {
      // Category 2 is unselected after selecting category 3. So clean category 3 and move it's setting to category 2.
      //This might happen in the previous if block since category 1 was unselected after selecting both 2 and 3.
      this.params.category3 = null;
      this.params.category3Data = [];
      this.setupAndFixSelections();
      return;
    }
    this.setupAndFixSelections();
  }

}
