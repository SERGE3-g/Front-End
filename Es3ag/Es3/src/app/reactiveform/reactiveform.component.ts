import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  daysOfTheWeek = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'];

  availableOffices = [{
    id: 'A', name: 'ufficio_A'}, {id: 'B', name: 'ufficio_B'}, {id: 'C', name: 'ufficio_C'} ];

  applications = [{ id: 0 }, { id: 1 }, { id: 2 }];

   reactiveForm: FormGroup;

    constructor() {
      this.reactiveForm = new FormGroup({
          name: new FormControl(''),
          mail: new FormControl(''),
          dayOfTheWeek: new FormControl('Lunedì'),
          fullAddress: new FormGroup({ address: new FormControl(''), city: new FormControl(''), zipCode: new FormControl('') }),
          office: new FormControl('ufficio_A'),
          applications: new FormGroup({
          application_0: new FormControl(false), application_1: new FormControl(false),
          application_2: new FormControl(false)
        })
      });
    }
  }

