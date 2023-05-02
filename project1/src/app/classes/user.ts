import { UserInterface } from './../interfaces/user';
export class User implements UserInterface {
  id: number;
  name: string;
  cognome: string;
  email: string;
  codicefiscale: string;
  province: string;
  city: string;
  phone: string;
  age: number;
  constructor() {
    this.id = 0;
    this.name = '';
    this.cognome = '';
    this.email = '';
    this.codicefiscale = '';
    this.province = '';
    this.city = '';
    this.phone = '';
    this.age = 0;
  }

}
