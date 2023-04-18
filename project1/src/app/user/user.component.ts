import { UserService } from './../user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  // dichiaro una variabile di tipo alias esterno (user) che sarà iniettata da un componente padre
@Input() user: any

// dichiaro un evento di tipo alias esterno (onCancellaUser) che sarà iniettato da un componente padre
@Output('onCancellaUser')  onCancellaUser = new EventEmitter();
@Output('onModificaUser')  onModificaUser = new EventEmitter();
@Output('onAggiungiUser')  onAggiungiUser = new EventEmitter();

  constructor(private userService :UserService) { }

  ngOnInit(): void {
  }
  cancellaUser() {
    this.onCancellaUser.emit(this.user);
  }
  modificaUser() {
    this.onModificaUser.emit(this.user);
  }
  aggiungiUser() {
    this.onAggiungiUser.emit(this.user);
    }

}
