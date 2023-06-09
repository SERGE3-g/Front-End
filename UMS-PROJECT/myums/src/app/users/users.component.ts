import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  title = 'Users';
  users: any [] = [];

  // creo il costruttore per poter usare il servizio
  constructor( private service : UserService) {

    this.users = service.getUsers();
  }
  ngOnInit(): void {
    this.users = this.service.getUsers();
  }
  // creo il metodo ngOnInit per poter inizializzare il componente dopo che il costruttore è stato chiamato
  onCancellaUser(user: any) {
    this.service.cancellaUser(user);
  }
}
