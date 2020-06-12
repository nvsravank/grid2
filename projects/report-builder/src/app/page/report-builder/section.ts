import { isArray, isUndefined } from 'util';
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

export enum SectionType {
  Header,
  Footer,
  Fixed,
  Dynamic
}

export class Section {
  portraitOrientation: boolean = false;
  type: SectionType;
  dashboard: Array<GridsterItem> = [];
  sectionOptions: Safe;
  components: Array<GridsterItem>;
  hasLayoutError: boolean = false;
  height: number = 2;
  constructor (type: SectionType){
    this.type = type;

    const baseoptions = {
      displayGrid: DisplayGrid.Always,
      pushItems: false,
      disableWarnings: true,
      swap: true,
      margin: 2,
      outerMargin: true,
      minCols: 12,
      maxCols: 12,
      minRows: 1,
      minItemCols: 1,
      maxItemCols: 12,
      minItemRows: 1,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1
    }
    const headerOptions = {
      ...baseoptions,
      gridType: GridType.VerticalFixed,
      fixedRowHeight: 120,
      compactType: CompactType.None,
      maxRows: 1,
      maxItemRows: 1,
      draggable: {
        enabled: false
      },
      resizable: {
        enabled: false
      },
    }
    const footerOptions = {
      ...baseoptions,
      gridType: GridType.VerticalFixed,
      fixedRowHeight: 80,
      compactType: CompactType.None,
      maxRows: 1,
      maxItemRows: 1,
      draggable: {
        enabled: false
      },
      resizable: {
        enabled: false
      },
    }
    const dynamicOptions = {
      ...baseoptions,
      gridType: GridType.VerticalFixed,
      fixedRowHeight: 200,
      compactType: CompactType.CompactUp,
      minRows: 2,
      maxRows: 10,
      maxItemRows: 5,
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
        enabled: true
      },
    }
    const fixedOptions = {
      ...baseoptions,
      gridType: GridType.Fit,
      compactType: CompactType.None,
      minRows: 24,
      maxRows: 24,
      maxItemRows: 24,
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
        enabled: true
      },
    }
    
    switch (type) {
      case SectionType.Header:
        this.sectionOptions = headerOptions;
        this.height = 124;
      break;
      case SectionType.Footer:
        this.sectionOptions = footerOptions;
        this.height = 84;
      break;
      case SectionType.Dynamic:
        this.sectionOptions = dynamicOptions;
        this.height = 406;
      break;
      case SectionType.Fixed:
        this.sectionOptions = fixedOptions;
        this.gridLayoutChanged();
      break;
      default:
      break;
    }
  }

  gridLayoutChanged() {
    if(this.type === SectionType.Fixed) {
      if( this.portraitOrientation) this.height = 900;
      else this.height = 650;
    }
  }
  gridSizeChanged(grid: GridsterComponentInterface) {
    // console.info('gridSizeChanged', grid);
    if (this.type === SectionType.Dynamic) {this.height = grid.rows * 202 + 2; }
  };
  emptyCellDrop(event: DragEvent, item: GridsterItem) {
    let index = +event.dataTransfer.getData('text/plain');
    const component = this.components[index];
    let newItem = {...component};
    newItem.x = item.x;
    newItem.y = item.y;
    newItem.outputs = {optionsOuput: newOptions => this.handleOptionReturn.bind(newItem)(newOptions)};
    this.dashboard.push(newItem);
  }
  // This function binding allows any options being returned to be saved to the right component so that save is trivial save of the dashboard list of items.
  handleOptionReturn(this: any, newOptions: any) {
    this.options = newOptions;
  }
  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
  checkLayoutForSection(this: Section){
    // Now check for layout errors
    this.hasLayoutError = false;
    let columns = {};
    //organize widgets into columns based on starting x positions.
    if (this.dashboard.length < 2) {return; }
    for (let index = 0; index < this.dashboard.length; index++) {
      const item = this.dashboard[index];
      for (let index2 = 0; index2 < this.dashboard.length; index2++) {
        const item2 = this.dashboard[index2];
        if (item.x !== item2.x && item.x < item2.x && ((item.x + item.cols) > item2.x)) {
          this.hasLayoutError = true;
          return;
        }
      }
      if (columns.hasOwnProperty(item.x) && isArray(columns[item.x])) {columns[item.x].push(item); }
      else {columns[item.x] = [item]; }
    }
    for (const key in columns) {
      if (columns.hasOwnProperty(key)) {
        const column = columns[key];
        if (isArray(column) && column.length > 1 ) {
          const width = column[0].cols;
          for (let index = 0; index < column.length; index++) {
            const item = column[index];
            if (item.cols !== width) {
              this.hasLayoutError = true;
              return;
            }
          }
        }
      }
    }
  }
}
