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



let PortfolioValueSets: MultiSelectSet[] = [];
let rowMultiSelection: MultiSelectSelection[] = [
  {name: 'Beginning Value', selected: true, disabled: true, element:null},
  {name: 'Net Contribution', selected: true, disabled: true, element:null},
  {name: 'Change in Value', selected: true, disabled: true, element:null},
  {name: 'Ending Value', selected: true, disabled: true, element:null},
  {name: 'Return', selected: true, disabled: false, element:null},
  {name: 'Show Benchmarks associated to the portfolio', selected: false, disabled: false, element:null},
];
let set = new MultiSelectSet();
set.maxSelections  = 3;
set.sortable = false;
set.selectionSet = rowMultiSelection;
PortfolioValueSets.push(set);

export const PortfolioValue = Template.bind({});
PortfolioValue.args = {
  name: 'Rows',
  selectionSets: PortfolioValueSets,
};

let ACLValueSets: MultiSelectSet[] = [];
let aclMultiSelection1: MultiSelectSelection[] = [
  {name: 'AllAccounts', selected: true, disabled: true, element:null},
];
let aclMultiSelection2: MultiSelectSelection[] = [
  {name: 'Core Accounts', selected: false, disabled: false, element:null},
  {name: 'Manual Accounts', selected: false, disabled: false, element:null},
  {name: 'Balance Only Accounts', selected: false, disabled: false, element:null},
  {name: 'External Accounts', selected: false, disabled: false, element:null},
];
let aclSet1 = new MultiSelectSet();
aclSet1.maxSelections  = 1;
aclSet1.sortable = false;
aclSet1.selectionSet = aclMultiSelection1;
ACLValueSets.push(aclSet1);
let aclSet2 = new MultiSelectSet();
aclSet2.maxSelections  = 4;
aclSet2.sortable = true;
aclSet2.selectionSet = aclMultiSelection2;
ACLValueSets.push(aclSet2);
export const ACL = Template.bind({});
ACL.args = {
  name: 'Accounts',
  selectionSets: ACLValueSets
};

export const Large = Template.bind({});
Large.args = {
  name: 'Button2',
};

export const Small = Template.bind({});
Small.args = {
  name: 'Button3',
};
