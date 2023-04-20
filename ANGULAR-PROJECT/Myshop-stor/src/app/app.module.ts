import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { ListaComponent } from './lista/lista.component';
import { ArticoliComponent } from './articoli/articoli.component';
import { AggiungereComponent } from './aggiungere/aggiungere.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ArticoliComponent,
    AggiungereComponent,
    PageNotFoundComponent,
    DettagliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
