import { Component } from '@angular/core';
import { Persona } from './model/persona';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css',
       './app.component2.css']
})
export class ArticoloComponent {
  prova: string = "Ciao Mondo";

  p: Persona = new Persona("Mario", "Rossi", 34);
}
