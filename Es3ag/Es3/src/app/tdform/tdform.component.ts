import { Component } from '@angular/core';
import { Appointment } from './model/appointment';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent {


  daysOfTheWeek = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì' ];

  availableOffices = [ {id: 'A', name: 'ufficio_A'}, {id: 'B', name: 'ufficio_B'}, {id: 'C', name: 'ufficio_C'} ];

  model: Appointment = {
    name: '',
    mail: '',
    dayOfTheWeek: 'Lunedì',
    office: 'ufficio_A',
    applications: [ {application: false}, {application: false}, {application: false} ]
  }
}



