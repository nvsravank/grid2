import { Component, OnInit, EventEmitter } from '@angular/core';
import { GraphReportBuilderComponent } from '../../component/graph-report-builder/graph-report-builder.component';
import { HoldingsReportBuilderComponent } from '../../component/holdings-report-builder/holdings-report-builder.component';
import { FooterReportBuilderComponent } from '../../component/footer-report-builder/footer-report-builder.component';
import { HeaderReportBuilderComponent } from '../../component/header-report-builder/header-report-builder.component';
import { GraphTableReportBuilderComponent } from '../../component/graph-table-report-builder/graph-table-report-builder.component';
import { Safe, Section, SectionType } from './section';
import {
  GridsterItem,
  GridsterItemComponentInterface,
} from 'angular-gridster2';

enum PageType {
  SinglePage,
  MultiPage
}

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

  constructor() {
    // Initialize componenets that can be added.
    this.components = [
      {cols: 4, rows: 1, y: 0, x: 0, hasContent: true,  dragEnabled: true, resizeEnabled: true, delete: true, label: 'Graph and Table', type: GraphTableReportBuilderComponent, edit: true},
      {cols: 6, rows: 1, y: 0, x: 0, hasContent: true,  dragEnabled: true, resizeEnabled: true, delete: true, label: 'Multi Page Holdings', type: HoldingsReportBuilderComponent, edit: true},
      {cols: 3, rows: 1, y: 0, x: 0, hasContent: true,  dragEnabled: true, resizeEnabled: true, delete: true, label: 'Graph', type: GraphReportBuilderComponent, edit: true},
    ];
  }

  ngOnInit(): void {
    let headerSection: Section = new Section(SectionType.Header);
    let footerSection: Section = new Section(SectionType.Footer);
    // Setup header and footer.
    headerSection.dashboard = [
      {cols: 12, rows: 1, y: 0, x: 0, hasContent: true, dragEnabled: false, resizeEnabled: false, label: 'Header', delete: false,  type: HeaderReportBuilderComponent, edit: true},
    ];
    footerSection.dashboard = [
      {cols: 12, rows: 1, y: 0, x: 0, hasContent: true, dragEnabled: false, resizeEnabled: false, label: 'footer', delete: false,  type: FooterReportBuilderComponent, edit: false},
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

  addNewSection(type: SectionType) {
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
    this.sections.splice(this.sections.length-1, 0, newSection);
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

  save() {
    this.sections.forEach(section => {
      console.log(JSON.stringify(section.dashboard));
    });
  }

}
