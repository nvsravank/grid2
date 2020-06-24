import { Component, OnInit } from '@angular/core';
import { MultiSelectSelection } from '../../common/multi-selection/multi-selection.component';

@Component({
  selector: 'app-graph-table-report-builder',
  templateUrl: './graph-table-report-builder.component.html',
  styleUrls: ['./graph-table-report-builder.component.scss']
})
export class GraphTableReportBuilderComponent implements OnInit {
  rowMultiSelection: MultiSelectSelection[];
  constructor() {
  }

  ngOnInit(): void {
    this.rowMultiSelection = [
      {name: 'Beginning Value', selected: true, disabled: true, draggable: true, element:null},
      {name: 'Net Contribution', selected: true, disabled: true, draggable: true, element:null},
      {name: 'Change in Value', selected: true, disabled: true, draggable: true, element:null},
      {name: 'Ending Value', selected: true, disabled: true, draggable: true, element:null},
      {name: 'Return', selected: true, disabled: false, draggable: true, element:null},
      {name: 'Show Benchmarks associated to the portfolio', selected: true, disabled: false, draggable: false, element:null},
    ];
  }

}
