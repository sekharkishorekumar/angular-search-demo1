import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search.component';
import { StringTruncate } from '../pipes/truncate.pipe';

@NgModule({
  declarations: [
    SearchComponent,StringTruncate
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[SearchComponent]
})
export class SearchModule { }
