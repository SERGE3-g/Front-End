import { Component } from '@angular/core';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrls: ['./direttive.component.css']
})
export class DirettiveComponent {
  loaded: boolean = true;
  important: boolean = true;
  dangerous: boolean = false;

  componentClasses = {
    show: this.loaded,
    warning: this.important && this.dangerous
  }

  bgcolor: string = "yellow";
  bgcolor2: string = "background-color: yellow;";

  componentStyle = {
    "color": "blue",
    "font-weight": "bold",
    "background-color": "yellow"
  }
}
