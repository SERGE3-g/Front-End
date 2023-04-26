import { Component } from '@angular/core';
import { Articolo } from './model/articolo';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   myArticolo: Articolo = new Articolo("Ciao", "Prova", "Pluto");
   
}
