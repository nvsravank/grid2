import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SimpleMessage, MessageType } from '../messaging/messaging.component';

export interface MultiSelectSelection {
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
  sortableEndCount: number = 0;
  selectedAndDisabledCount: number = 0; // This field is necessary to allow a set to have single selection set to have items that are diabled.
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
        if(selection.selected && selection.disabled) newSelectionSet.selectedAndDisabledCount++;
        if(newSelectionSet.currentSelectedCount > selectionSet.maxSelections) {
          selection.selected = false;
          newSelectionSet.currentSelectedCount = selectionSet.maxSelections;
        }
        let newSelection = {...selection};
        newSelectionSet.selectionSet.push({...selection});
      }
      if(selectionSet.sortable){
        newSelectionSet.selectionSet.sort((a,b) => {
          if(a.selected && !b.selected) return -1;
          if(a.disabled && !b.disabled) return 1;
          if(!a.disabled && b.disabled) return -1;
          if(!a.selected && b.selected) return 1;
          return 0;
        });
        newSelectionSet.sortableEndCount = newSelectionSet.selectionSet.length;
        for (const selection of newSelectionSet.selectionSet) {
          if(selection.disabled) newSelectionSet.sortableEndCount--;
        }
      }
      this.internalSelectionSets.push(newSelectionSet);
    }

  }

  // The logic around initial max height is necessary because we are allowing the content to drive the height.
  // Without this we have to set the height property to work and that makes it too long a dialog when the content is small.
  // There is a side effect that the size of the open dialog box cannot be longer than the initially opened size.
  initialMaxheight = 0;
  innerContentDivHeight = 0;

  show(dialogTemplate: TemplateRef<any>) {
    const rect = this.buttonRef.nativeElement.getBoundingClientRect();
    const h = window.innerHeight;
    // Position logic uses a constant width box of 400px. Since the box is being right aligned, we actually right align unless the box is too close to the left side of the screen. 
    let position = {
      left: '0px',
      top: rect.bottom + 'px'
    };
    if(rect.right>400){
      position = {
        left: (rect.right - 400) + 'px',
        top: rect.bottom + 'px'
      };
    }
    let maxHeight = h - rect.bottom - 10;
    this.initialMaxheight = maxHeight;
    this.innerContentDivHeight = maxHeight - 120;
    this.dialogRef = this.dialog.open(dialogTemplate, {
      disableClose: false, //This allows closing the dialog box by clicking anywhere else. This allows the behaviour to mimick a true dropdown.
      width: '400px',
      maxHeight: maxHeight + 'px',
      hasBackdrop: true, //This is necessary for the drag drop to work in a dialog box.
      position: position
    });
    // This code is necessary so that when a user clicks the backdrop, we can close the backdrop and reset the entries.
    this.dialogRef.backdropClick().subscribe(() => {
      this.setCurrentSelections(this.selectionSets);
    })
  }

  // The on resize event needs to be handled only for the case where the user changes the window size after inital open of the dialog.
  // This makes the popup box behave like a true dropdown box.
  onResize(event) {
    const rect = this.buttonRef.nativeElement.getBoundingClientRect();
    const h = window.innerHeight;
    //console.log(rect);
    let position = {
      left: '0px',
      top: rect.bottom + 'px'
    };
    if(rect.right>400){
      position = {
        left: (rect.right - 400) + 'px',
        top: rect.bottom + 'px'
      };
    }
    let height = h - rect.bottom - 10;
    // Because we are setting the maxHeight property when opening the dialog the height property cannot be longer than the maxHeight
    if(height > this.initialMaxheight) height = this.initialMaxheight - 10;
    this.innerContentDivHeight = height - 120;
    // console.log(maxHeight);
    this.dialogRef.updatePosition(position);
    this.dialogRef.updateSize('400px', height + 'px');
  }

  save(){
    this.newOptions.emit(this.internalSelectionSets);
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
    this.setCurrentSelections(this.selectionSets);
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
      set.currentSelectedCount++;
    }

  }
  onCheckedNonSortable(i: number, isChecked: boolean, setIndex: number){
    const set = this.internalSelectionSets[setIndex];
    if(isChecked) {
      if (set.currentSelectedCount < set.maxSelections){
        set.currentSelectedCount++;
      }
    }
    else {
      set.currentSelectedCount--;
    }
  }
  onChecked(i: number, isChecked: boolean, setIndex: number){
    // console.log(i, isChecked); // {}, true || false
    const set = this.internalSelectionSets[setIndex];
    if(isChecked) {
      if (set.currentSelectedCount < set.maxSelections){
        moveItemInArray(set.selectionSet, i, set.currentSelectedCount - set.selectedAndDisabledCount);
        set.currentSelectedCount++;
      }
    }
    else {
      set.currentSelectedCount--;
      console.log(i);
      console.log(set.currentSelectedCount);
      moveItemInArray(set.selectionSet, i, set.currentSelectedCount - set.selectedAndDisabledCount);
    }
  }
}
