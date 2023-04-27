import { Component } from '@angular/core';
import { Car } from  './model/car';

@Component({
  selector: 'app-car-description',
  templateUrl: './car-description.component.html',
  styleUrls: ['./car-description.component.css']
})
export class CarDescriptionComponent {
  car: Car = new Car("Alfa Romeo Giulia", "assets/img/alfa.jpg", true);

  colspan: number = 3;
  classCSS: string = "header";
}

