import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketReservationComponent } from './ticket-reservation/ticket-reservation.component';
import { TestingStringArraysComponent } from './testing-string-arrays/testing-string-arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketReservationComponent,
    TestingStringArraysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
