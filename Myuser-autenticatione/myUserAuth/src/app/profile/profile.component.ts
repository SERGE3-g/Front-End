import { Component, OnInit } from '@angular/core';
import { User } from '../profile/model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  userId = localStorage.getItem('userId');

  constructor(private userService: UserService) { }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    this.userService.getUserById(userId).subscribe((user: User) => {
      this.user = user;
    });
  }

}
