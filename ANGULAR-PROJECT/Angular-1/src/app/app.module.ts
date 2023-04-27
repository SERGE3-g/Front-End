import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { CounterComponent } from './counter/counter.component';
import { CarDescriptionComponent } from './car-description/car-description.component';
import { MouseComponent } from './mouse/mouse.component';
import { ConvertitoreComponent } from './convertitore/convertitore.component';
import { FormsModule } from '@angular/forms';
import { DirettiveComponent } from './direttive/direttive.component';
import { DirStrutturaliComponent } from './dir-strutturali/dir-strutturali.component';
import { DrStrutturali2Component } from './dr-strutturali2/dr-strutturali2.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    CounterComponent,
    CarDescriptionComponent,
    MouseComponent,
    ConvertitoreComponent,
    DirettiveComponent,
    DirStrutturaliComponent,
    DrStrutturali2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
