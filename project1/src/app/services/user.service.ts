import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { UserInterface } from '../interfaces/user';

// importo il servizio per poterlo usare nel costruttore della classe UsersComponent
@Injectable({
  providedIn: 'root' // <-- questo è il modo per farlo funzionare
})
// creo la classe UsersComponent
export class UserService {
  [x: string]: any;
  // creo un array di oggetti
users:  User[] = [
  {
    id : 1,
    name: 'Serge',
    cognome: 'Guea',
    codicefiscale: 'GUESSRG99H01H501T',
    province: 'LT',
    email: 'guea@gmail.com',
    phone: '3333333333',
    city: 'Roma',
    age : 24,
  },
  {
    id : 2,
    name: 'Serge1',
    cognome: 'Guea',
    codicefiscale: 'GUESSRG99H01H501T',
    province: 'RM',
    email: 'guea@gmail.com',
    phone: '3333333333',
    city: 'Roma',
    age : 24,
  },
  {
    id : 3,
    name: 'Serge2',
    cognome: 'Guea',
    codicefiscale: 'GUESSRG99H01H501T',
    province: 'FR',
    email: 'guea@gmail.com',
    phone: '3333333333',
    city: 'Roma',
    age : 24,
  },
  {
    id : 4,
    name: 'Serge3',
    cognome: 'Guea',
    codicefiscale: 'GUESSRG99H01H501T',
    province: 'PZ',
    email: 'guea@gmail.com',
    phone: '3333333333',
    city: 'potenza',
    age : 24,
  },
  {
    id : 5,
    name: 'Serge4',
    cognome: 'Guea',
    codicefiscale: 'GUESSRG99H01H501T',
    province: 'LT',
    email: 'guea@gmail.com',
    phone: '3333333333',
    city: 'Formia',
    age : 24,
  },
  {
    id : 6,
    name: 'Serge5',
    cognome: 'Guea',
    codicefiscale: 'GUESSRG99H01H501T',
    province: 'RM',
    email: 'guea@gmail.com',
    phone: '3333333333',
    city: 'Roma',
    age : 24,
  },
  {
    id : 7,
    name: 'Serge6',
    cognome: 'Guea',
    codicefiscale: 'GUESSRG99H01H501T',
    province: 'RM',
    email: 'guea@gmail.com',
    phone: '3333333333',
    city: 'Roma',
    age : 24,
  },
];

// creo un metodo per ottenere l'array di oggetti
getUsers() {
  return this.users;
}
// creo un metodo per cancellare un utente
cancellaUser (user: User) {
  const index = this.users.indexOf(user);
  if (index > -1) {
    this.users.splice(index,1);

  }
  else {
    alert('utente non trovato');

  }
}

updateUser(user: UserInterface) {
  const idx = this.users.findIndex(v => v.id === user.id);

  if (idx !== -1) {
    this.users[idx] = { ...user };
  }
}

createUser(user: UserInterface) {

  this.users.splice(0, 0, { ...user });

}

}
