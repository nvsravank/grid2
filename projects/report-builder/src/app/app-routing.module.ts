import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportBuilderComponent } from './page/report-builder/report-builder.component';
import { ReportListComponent } from './page/report-list/report-list.component';

const routes: Routes = [
  { path: '', component: ReportListComponent },
  { path: 'design', component: ReportBuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
