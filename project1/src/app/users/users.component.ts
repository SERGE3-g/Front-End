import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {


  title = 'Users';
  public users: User[] = [];
  @Output('modificaUser') modificaUser = new EventEmitter<User>();

  // creo il costruttore per poter usare il servizio
  constructor( private service : UserService) {

    this.users = service.getUsers();
  }
  ngOnInit(): void {
    this.users = this.service.getUsers();
  }
  // creo il metodo ngOnInit per poter inizializzare il componente dopo che il costruttore è stato chiamato
  onCancellaUser(user: User) {
    this.service.cancellaUser(user);
  }

  onSelectUser(user: User){
    console.log('selected user',user);
        this.modificaUser.emit(user);

      }

  Onaggiungi (user: User) {
    this.service.aggiungiUser(user);
  }
}
