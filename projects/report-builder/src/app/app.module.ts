import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { DynamicModule } from 'ng-dynamic-component';
import { GridsterModule } from 'angular-gridster2';
import { WRIHoldingsModule } from 'wri-holdings';
import { WRIHeaderModule } from 'wri-header';
import { WRIFooterModule } from 'wri-footer';

import { ReportBuilderComponent } from './page/report-builder/report-builder.component';
import { GraphReportBuilderComponent } from './component/graph-report-builder/graph-report-builder.component';
import { HoldingsReportBuilderComponent } from './component/holdings-report-builder/holdings-report-builder.component';
import { HeaderReportBuilderComponent } from './component/header-report-builder/header-report-builder.component';
import { FooterReportBuilderComponent } from './component/footer-report-builder/footer-report-builder.component';
import { GraphTableReportBuilderComponent } from './component/graph-table-report-builder/graph-table-report-builder.component';
import { HoldingsCustomizationComponent } from './component/holdings-report-builder/holdings-customization.component';
import { ReportListComponent } from './page/report-list/report-list.component';
import { HttpErrorInterceptor } from './utilities/http-error.interceptor';
import { HttpAuthInterceptor } from './utilities/http-auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PurifyHTMLPipe } from './utilities/purify-html.pipe';
import { SaveReportComponent } from './page/report-builder/save-report/save-report.component';
import { MultiSelectionComponent } from './common/presentation/multi-selection/multi-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphReportBuilderComponent,
    HoldingsReportBuilderComponent,
    HeaderReportBuilderComponent,
    FooterReportBuilderComponent,
    GraphTableReportBuilderComponent,
    ReportBuilderComponent,
    HoldingsCustomizationComponent,
    ReportListComponent,
    PurifyHTMLPipe,
    SaveReportComponent,
    MultiSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    MatButtonModule, MatIconModule, MatSelectModule, MatDialogModule, MatExpansionModule, MatCheckboxModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot(),
    GridsterModule,
    DynamicModule.withComponents([GraphTableReportBuilderComponent, HeaderReportBuilderComponent, FooterReportBuilderComponent, HoldingsReportBuilderComponent, GraphReportBuilderComponent]),
    WRIHoldingsModule,
    WRIHeaderModule,
    WRIFooterModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
