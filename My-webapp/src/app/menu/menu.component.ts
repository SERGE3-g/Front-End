import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  "v1" : string[] = ["Approccio consultant"];
  "v2": string[] = ["Istruttori d’eccellenzat"];
  "v3": string[] = ["Flessibilità<"];
  "v4": string[] = ["Formazione basata sull’assessment e valutazione"];
  "v5": string[] = ["Focus sulla digital transformation e sulle tecnologie emergenti"];
  constructor() { }

}
