import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapesComponent } from './components/tapes/tapes.component';
import { TapeItemComponent } from './components/tape-item/tape-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TapesComponent,
    TapeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
