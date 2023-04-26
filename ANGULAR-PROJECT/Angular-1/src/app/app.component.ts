import { Component } from '@angular/core';
import { articolo } from './model/Articolo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 myArticolo : articolo= new articolo();

 constructor(){
    this.myArticolo.titolo = "creare componenti in angular";
    this.myArticolo.autore = "Mario Rossi";
    this.myArticolo.testo = "Testo articolo di prova";
  }
}
