import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpParams, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { allReportsData } from './mock-data';
import { environment } from '../../../environments/environment';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ReportListService {
  private jwtToken: string = '';
  private serviceURL: string = '';
  private advisorID: string = '';

  constructor(private http: HttpClient) {
    const pageData = (<any> window).AppSettings;
    if (pageData && pageData.jwtToken) this.jwtToken = pageData.jwtToken;
    if (pageData && pageData.serviceBusURL) {
      this.serviceURL = pageData.serviceBusURL + '/report-builder-service';
    }
    else {
      this.serviceURL = 'https://dummylocation.com/report-builder-service';
    }
    if (pageData && pageData.advisorID) this.advisorID = pageData.advisorID;
  }

  getReportList() {
    if (!environment.production) {
      return of(allReportsData);
    }

    let postParams = new HttpParams();
    postParams.append('srcDefConst','reportBuilder');
    postParams.append('pageMode','componentData');
    postParams.append('formatType','html');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${this.jwtToken}`);
    headers = headers.set('X-JWT-Assertion', this.jwtToken);

    const jsonRequestBody = {advisorTaxId: this.advisorID};
    return this.http.post(this.serviceURL + '/get-default-reports-list-metadata', jsonRequestBody, {headers: headers});
  }

}
