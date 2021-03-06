import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { isArray } from 'util';

export interface SingleSelection{
  name: String;
  element: any;
}
export interface SingleOptionSet {
  options: SingleSelection[];
  selectedOptionIndex?: number;
}
export interface MultiSelectSelection extends SingleSelection{
  selected:  boolean;
  draggable: boolean;
  disabled:  boolean;
  subSelections?: MultiSelectSelection[];
  selectionOptions?: SingleOptionSet;
  selectionDetails?: string[];
  showDetails?: boolean;
}

export class MultiSelectSet {
  selectionSet: MultiSelectSelection[] = [];
  sortable: boolean = true;
  name: string;
  maxSelections: number;
  minSelections: number = 0;
  currentSelectedCount: number = 0;
  sortableEndCount: number = 0; // Using end count because we are sorting the disabled items to the last of the sort list.
  selectedAndNotDraggabledCount: number = 0; // This field is necessary to allow a set to have single selection set to have items that are diabled.
}

@Component({
  selector: 'app-multi-selection',
  templateUrl: './multi-selection.component.html',
  styleUrls: ['./multi-selection.component.css']
})
export class MultiSelectionComponent implements OnInit, OnChanges {
  moveItemInArray = moveItemInArray;
  @Input()
  name: string;

  @Input()
  minimumSelections: number = 0;
  disableSave: boolean = false;

  @Input()
  selectionSets: MultiSelectSet[];
  internalSelectionSets: MultiSelectSet[] = [];

  @Output()
  newOptions = new EventEmitter<MultiSelectSet[]>();

  dialogRef: MatDialogRef<any>;
  
