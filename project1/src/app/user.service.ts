import { Injectable } from '@angular/core';

// importo il servizio per poterlo usare nel costruttore della classe UsersComponent
@Injectable({
  providedIn: 'root' // <-- questo è il modo per farlo funzionare
})
// creo la classe UsersComponent
export class UserService {
  // creo un array di oggetti
users = [
  {
    name: 'Serge',
    cognome: 'Guea',
    codicefiscale: 'GUESSRG99H01H501T',
    province: 'RM',
    email: 'guea@gmail.com',
    phone: '3333333333',
    city: 'Roma',
    age : 24,
  },
  {
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
    name: 'Serge2',
    cognome: 'Guea',
    codicefiscale: 'GUESSRG99H01H501T',
    province: 'RM',
    email: 'guea@gmail.com',
    phone: '3333333333',
    city: 'Roma',
    age : 24,
  },
  {
    name: 'Serge3',
    cognome: 'Guea',
    codicefiscale: 'GUESSRG99H01H501T',
    province: 'RM',
    email: 'guea@gmail.com',
    phone: '3333333333',
    city: 'Roma',
    age : 24,
  },
  {
    name: 'Serge4',
    cognome: 'Guea',
    codicefiscale: 'GUESSRG99H01H501T',
    province: 'RM',
    email: 'guea@gmail.com',
    phone: '3333333333',
    city: 'Roma',
    age : 24,
  },
  {
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
cancellaUser(user: any) {
  const index = this.users.indexOf(user);
  if (index > -1) {
    this.users.splice(index, 1);
  }
}

  // creo un metodo per modificare un utente
  modificaUser(user :any) {
    const index = this.getUsers().indexOf(user);
    this.getUsers()[index] = user;

  }

  // creo un metodo per aggiungere un utente
  aggiungiUser(user :any) {
    this.getUsers().push(user);

    }
}
