import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent {
  coord={
    "x":0,
    "y":0
  };
time : number = 0;


  onMouseMove(event:any) {
    this.coord.x = event.offsetX;
    this.coord.y = event.offsetY;
    this.time = event.timeStamp;

  }

}
