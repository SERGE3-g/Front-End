import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
cancellaUser() {
throw new Error('Method not implemented.');
}
aggiungiUser() {
throw new Error('Method not implemented.');
}


  @Input ('user-data') user: any // creo un alias esterno per l'input

  @Input('cancellaUser')  deleteUser = new EventEmitter();
  @Input('aggiungiUser')  editUser = new EventEmitter();


  constructor(private userService :UserService) { }


  ngOnInit(): void {
  }
deleteUser1() {
  this.deleteUser.emit(this.user);
}
editUser1() {
  this.editUser.emit(this.user);
}

}
