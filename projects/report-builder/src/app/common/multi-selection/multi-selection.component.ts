import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SimpleMessage, MessageType } from '../messaging/messaging.component';

export interface MultiSelectSelection {
  draggable: boolean;
  selected: boolean;
  disabled: boolean;
  element: any;
  name: string;
}

export class MultiSelectSet {
  selectionSet: MultiSelectSelection[] = [];
  sortable: boolean = true;
  name: string;
  maxSelections: number;
  currentSelectedCount: number = 0;
}



@Component({
  selector: 'app-multi-selection',
  templateUrl: './multi-selection.component.html',
  styleUrls: ['./multi-selection.component.scss']
})
export class MultiSelectionComponent implements OnInit, OnChanges {
  moveItemInArray = moveItemInArray;
  @Input()
  name: string;

  @Input()
  selectionSets: MultiSelectSet[];
  internalSelectionSets: MultiSelectSet[] = [];

  message: SimpleMessage = {
    messageDesc:  'To select an additional column, remove an existing column.',
    messageType: MessageType.INFORM
  };
  
  @Output()
  newOptions = new EventEmitter<MultiSelectSet[]>();

  dialogRef: MatDialogRef<any>;
  
  @ViewChild("myButton", { read: ElementRef }) buttonRef: ElementRef;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.setCurrentSelections(this.selectionSets);
  }
  ngOnChanges(changes: SimpleChanges) {
    this.setCurrentSelections(changes.selectionSets.currentValue);
  }

  setCurrentSelections(selectionSets: MultiSelectSet[]){
    this.internalSelectionSets = [];
    for (const selectionSet of selectionSets) {
      let newSelectionSet = new MultiSelectSet();
      newSelectionSet.currentSelectedCount = 0;
      newSelectionSet.maxSelections = selectionSet.maxSelections;
      newSelectionSet.sortable = selectionSet.sortable;
      newSelectionSet.name = selectionSet.name;
      for (const selection of selectionSet.selectionSet)
      {
        if(selection.selected) newSelectionSet.currentSelectedCount++;
        if(newSelectionSet.currentSelectedCount > selectionSet.maxSelections) {
          selection.selected = false;
          newSelectionSet.currentSelectedCount = selectionSet.maxSelections;
        }
        newSelectionSet.selectionSet.push({...selection});
      }
      this.internalSelectionSets.push(newSelectionSet);
    }

  }

  show(dialogTemplate: TemplateRef<any>) {
    const rect = this.buttonRef.nativeElement.getBoundingClientRect();
    let position = {
      left: (rect.right - 400) + 'px',
    };
    this.dialogRef = this.dialog.open(dialogTemplate, {
      disableClose: true,
      width: '400px',
      hasBackdrop: true,
      position: position
    });
    // Positioning the drop down appropriately needs more work
  }

  save(){
    this.newOptions.emit(this.internalSelectionSets);
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

  drop(event: CdkDragDrop<string[]>, setIndex: number) {
    const set = this.internalSelectionSets[setIndex];
    const element = set.selectionSet[event.previousIndex];
    if (element.selected && event.currentIndex < set.currentSelectedCount)  {
      moveItemInArray(set.selectionSet, event.previousIndex, event.currentIndex);
      console.log("moving",element.name, event.previousIndex, event.currentIndex);
    }
    if (!element.selected  && event.currentIndex < set.currentSelectedCount && set.currentSelectedCount < set.maxSelections) {
      moveItemInArray(set.selectionSet, event.previousIndex, event.currentIndex);
      element.selected = true;
    }

  }

  onChecked(i: number, isChecked: boolean, setIndex: number){
    // console.log(i, isChecked); // {}, true || false
    const set = this.internalSelectionSets[setIndex];
    if(isChecked) {
      if (set.currentSelectedCount < set.maxSelections){
        moveItemInArray(set.selectionSet, i, set.currentSelectedCount);
        set.currentSelectedCount++;
      }
    }
    else {
      set.currentSelectedCount--;
      moveItemInArray(set.selectionSet, i, set.currentSelectedCount);
    }
  }
}