  @ViewChild("myButton", { read: ElementRef }) buttonRef: ElementRef;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    //this.setCurrentSelections(this.selectionSets);
  }
  ngOnChanges(changes: SimpleChanges) {
    this.setCurrentSelections(changes.selectionSets.currentValue);
  }

  // This is the core of the logic to make the component work.
  setCurrentSelections(selectionSets: MultiSelectSet[]){
    this.internalSelectionSets = [];
    for (const selectionSet of selectionSets) {
      // Doing a deep copy manually here but with some logic to help do the counts necessary.
      let newSelectionSet = new MultiSelectSet();
      newSelectionSet.currentSelectedCount = 0;
      newSelectionSet.maxSelections = +selectionSet.maxSelections;
      newSelectionSet.minSelections = +selectionSet.minSelections;
      newSelectionSet.sortable = selectionSet.sortable;
      newSelectionSet.name = selectionSet.name;
      for (const selection of selectionSet.selectionSet)
      {
        if(selection.selected) newSelectionSet.currentSelectedCount++;
        if(selection.selected && !selection.draggable) newSelectionSet.selectedAndNotDraggabledCount++;
        if(newSelectionSet.currentSelectedCount > selectionSet.maxSelections) {
          selection.selected = false;
          newSelectionSet.currentSelectedCount = selectionSet.maxSelections;
        }
        let newSelection: MultiSelectSelection = {...selection};
        //copy selection options if necessary.
        if(selection.selectionOptions && 
          selection.selectionOptions.options && 
          isArray(selection.selectionOptions.options) && 
          selection.selectionOptions.options.length > 1)
        {
          let newSelectedOptionIndex: number = 0;
          //If an option is sent in the request and it is a valid choice, then use it.
          if(selection.selectionOptions.selectedOptionIndex && selection.selectionOptions.selectedOptionIndex >=0 && selection.selectionOptions.options.length > selection.selectionOptions.selectedOptionIndex) {
            newSelectedOptionIndex = +selection.selectionOptions.selectedOptionIndex;
          } 
          console.log(newSelectedOptionIndex);
          console.log(selection);
          let newOptionSet: SingleOptionSet = {
            options: selection.selectionOptions.options,
            selectedOptionIndex: newSelectedOptionIndex
          };
          newSelection.selectionOptions = newOptionSet;
        }
        newSelectionSet.selectionSet.push(newSelection);
      }
      if(selectionSet.sortable){
        // The sort algorithm here is being done to ensure the sortable items (not disabled) are first in the list. In the sortable items, the selectable items are ahead again.
        // The sequencing of the sort returns is critical to the algorithm.
        newSelectionSet.selectionSet.sort((a,b) => {
          if(a.selected && !b.selected) return -1;
          if(a.draggable && !b.draggable) return -1;
          if(!a.draggable && b.draggable) return 1;
          if(!a.selected && b.selected) return 1;
          return 0;
        });
        newSelectionSet.sortableEndCount = newSelectionSet.selectionSet.length;
        for (const selection of newSelectionSet.selectionSet) {
          if(!selection.draggable) newSelectionSet.sortableEndCount--;
        }
      }
      this.internalSelectionSets.push(newSelectionSet);
    }
    this.checkMinimumSelections()
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
    if(rect.right>300){
      position = {
        left: (rect.right - 300) + 'px',
        top: rect.bottom + 'px'
      };
    }
    let maxHeight = h - rect.bottom - 10;
    this.initialMaxheight = maxHeight;
    this.innerContentDivHeight = maxHeight - 90;
    this.dialogRef = this.dialog.open(dialogTemplate, {
      disableClose: false, //This allows closing the dialog box by clicking anywhere else. This allows the behaviour to mimick a true dropdown.
      width: '300px',
      maxHeight: maxHeight + 'px',
      // height: maxHeight + 'px',
      hasBackdrop: true, //This is necessary for the drag drop to work in a dialog box.
      position: position,
      backdropClass: 'dialog-overlay',
      panelClass: 'multi-select-dialog-panel'
    });
    //console.log('Initial window height: '+ h, rect, this.initialMaxheight, this.innerContentDivHeight);
    // This code is necessary so that when a user clicks the backdrop, we can close the backdrop and reset the entries.
    this.dialogRef.backdropClick().subscribe(() => {
      this.setCurrentSelections(this.selectionSets); //Reset selections.
    })
  }

  // The on resize event needs to be handled only for the case where the user changes the window size after inital open of the dialog.
  // This makes the popup box behave like a true dropdown box.
  onResize(event) {
    const rect = this.buttonRef.nativeElement.getBoundingClientRect();
    const h = window.innerHeight;
    console.log('Resized window height: '+ h, rect, this.initialMaxheight, this.innerContentDivHeight);
    //console.log(rect);
    let position = {
      left: '0px',
      top: rect.bottom + 'px'
    };
    if(rect.right>300){
      position = {
        left: (rect.right - 300) + 'px',
        top: rect.bottom + 'px'
      };
    }
    let height = h - rect.bottom - 10;
    // Because we are setting the maxHeight property when opening the dialog the height property cannot be longer than the maxHeight
    if(height > this.initialMaxheight) height = this.initialMaxheight;
    this.innerContentDivHeight = height - 90;
    // console.log(maxHeight);
    this.dialogRef.updatePosition(position);
    this.dialogRef.updateSize('300px', height + 'px');
  }

  // Save emits the changes sets to the calling component.
  save(){
    this.newOptions.emit(this.internalSelectionSets);
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
    this.setCurrentSelections(this.selectionSets); //Reset the selections.
  }

  drop(event: CdkDragDrop<string[]>, setIndex: number) {
    const set = this.internalSelectionSets[setIndex];
    const element = set.selectionSet[event.previousIndex];
    if (element.selected && event.currentIndex < set.currentSelectedCount)  {
      moveItemInArray(set.selectionSet, event.previousIndex, event.currentIndex);
    }
    if (!element.selected  && event.currentIndex < set.currentSelectedCount && set.currentSelectedCount < set.maxSelections) {
      moveItemInArray(set.selectionSet, event.previousIndex, event.currentIndex);
      element.selected = true;
      set.currentSelectedCount++;
    }
    this.checkMinimumSelections()
  }

  validateAndMove(set:MultiSelectSet, fromIndex: number, toIndex: number) {
    let fromItem = set.selectionSet[fromIndex];
    let toItem = set.selectionSet[toIndex];
    if((fromItem.selected && toItem.selected)
    || (!fromItem.selected && !toItem.selected)) {
      moveItemInArray(set.selectionSet, fromIndex, toIndex);
      return;
    }
    if((!fromItem.selected && toItem.selected) && set.currentSelectedCount < set.maxSelections ) {
      moveItemInArray(set.selectionSet, fromIndex, toIndex);
      fromItem.selected = true;
      set.currentSelectedCount++;
      this.checkMinimumSelections()
      return;
    }
  }

  // Simple logic to handle checking and un checking for non sortable sets.
  onCheckedNonSortable(i: number, isChecked: boolean, setIndex: number){
    const set = this.internalSelectionSets[setIndex];
    set.selectionSet[i].selected = isChecked;
    if(isChecked) {
      if (set.currentSelectedCount < set.maxSelections){
        set.currentSelectedCount++;
      } // else  condition is not necessary as this code is never triggered due to disabling selections.
      else {
        set.selectionSet[i].selected = false;
      }
    }
    else {
      set.currentSelectedCount--;
    }
    this.checkMinimumSelections()
  }

  // More complicated logic for sortable sets to move the selected item to the bottom of the selected area.
  onChecked(i: number, isChecked: boolean, setIndex: number){
    const set = this.internalSelectionSets[setIndex];
    set.selectionSet[i].selected = isChecked;
    //console.log(i, isChecked,set.selectionSet[i].selected); // {}, true || false
    if(isChecked) {
      if (set.currentSelectedCount < set.maxSelections){
        moveItemInArray(set.selectionSet, i, set.currentSelectedCount - set.selectedAndNotDraggabledCount);
        set.currentSelectedCount++;
      } // else  condition is not necessary as this code is never triggered due to disabling selections.
      else {
        set.selectionSet[i].selected = false;
      }
    }
    else {
      set.currentSelectedCount--;
      //console.log(set);
      moveItemInArray(set.selectionSet, i, set.currentSelectedCount - set.selectedAndNotDraggabledCount);
    }
    this.checkMinimumSelections()
  }

  // This function is to diable save if minimum selections are not done for the multiset.
  checkMinimumSelections(){
    if(this.minimumSelections <= 0) {
      this.disableSave = false;
      return;
    }
    let totalCount = 0;
    this.internalSelectionSets.forEach(set => {
      totalCount = totalCount + set.currentSelectedCount;
    });
    if(totalCount < this.minimumSelections) this.disableSave = true;
    else this.disableSave = false;
  }

  showHideSelectionDetails(selection: MultiSelectSelection){
    if(selection.showDetails) selection.showDetails = false;
    else selection.showDetails = true; 
  }

}
