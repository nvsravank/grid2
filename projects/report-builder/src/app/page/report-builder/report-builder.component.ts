import { Component, OnInit, EventEmitter } from '@angular/core';
import { GraphReportBuilderComponent } from '../../component/graph-report-builder/graph-report-builder.component';
import { HoldingsReportBuilderComponent } from '../../component/holdings-report-builder/holdings-report-builder.component';
import { FooterReportBuilderComponent } from '../../component/footer-report-builder/footer-report-builder.component';
import { HeaderReportBuilderComponent } from '../../component/header-report-builder/header-report-builder.component';
import { GraphTableReportBuilderComponent } from '../../component/graph-table-report-builder/graph-table-report-builder.component';
import { Safe, Section, SectionType, PageType } from './section';
import { MessageType, Message } from '../../utilities/common-classes';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import {
  GridsterItem,
  GridsterItemComponentInterface,
} from 'angular-gridster2';
import { ActivatedRoute } from '@angular/router';
import { isUndefined, isNull } from 'util';

@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss']
})
export class ReportBuilderComponent implements OnInit {
  portraitOrientation: boolean = false;
  pageType: PageType = PageType.SinglePage;
  gridWidth: number = 1100;
  sections: Section[] = [];
  resizeEvent: EventEmitter<any> = new EventEmitter<any>();
  showComponents = true;
  components: Array<GridsterItem> = [];
  showMsg: boolean = false;
  messageDesc: string = '<strong> bold text </strong> unbold text';
  messageType: MessageType = MessageType.Inform;
  MessageType = MessageType;
  timerId: any;
  SectionType = SectionType;
  PageType = PageType;
  moveItemInArray = moveItemInArray;

  constructor( private route: ActivatedRoute) {
    // Initialize componenets that can be added.
    this.components = [
      {cols: 4, rows: 2, y: 0, x: 0, hasContent: true,  dragEnabled: true, resizeEnabled: true, delete: true, label: 'Graph and Table', type: GraphTableReportBuilderComponent, edit: true},
      {cols: 6, rows: 2, y: 0, x: 0, hasContent: true,  dragEnabled: true, resizeEnabled: true, delete: true, label: 'Multi Page Holdings', type: HoldingsReportBuilderComponent, edit: true},
      {cols: 3, rows: 2, y: 0, x: 0, hasContent: true,  dragEnabled: true, resizeEnabled: true, delete: true, label: 'Graph', type: GraphReportBuilderComponent, edit: true},
    ];
  }

  ngOnInit(): void {
    console.log(window.history.state);
    console.log(this.route);
    let headerSection: Section = new Section(SectionType.Header);
    let footerSection: Section = new Section(SectionType.Footer);
    // Setup header and footer.
    headerSection.dashboard = [
      {cols: headerSection.sectionOptions.maxCols, rows: 1, y: 0, x: 0, hasContent: true, dragEnabled: false, resizeEnabled: false, label: 'Header', delete: false,  type: HeaderReportBuilderComponent, edit: true},
    ];
    footerSection.dashboard = [
      {cols: footerSection.sectionOptions.maxCols, rows: 1, y: 0, x: 0, hasContent: true, dragEnabled: false, resizeEnabled: false, label: 'footer', delete: false,  type: FooterReportBuilderComponent, edit: false},
    ];
  
    this.sections.push(headerSection);
    this.sections.push(footerSection);
    this.changePageType();
  }

  dragStartHandler(event: DragEvent, index: number) {
    event.dataTransfer.setData('text/plain', index.toString());
    event.dataTransfer.dropEffect = 'copy';
  }

  updateOptions(options: Safe) {
    if (options.api && options.api.optionsChanged) {
      options.api.optionsChanged();
    }
  }

  changeOrientation(){
    this.portraitOrientation = !this.portraitOrientation;
    if(this.portraitOrientation) {this.gridWidth = 850; }
    else {this.gridWidth = 1100; }
    this.sections.forEach(section => {
      this.updateOptions(section.sectionOptions);
      section.portraitOrientation = this.portraitOrientation;
      section.gridLayoutChanged();
    });
  }

  showHideTiles() {
    this.showComponents = !this.showComponents;
  }

  addNewSection(type: SectionType, index?: number) {
    if(isUndefined(index) || isNull(index) || index===0) index = this.sections.length-1;
    const newSection = new Section(type);
    newSection.dashboard = [];
    newSection.sectionOptions.emptyCellDropCallback = newSection.emptyCellDrop.bind(newSection);
    newSection.sectionOptions.draggable.stop = (item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) => {
      this.resizeEvent.emit(item);
      if(newSection.type === SectionType.Dynamic) setTimeout(newSection.checkLayoutForSection.bind(newSection), 1000);
    };
    newSection.sectionOptions.itemResizeCallback = (item) => {
      this.resizeEvent.emit(item);
      if(newSection.type === SectionType.Dynamic) setTimeout(newSection.checkLayoutForSection.bind(newSection), 1000);
    };
    newSection.sectionOptions.itemRemovedCallback = (item) => {
      if(newSection.type === SectionType.Dynamic) setTimeout(newSection.checkLayoutForSection.bind(newSection), 1000);
    };
    newSection.components = this.components;
    newSection.sectionOptions.gridSizeChangedCallback = (grid) => {newSection.gridSizeChanged(grid); }
    this.sections.splice(index, 0, newSection);
  }

  changePageType() {
    this.sections.splice(1, this.sections.length-2);
    if (this.pageType === PageType.SinglePage) {
      this.pageType = PageType.MultiPage;
      this.addNewSection(SectionType.Dynamic);
    } else {
      this.pageType = PageType.SinglePage;
      this.addNewSection(SectionType.Fixed);
    }
  }

  showMessage(message: Message) {
    this.messageDesc = message.messageDesc;
    this.messageType = message.messageType;
    this.showMsg = true;
    clearTimeout(this.timerId);
    this.timerId = setTimeout(function () {
      this.showMsg = false;
    }.bind(this), 5000);
  }

  deleteSection(section: Section, index: number) {
    const location = this.sections.indexOf(section);
    this.sections.splice(index,1);
  }
}
