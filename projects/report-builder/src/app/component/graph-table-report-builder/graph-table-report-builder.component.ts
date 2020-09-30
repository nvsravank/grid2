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
    let PortfolioReturnSetsR1: MultiSelectSet[] = [];
    let netContributionSubSelections: MultiSelectSelection[] =[
      {name: 'Show Details', selected: true, disabled: false, draggable: true, element:null},
    ];
    let changeInValueSubSelections: MultiSelectSelection[] =[
      {name: 'Show Details', selected: true, disabled: false, draggable: true, element:null},
    ];
    let rowMultiSelection3: MultiSelectSelection[] = [
      {name: 'Beginning Value', selected: true, disabled: false, draggable: true, element:null},
      {name: 'Net Contribution', selected: true, disabled: false, draggable: true, element:null, subSelections:netContributionSubSelections },
      {name: 'Change in Value', selected: true, disabled: false, draggable: true, element:null, subSelections:changeInValueSubSelections},
      {name: 'Ending Value', selected: true, disabled: false, draggable: true, element:null},
      {name: 'Return', selected: true, disabled: false, draggable: true, element:null},
    ];
      let rowMultiSelection4: MultiSelectSelection[] = [
        {name: 'Show Portfolio level Benchmarks', selected: true, disabled: false, draggable: true, element:null},
    //    {name: 'Show Contribution and Change Details ', selected: false, disabled: false, draggable: true, element:null},  
    ];
    let set3 = new MultiSelectSet();
    set3.maxSelections  = 5;
    set3.sortable = true;
    set3.selectionSet = rowMultiSelection3;
    PortfolioReturnSetsR1.push(set3);
    let set4 = new MultiSelectSet();
    set4.maxSelections  = 3;
    set4.sortable = false;
    set4.selectionSet = rowMultiSelection4;
    PortfolioReturnSetsR1.push(set4);    
    
    this.sets = PortfolioReturnSetsR1
  }

}
