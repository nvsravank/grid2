import { Component, OnInit } from '@angular/core';
import { MultiSelectSelection, MultiSelectSet } from '../../common/multi-selection/multi-selection.component';

@Component({
  selector: 'app-graph-table-report-builder',
  templateUrl: './graph-table-report-builder.component.html',
  styleUrls: ['./graph-table-report-builder.component.scss']
})
export class GraphTableReportBuilderComponent implements OnInit {
  rowMultiSelection: MultiSelectSelection[];  
  rowMultiSelection2: MultiSelectSelection[];
  sets: MultiSelectSet[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.rowMultiSelection = [
      {name: 'Beginning Value', selected: true, disabled: true, element:null},
      {name: 'Net Contribution', selected: true, disabled: false, element:null},
      {name: 'Change in Value', selected: true, disabled: false, element:null},
      {name: 'Ending Value', selected: true, disabled: false, element:null},
      {name: 'Return', selected: true, disabled: false, element:null},
      {name: 'Show Benchmarks associated to the portfolio', selected: true, disabled: false, element:null},
    ];
    let set = new MultiSelectSet();
    set.maxSelections  = 6;
    set.sortable = false;
    set.selectionSet = this.rowMultiSelection;
    this.sets.push(set);

    this.rowMultiSelection2 = [
      {name: 'Beginning Value1', selected: true, disabled: true, element:null},
      {name: 'Net Contribution1', selected: true, disabled: false, element:null},
      {name: 'Change in Value1', selected: false, disabled: false, element:null},
      {name: 'Ending Value1', selected: true, disabled: false, element:null},
      {name: 'Return1', selected: true, disabled: false, element:null},
      {name: 'Show Benchmarks associated to the portfolio1', selected: true, disabled: false, element:null},
    ];
    set = new MultiSelectSet();
    set.maxSelections  = 5;
    set.name = "Second section header"
    set.sortable = true;
    set.selectionSet = this.rowMultiSelection2;
    this.sets.push(set);
  }

}
