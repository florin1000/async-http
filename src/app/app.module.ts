import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowDataFromApiComponent } from './components/show-data-from-api/show-data-from-api.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataFromApiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
