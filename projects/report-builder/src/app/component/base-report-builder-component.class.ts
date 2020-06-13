import { Input, Output, EventEmitter } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { Subscription } from 'rxjs';

export class BaseReportBuilderComponent {
  @Output()
  optionsOuput = new EventEmitter<any>();
  @Input()
  widget: GridsterItem;
  @Input()
  resizeEvent : EventEmitter<any>;
  @Input()
  portraitOrientation: boolean;

  resizeSub: Subscription;
}