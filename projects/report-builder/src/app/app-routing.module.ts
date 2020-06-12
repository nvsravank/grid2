import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportBuilderComponent } from './page/report-builder/report-builder.component';

const routes: Routes = [
  { path: '', component: ReportBuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
