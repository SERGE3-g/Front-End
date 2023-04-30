import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

title = 'ciao';
  name = 'serge';
  userSelected: User | undefined;
  updateaUser(user: User){
    this.userSelected = user;
  }


}
