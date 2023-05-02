import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
[x: string]: any;
  @Input() user: User;

  constructor(private userService: UserService) {

    this.user = {
      id: 0,
      name: '',
      cognome: '',
      email: '',
      codicefiscale: '',
      province: '',
      city: '',
      phone: '',
      age: 0,
    }
  }

  ngOnInit(): void {
  }

  // creo un metodo per salvare l'utente
  saveUser() {

    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    }
    else {
      this.userService.createUser(this.user);
    }

    this.user = new User();
  }

  // creo un metodo per resettare il form
  resetForm(form: FormGroup) {

    if (this.user.id === 0) {
      this.user = new User();
    } else {
      form.reset();
    }

  }

}
