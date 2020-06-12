import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

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

@NgModule({
  declarations: [
    AppComponent,
    GraphReportBuilderComponent,
    HoldingsReportBuilderComponent,
    HeaderReportBuilderComponent,
    FooterReportBuilderComponent,
    GraphTableReportBuilderComponent,
    ReportBuilderComponent,
    HoldingsCustomizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    MatButtonModule, MatIconModule, MatSelectModule, MatDialogModule, 
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    WavesModule,
    ButtonsModule,
    GridsterModule,
    DynamicModule.withComponents([GraphTableReportBuilderComponent, HeaderReportBuilderComponent, FooterReportBuilderComponent, HoldingsReportBuilderComponent, GraphReportBuilderComponent]),
    WRIHoldingsModule,
    WRIHeaderModule,
    WRIFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
