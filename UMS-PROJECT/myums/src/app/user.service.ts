import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  cancellaUser(user: any) {
    throw new Error('Method not implemented.');
  }
  getUsers(): any[] {
    throw new Error('Method not implemented.');
  }

  users = [
    {
      name: 'Serge',
      cognome: 'Guea',
      codicefiscale: 'GUESSRG99H01H501T',
      provincia:'RM',
      email: 'guea@gmail.com',
      phone: '3333333399',
      city: 'Roma',
      age : 24,
    },
    {
      name: 'Serge1',
      cognome: 'Guea',
      codicefiscale: 'GUESSRG99H01H501T',
      provincia: 'RM',
      email: 'guea@gmail.com',
      phone: '3333333399',
      city: 'Roma',
      age : 24,
    },
    {
      name: 'Marco',
      cognome: 'Boscia',
      codicefiscale: 'GUESSRG99H01H501T',
      provincia: 'RM',
      email: 'marco@gmail.com',
      phone: '3333333395',
      city: 'Gaeta',
      age : 28,
    },
    {
      name: 'Serge3',
      cognome: 'Guea',
      codicefiscale: 'GUESSRG99H01H501T',
      provincia: 'RM',
      email: 'guea@gmail.com',
      phone: '3333333333',
      city: 'Roma',
      age : 24,
    },
    {
      name: 'Serge4',
      cognome: 'Guea',
      codicefiscale: 'GUESSRG99H01H501T',
      provincia: 'RM',
      email: 'guea@gmail.com',
      phone: '3333333333',
      city: 'Roma',
      age : 24,
    },
    {
      name: 'Serge5',
      cognome: 'Guea',
      codicefiscale: 'GUESSRG99H01H501T',
      provincia: 'RM',
      email: 'guea@gmail.com',
      phone: '3333333333',
      city: 'Roma',
      age : 24,
    },
    {
      name: 'Valerio',
      cognome: 'Amato',
      codicefiscale: 'GUESSRG99H01H501T',
      provincia: 'RM',
      email: 'guea@gmail.com',
      phone: '3333333353',
      city: 'Roma',
      age : 30,
    },
  ];

  constructor() { }
}
