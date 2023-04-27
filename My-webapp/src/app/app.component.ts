import { Component } from '@angular/core';
import { Hom } from './home/model/hom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myHome : Hom= new Hom();

  constructor(){
    this.myHome.home = "Home";
    this.myHome.chiSiamo = "Chi siamo";
    this.myHome.mission = "Mission";
    this.myHome.login = "Login";
    this.myHome.logout = "logout";

  }

}
