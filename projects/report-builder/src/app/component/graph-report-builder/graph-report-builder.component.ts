import { Component, OnInit } from '@angular/core';
import { MultiSelectSelection, MultiSelectSet, SingleOptionSet } from '../../common/multi-selection/multi-selection.component';


@Component({
  selector: 'app-graph-report-builder',
  templateUrl: './graph-report-builder.component.html',
  styleUrls: ['./graph-report-builder.component.scss']
})
export class GraphReportBuilderComponent implements OnInit {
  sets: MultiSelectSet[] = [];
  constructor() { }

  ngOnInit(): void {
    let holdingsValueSetsR1: MultiSelectSet[] = [];
    let singleOptionsSet: SingleOptionSet = {
      options: [
        {element:null, name:"Investment Objective"},
        {element:null, name:"Morningstar Broad"},
        {element:null, name:"Morningstar Detailed"},
        {element:null, name:"Portfolio Default"},
        {element:null, name:"Model Default"},
        {element:null, name:"Firm Default"},
      ],
      selectedOptionIndex: 5
    }
    let holdingsMultiSelectionR1: MultiSelectSelection[] = [
      {selected: true, draggable: true, disabled: false, element: null, name: "Asset Name"},
      {selected: true, draggable: true, disabled: false, element: null, name: "Ticker Synbol"},
      {selected: true, draggable: true, disabled: false, element: null, name: "% of Account"},
      {selected: true, draggable: true, disabled: false, element: null, name: "Quantity"},
      {selected: true, draggable: true, disabled: false, element: null, name: "Price ($)"},
      {selected: true, draggable: true, disabled: false, element: null, name: "Value ($)"},
      {selected: true, draggable: true, disabled: false, element: null, name: "Cost ($)"},
      {selected: true, draggable: true, disabled: false, element: null, name: "Asset Classification", selectionOptions: singleOptionsSet},
      {selected: true, draggable: true, disabled: false, element: null, name: "Unrealized Gain/Loss ($)"},
      {selected: true, draggable: true, disabled: false, element: null, name: "Current Yield (%)"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Estimated Annual Income ($)"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Rate of Return"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Beginning Value"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Net Contribution"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Change In Value"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Management Company"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Morningstar Rating"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Investor ID"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Investor Name"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Account Number"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Account Name"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Account Name / Manager / Style Name as applicable"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Manager Name"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Product Name"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Style"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Account Type"},
      {selected: false, draggable: true, disabled: false, element: null, name: "Tax Status"},
    ];
    let holdingsSet1R1 = new MultiSelectSet();
    holdingsSet1R1.maxSelections  = 10;
    holdingsSet1R1.sortable = true;
    holdingsSet1R1.selectionSet = holdingsMultiSelectionR1;
    holdingsValueSetsR1.push(holdingsSet1R1);
    this.sets = holdingsValueSetsR1
  }

}
