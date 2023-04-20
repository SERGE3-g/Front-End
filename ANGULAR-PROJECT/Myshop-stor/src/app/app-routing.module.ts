import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { AggiungereComponent } from './aggiungere/aggiungere.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: ListaComponent },
  { path: "lista", redirectTo: ""},
  { path:  "dettagli/:id", component: DettagliComponent },
  { path: "aggiungere", component: AggiungereComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
