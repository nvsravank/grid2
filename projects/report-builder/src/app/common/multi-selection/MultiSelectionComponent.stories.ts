import { Story, Meta } from '@storybook/angular/types-6-0';
import { MultiSelectionComponent, MultiSelectSelection, MultiSelectSet } from './multi-selection.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Common Components/Multi Select Component',
  component: MultiSelectionComponent,
  decorators: [
    moduleMetadata({
        imports: [MatDialogModule,DragDropModule,BrowserAnimationsModule]
    })
]
} as Meta;
  
const Template: Story<MultiSelectionComponent> = (args: MultiSelectionComponent) => ({
  component: MultiSelectionComponent,
  props: args,
});

// Portfolio return Stories
let PortfolioReturnSets: MultiSelectSet[] = [];
let rowMultiSelection1: MultiSelectSelection[] = [
  {name: 'Beginning Value', selected: true, disabled: true, draggable: true, element:null},
  {name: 'Net Contribution', selected: true, disabled: true, draggable: true, element:null, },
  {name: 'Change in Value', selected: true, disabled: true, draggable: true, element:null},
  {name: 'Ending Value', selected: true, disabled: true, draggable: true, element:null},
  {name: 'Return', selected: true, disabled: false, draggable: true, element:null},
  {name: 'Show Portfolio level Benchmarks', selected: false, disabled: false, draggable: false, element:null},
]
/*
let rowMultiSelection2: MultiSelectSelection[] = [
  {name: 'Show Contribution and Change Details ', selected: false, disabled: false, draggable: true, element:null},  
//    {name: 'Show Contribution and Change Details ', selected: false, disabled: false, draggable: true, element:null},  
];
*/
let set1 = new MultiSelectSet();
set1.maxSelections  = 6;
set1.sortable = true;
set1.selectionSet = rowMultiSelection1;
PortfolioReturnSets.push(set1);
/*
let set2 = new MultiSelectSet();
set2.maxSelections  = 1;
set2.sortable = false;
set2.selectionSet = rowMultiSelection2;
PortfolioReturnSets.push(set2);
*/
export const PortfolioReturn = Template.bind({});
PortfolioReturn.args = {
  name: 'Rows',
  selectionSets: PortfolioReturnSets,
};

