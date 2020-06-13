import { Component, OnInit } from '@angular/core';
import { ReportListService } from './report-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  reportList: any;
  myReportPanelOpenState: boolean = true;
  allReportPanelOpenState: boolean = true;

  constructor(private service: ReportListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getReportList().subscribe(
      (reportList) => {
        this.reportList = reportList;
        console.log(reportList);
      }
    );
  }

  createNewReport() {
    const navigationParams = {
      reportId: 0,
      method: 'C',
      reportType: 'C'
    };
    this.router.navigate(['../design'], {relativeTo: this.route, skipLocationChange: false, state: navigationParams});
  }

  editReport(reportId, method, reportType) {
    const navigationParams = {
      reportId,
      method,
      reportType
    };
    this.router.navigate(['../design'], {relativeTo: this.route, skipLocationChange: false, state: navigationParams});
  }

}
