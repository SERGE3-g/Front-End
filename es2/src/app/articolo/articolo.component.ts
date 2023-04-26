import { Component, Input } from '@angular/core';
import { Articolo } from '../model/articolo';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent {
  @Input() art: Articolo = new Articolo();

  incrementaApprezzamenti(): void {
    ++this.art.numApprezzamenti;
  }

}
