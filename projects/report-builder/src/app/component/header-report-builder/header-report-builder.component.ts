import { Component, OnInit } from '@angular/core';
import { BaseReportBuilderComponent } from '../base-report-builder-component.class';

@Component({
  selector: 'app-header-report-builder',
  templateUrl: './header-report-builder.component.html',
  styleUrls: ['./header-report-builder.component.scss']
})
export class HeaderReportBuilderComponent extends BaseReportBuilderComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
