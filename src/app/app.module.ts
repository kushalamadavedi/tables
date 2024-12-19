import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { tablecomponent } from 'src/shared/component/table/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    tablecomponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