let PortfolioReturnSetsR1: MultiSelectSet[] = [];
let netContributionSubSelections: MultiSelectSelection[] =[
  {name: 'Show Breakdowns', selected: true, disabled: false, draggable: true, element:null, selectionDetails:['Contributions', 'Withdrawals'], showDetails:false},
];
let changeInValueSubSelections: MultiSelectSelection[] =[
  {name: 'Show Breakdowns', selected: true, disabled: false, draggable: true, element:null},
];
let rowMultiSelection3: MultiSelectSelection[] = [
  {name: 'Beginning Value', selected: true, disabled: true, draggable: true, element:null},
  {name: 'Net Contribution', selected: true, disabled: true, draggable: true, element:null, subSelections:netContributionSubSelections },
  {name: 'Change in Value', selected: true, disabled: true, draggable: true, element:null, subSelections:changeInValueSubSelections},
  {name: 'Ending Value', selected: true, disabled: true, draggable: true, element:null},
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

export const PortfolioReturnR1 = Template.bind({});
PortfolioReturnR1.args = {
  name: 'Rows',
  selectionSets: PortfolioReturnSetsR1,
};

let ACLValueSets: MultiSelectSet[] = [];
let aclMultiSelection1: MultiSelectSelection[] = [
  {name: 'All Accounts', selected: true, disabled: false, draggable: false, element:null},
];
let aclMultiSelection2: MultiSelectSelection[] = [
  {name: 'Core Accounts', selected: false, disabled: false, draggable: true, element:null},
  {name: 'Manual Accounts', selected: false, disabled: false, draggable: true, element:null},
  {name: 'Balance Only Accounts', selected: false, disabled: false, draggable: true, element:null},
  {name: 'External Accounts', selected: false, disabled: false, draggable: true, element:null},
];
let aclSet1 = new MultiSelectSet();
aclSet1.maxSelections  = 1;
aclSet1.sortable = true;
aclSet1.selectionSet = aclMultiSelection1;
ACLValueSets.push(aclSet1);
let aclSet2 = new MultiSelectSet();
aclSet2.maxSelections  = 4;
aclSet2.name = 'Account Segments';
aclSet2.sortable = true;
aclSet2.selectionSet = aclMultiSelection2;
ACLValueSets.push(aclSet2);
export const ACL = Template.bind({});
ACL.args = {
  name: 'Account Segments',
  selectionSets: ACLValueSets
};

let holdingsValueSets: MultiSelectSet[] = [];
let holdingsMultiSelection: MultiSelectSelection[] = [
  {selected: true, draggable: true, disabled: false, element: null, name: "Asset Name"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Ticker Synbol"},
  {selected: true, draggable: true, disabled: false, element: null, name: "% of Account"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Quantity"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Price ($)"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Value ($)"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Cost ($)"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Unrealized Gain/Loss ($)"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Current Yield (%)"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Estimated Annual Income ($)"},
  {selected: false, draggable: true, disabled: false, element: null, name: "Rate of Return"},
  {selected: false, draggable: true, disabled: false, element: null, name: "Beginning Value"},
  {selected: false, draggable: true, disabled: false, element: null, name: "Net Contribution"},
  {selected: false, draggable: true, disabled: false, element: null, name: "Change In Value"},
  {selected: false, draggable: true, disabled: false, element: null, name: "Management Company"},
  {selected: false, draggable: true, disabled: false, element: null, name: "Morningstar Rating"},
  {selected: false, draggable: true, disabled: false, element: null, name: "Asset Type"},
  {selected: false, draggable: true, disabled: false, element: null, name: "ACL 1 Name"},
  {selected: false, draggable: true, disabled: false, element: null, name: "ACL 2 Name"},
  {selected: false, draggable: true, disabled: false, element: null, name: "ACL 3 Name"},
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
let holdingsSet1 = new MultiSelectSet();
holdingsSet1.maxSelections  = 10;
holdingsSet1.sortable = true;
holdingsSet1.selectionSet = holdingsMultiSelection;
holdingsValueSets.push(holdingsSet1);

export const Holdings = Template.bind({});
Holdings.args = {
  name: 'Columns',
  selectionSets: holdingsValueSets
};

let accountPerformanceSets: MultiSelectSet[] = [];
let accountPerformanceMultiSelection1: MultiSelectSelection[] = [
  {selected: true, draggable: false, disabled: true, element: null, name: "Account"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Account Number"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Value"},
  {selected: true, draggable: true, disabled: true, element: null, name: "Selected Period"},
  {selected: true, draggable: true, disabled: false, element: null, name: "YTD"},
  {selected: true, draggable: true, disabled: false, element: null, name: "One Year"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Three Year"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Five Year "},
  {selected: true, draggable: true, disabled: false, element: null, name: "Since Inception"},
  {selected: true, draggable: true, disabled: false, element: null, name: "Inception Date"},
  {selected: false, draggable: true, disabled: false, element: null, name: "Account Type"},
  {selected: false, draggable: true, disabled: false, element: null, name: "Start Date"},
];
let accountPerformanceSet1 = new MultiSelectSet();
accountPerformanceSet1.maxSelections  = 10;
accountPerformanceSet1.sortable = true;
accountPerformanceSet1.selectionSet = accountPerformanceMultiSelection1;
accountPerformanceSets.push(accountPerformanceSet1);


export const AccountPerformance = Template.bind({});
AccountPerformance.args = {
  name: 'Columns',
  selectionSets :accountPerformanceSets,
};
