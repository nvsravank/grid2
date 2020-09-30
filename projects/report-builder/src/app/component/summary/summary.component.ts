import { Component, OnInit } from '@angular/core';
import { BaseReportBuilderComponent } from '../base-report-builder-component.class';
import { MatDialog } from '@angular/material/dialog';
import { SummaryCustomizationComponent } from './summary-customization.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends BaseReportBuilderComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    super();
   }

  ngOnInit(): void {
  }

  openDialog(): void {
    const doc = document.documentElement;
    const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top != 0 || left != 0) {
      window.scrollTo({
        top : 0,
        left: 0
      });
    }
   
    const dialogRef = this.dialog.open(SummaryCustomizationComponent, {
      disableClose: false,
      width: '1100px',
    });
    dialogRef.afterClosed().subscribe(result => {
      // Result is only sent when user does not click cancel.
      if (top != 0 || left != 0) {
        window.scroll({
          top : top,
          left : left
        });
      }
    });
  }

}
