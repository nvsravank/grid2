import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }

  getReport() {

  }

  saveReport() {
    //dummy save
    return of('Successful save');
  }
}
