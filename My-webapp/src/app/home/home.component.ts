import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() home: string = "";
  @Input() chiSiamo: string = "";
  @Input() mission: string = "";
  @Input() login: string = "";
  @Input() logout: string = "";
  
}
