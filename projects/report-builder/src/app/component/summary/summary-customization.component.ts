import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {
  DisplayGrid,
  Draggable,
  GridsterComponentInterface,
  GridsterConfig,
  GridsterItem,
  GridType,
  CompactType
} from 'angular-gridster2';

export interface Safe extends GridsterConfig {
  draggable: Draggable;
}

@Component({
  selector: 'app-summary-customization',
  templateUrl: './summary-customization.component.html',
  styleUrls: ['./summary-customization.component.scss']
})
export class SummaryCustomizationComponent {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  dataInputCtrl = new FormControl();
  filteredData: Observable<string[]>;
  selectedData: string[] = ['Net Contribution'];
  allData: string[] = ['Beginnning Value', 'Return', 'Ending Value', 'Realized Gain/Loss', 'Unrealized Gain/Loss'];

  @ViewChild('dataInput') dataInput: ElementRef<HTMLInputElement>;
  @ViewChild('dataInput', { read: MatAutocompleteTrigger }) dataInputTrigger: MatAutocompleteTrigger;
  
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredData = this.dataInputCtrl.valueChanges.pipe(
        startWith(null),
        map((dataPoint: string | null) => dataPoint ? this._filter(dataPoint) : this.allData.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our datapoint
    if ((value || '').trim()) {
      const dataPoint = value.trim();
      const index = this.allData.indexOf(dataPoint);
  
      if (index >= 0) {
        transferArrayItem(this.allData,this.selectedData,index,this.selectedData.length)
      }
  
      //this.selectedData.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.dataInputCtrl.setValue(null);
    this.dataInputTrigger.openPanel();
  }

  remove(dataPoint: string): void {
    const index = this.selectedData.indexOf(dataPoint);

    if (index >= 0) {
      transferArrayItem(this.selectedData,this.allData,index,this.allData.length)
      //this.selectedData.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const dataPoint = event.option.viewValue;
    const index = this.allData.indexOf(dataPoint);

    if (index >= 0) {
      transferArrayItem(this.allData,this.selectedData,index,this.selectedData.length)
    }
   //this.selectedData.push(event.option.viewValue);
    this.dataInput.nativeElement.value = '';
    this.dataInputCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allData.filter(dataPoint => dataPoint.toLowerCase().indexOf(filterValue) === 0);
  }

  //Drag Drop option

  option2AvailableData: string[] = [ 'Beginnning Value', 'Return', 'Ending Value', 'Realized Gain/Loss', 'Unrealized Gain/Loss'];
  option2SelectedData: string[] = ['Net Contribution'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  addChip(dataPoint: string){
    const index = this.option2AvailableData.indexOf(dataPoint);
    if (index >= 0) {
      transferArrayItem(this.option2AvailableData,this.option2SelectedData,index,this.option2SelectedData.length);
    }
  }
  removeChip(dataPoint: string){
    const index = this.option2SelectedData.indexOf(dataPoint);
    if (index >= 0) {
      transferArrayItem(this.option2SelectedData,this.option2AvailableData,index,this.option2AvailableData.length);
    }
  }

  //Option 3 stuff
  baseOptions = {
    displayGrid: DisplayGrid.OnDragAndResize,
    disableWarnings: true,
    swap: true,
    margin: 5,
    outerMargin: true,
    minCols: 3,
    maxCols: 3,
    minRows: 1,
    maxRows: 3,
    minItemCols: 1,
    maxItemCols: 1,
    minItemRows: 1,
    maxItemRows: 1,
    minItemArea: 1,
    defaultItemCols: 1,
    defaultItemRows: 1,
    gridType: GridType.VerticalFixed,
    fixedRowHeight: 40,
    compactType: CompactType.CompactUp,
    enableEmptyCellDrop: true,
    enableOccupiedCellDrop: true,
    pushItems: true,
    pushResizeItems: true,
    draggable: {
      delayStart: 0,
      enabled: true,
      ignoreContentClass: 'gridster-item-content',
      ignoreContent: false,
      dragHandleClass: 'drag-handler',
      dropOverItems: true,
    },
    resizable: {
      enabled: false
    },
    emptyCellDropCallback: this.emptyCellDrop.bind(this),
  }
  emptyCellDrop(event: DragEvent, item: GridsterItem) {
    let index = +event.dataTransfer.getData('text/plain');

    if (index >= 0) {
      transferArrayItem(this.option3Available,this.option3Selected,index,this.option3Selected.length)
    }
    //this.option3Selected.push(newItem);
  }
  option3Available: Array<GridsterItem> = [
    {cols: 1, rows: 1, y: 0, x: 0, hasContent: false,  dragEnabled: true, resizeEnabled: false, delete: true, label: 'Beginnning Value'},
    {cols: 1, rows: 1, y: 0, x: 0, hasContent: false,  dragEnabled: true, resizeEnabled: false, delete: true, label: 'Return'},
    {cols: 1, rows: 1, y: 0, x: 0, hasContent: false,  dragEnabled: true, resizeEnabled: false, delete: true, label: 'Ending Value'},
    {cols: 1, rows: 1, y: 0, x: 0, hasContent: false,  dragEnabled: true, resizeEnabled: false, delete: true, label: 'Realized Gain/Loss'},
    {cols: 1, rows: 1, y: 0, x: 0, hasContent: false,  dragEnabled: true, resizeEnabled: false, delete: true, label: 'Unrealized Gain/Loss'},
    {cols: 1, rows: 1, y: 0, x: 0, hasContent: false,  dragEnabled: true, resizeEnabled: false, delete: true, label: 'Net Contributions'},
  ];
  option3Selected: Array<GridsterItem> = []

  dragStartHandler(event: DragEvent, index: number) {
    event.dataTransfer.setData('text/plain', index.toString());
    event.dataTransfer.dropEffect = 'copy';
  }
  remove3Item($event, item: GridsterItem) {
    $event.preventDefault();
    $event.stopPropagation();
    let index = this.option3Selected.indexOf(item);

    if (index >= 0) {
      transferArrayItem(this.option3Selected,this.option3Available,index,this.option3Available.length)
    }
  }
  add3(item: GridsterItem) {
    let index = this.option3Available.indexOf(item);

    if (index >= 0) {
      transferArrayItem(this.option3Available,this.option3Selected,index,this.option3Selected.length)
    }
  }
}