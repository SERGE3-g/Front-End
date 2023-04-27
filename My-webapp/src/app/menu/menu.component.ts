import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  paroleChiave = {
    "v1": "Approccio consultant",
    "v2": "Istruttori d’eccellenza",
    "v3": "Flessibilità",
    "v4": "Formazione basata sull’assessment e valutazione",
    "v5": "Focus sulla digital transformation e sulle tecnologie emergenti"
  }

  sfondo: string = "yellow";

  cambiaSfondo() {
    let sfondi: string [] = ["red", "blue", "green", "purple", "pink"];
    let num: number = Math.ceil(Math.random()*5);

    this.sfondo = sfondi[num];
  }

  sfondoIniziale() {
    this.sfondo = "yellow";
  }

}
