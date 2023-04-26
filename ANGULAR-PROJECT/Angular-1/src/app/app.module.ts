import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { CounterComponent } from './counter/counter.component';
import { CarDescriptionComponent } from './car-description/car-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    CounterComponent,
    CarDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
