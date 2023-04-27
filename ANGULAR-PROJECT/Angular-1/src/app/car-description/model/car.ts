export class Car {
  model: string;
  img: string;
  available: boolean;

  constructor(model: string, img: string, available: boolean){
      this.model = model;
      this.img = img;
      this.available = available;
  }
}
