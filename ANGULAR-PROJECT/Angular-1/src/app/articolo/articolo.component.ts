import { Component, Input } from '@angular/core';
import { articolo } from '../model/Articolo';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent {
  @Input() art: articolo = new articolo();

  incrementaApprezzamenti(): void {
    ++this.art.numApprezzamenti;
  }


}
