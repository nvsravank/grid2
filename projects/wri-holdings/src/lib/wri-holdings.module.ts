import { NgModule } from '@angular/core';
import { WRIHoldingsComponent } from './wri-holdings.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WRIHoldingsService } from './wri-holdings.service';

@NgModule({
  declarations: [WRIHoldingsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [WRIHoldingsService],
  exports: [WRIHoldingsComponent]
})
export class WRIHoldingsModule { }
