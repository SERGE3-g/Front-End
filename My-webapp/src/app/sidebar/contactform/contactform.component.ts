import { Component } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {


  /*contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { this.contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  }); }

  ngOnInit() { }*/

  option: string = "";
  mostra: boolean = false;
  mostraSezione(): void {
    if (this.mostra)
      this.mostra = false;
    else
      this.mostra = true;
  }
}




