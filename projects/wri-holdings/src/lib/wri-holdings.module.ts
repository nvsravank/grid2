import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WRIHoldingsService } from './wri-holdings.service';
import { WRIHoldingsComponent } from './wri-holdings.component';

@NgModule({
  declarations: [WRIHoldingsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [WRIHoldingsService],
  exports: [WRIHoldingsComponent]
})
export class WRIHoldingsModule { }
