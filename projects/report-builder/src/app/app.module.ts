import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule} from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DynamicModule } from 'ng-dynamic-component';
import { GridsterModule } from 'angular-gridster2';
import { WRIHoldingsModule } from 'wri-holdings';
import { WRIHeaderModule } from 'wri-header';
import { WRIFooterModule } from 'wri-footer';

import { FilterArrayPipe } from './common/filter-array.pipe';

import { ReportBuilderComponent } from './page/report-builder/report-builder.component';
import { GraphReportBuilderComponent } from './component/graph-report-builder/graph-report-builder.component';
import { HoldingsReportBuilderComponent } from './component/holdings-report-builder/holdings-report-builder.component';
import { HeaderReportBuilderComponent } from './component/header-report-builder/header-report-builder.component';
import { FooterReportBuilderComponent } from './component/footer-report-builder/footer-report-builder.component';
import { GraphTableReportBuilderComponent } from './component/graph-table-report-builder/graph-table-report-builder.component';
import { HoldingsCustomizationComponent } from './component/holdings-report-builder/holdings-customization.component';
import { ReportListComponent } from './page/report-list/report-list.component';
import { HttpErrorInterceptor } from './core/http-error.interceptor';
import { HttpAuthInterceptor } from './core/http-auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PurifyHTMLPipe } from './common/purify-html.pipe';
import { SaveReportComponent } from './page/report-builder/save-report/save-report.component';
import { MultiSelectionComponent } from './common/multi-selection/multi-selection.component';
import { MessagingComponent } from './common/messaging/messaging.component';
import { SummaryComponent } from './component/summary/summary.component';
import { SummaryCustomizationComponent } from './component/summary/summary-customization.component';

@NgModule({
  declarations: [
    FilterArrayPipe,
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
    MultiSelectionComponent,
    MessagingComponent,
    SummaryComponent,
    SummaryCustomizationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    DragDropModule,
    MatButtonModule, MatIconModule, MatSelectModule, MatDialogModule, MatExpansionModule, MatCheckboxModule, MatAutocompleteModule, MatChipsModule, MatInputModule, MatFormFieldModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot(),
    GridsterModule,
    DynamicModule.withComponents([GraphTableReportBuilderComponent, HeaderReportBuilderComponent, FooterReportBuilderComponent, HoldingsReportBuilderComponent, GraphReportBuilderComponent, SummaryComponent]),
    WRIHoldingsModule,
    WRIHeaderModule,
    WRIFooterModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
