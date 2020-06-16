import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface MultiSelectSelection {
  draggable: boolean;
  selected: boolean;
  disabled: boolean;
  element: any;
  name: string;
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
  maxSelections: number;
  currentSelected: number=0;

  @Input()
  selections: MultiSelectSelection[];

  newSelections: MultiSelectSelection[] = [];
  fixedSelections: MultiSelectSelection[] = [];

  @Output()
  newOptions = new EventEmitter<MultiSelectSelection[]>();

  dialogRef: MatDialogRef<any>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges) {
    this.currentSelected = 0;
    for (const selection of changes.selections.currentValue) {
      if (selection.draggable) {
        if(selection.selected) this.currentSelected++;
        if(this.currentSelected > this.maxSelections) {
          selection.selected = false;
          this.currentSelected = this.maxSelections
        }
        this.newSelections.push({...selection});
      } else {
        this.fixedSelections.push({...selection});
      }
    }
  }

  show(dialogTemplate: TemplateRef<any>) {
    console.log("1");
    this.dialogRef = this.dialog.open(dialogTemplate, {
      disableClose: true,
      width: '500px',
      hasBackdrop: true
    });
    console.log("2");
  }


  save(){
    for (const selection of this.fixedSelections) {
      this.newSelections.push(selection);
    }
    this.newOptions.emit(this.newSelections);
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

  drop(event: CdkDragDrop<string[]>) {
    const element = this.newSelections[event.previousIndex];
    if ((element.selected && event.currentIndex < this.currentSelected))  {
      moveItemInArray(this.newSelections, event.previousIndex, event.currentIndex);
      console.log("moving",element.name, event.previousIndex, event.currentIndex);
    }

  }

  onChecked(i: number, isChecked: boolean){
    console.log(i, isChecked); // {}, true || false
    if(isChecked) {
      moveItemInArray(this.newSelections, i, this.currentSelected);
      this.currentSelected++;
    }
    else {
      this.currentSelected--;
      moveItemInArray(this.newSelections, i, this.currentSelected);
    }
  }
}
