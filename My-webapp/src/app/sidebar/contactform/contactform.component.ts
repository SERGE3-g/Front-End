import { Component } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {
submit() {
throw new Error('Method not implemented.');
}


  /*contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { this.contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  }); }

  ngOnInit() { }*/


  //myForm mia versione
  /*option: string = "";
  mostra: boolean = false;

  mostraSezione(): void {
    if (this.mostra)
      this.mostra = false;
    else
      this.mostra = true;
  }*/

// form prima versione
/*
loaded = true;
important = true;
dangerous = false;

componentClasses = {
  header: true
};

componentStyle = {
  'margin-top': '50px',
  'background-color' : 'white',
}

cognomeInput= {
  cognome:false  //nuova classe, cambia in base all'evento
}
nomeInput={
  nome:false
}

focus() {
  this.cognomeInput.cognome = true;
  this.nomeInput.nome = true;
}


focusOut() {
  this.cognomeInput.cognome = false;
  this.nomeInput.nome = false;
}*/


//form seconda versione
valoriForm = {
  cognome: "",
  nome: "",
  email: "",
  telefono: "",
  option: "",
  messaggio: "",
  altri : ""

}

/*
set scelta(value:string) {
  if(value=="auto") {
    this.valoriForm.cognome ="Guea";
    this.valoriForm.nome = "Serge";
    this.valoriForm.email = "sergeguea@gmail.com";
    this.valoriForm.telefono = "345...";
    this.valoriForm.option = "facebook";
  }
  else {
    this.valoriForm.cognome ="";
    this.valoriForm.nome = "";
    this.valoriForm.email = "";
    this.valoriForm.telefono = "";
    this.valoriForm.option = "";
  }
  */


  scelta: string = "";

  compilazione(value:string) {
    this.scelta = value;
  if(this.scelta=="auto") {
    this.valoriForm.cognome ="Guea";
    this.valoriForm.nome = "Serge";
    this.valoriForm.email = "sergeguea@gmail.com";
    this.valoriForm.telefono = "3892...";
    this.valoriForm.option = "facebook";
    this.valoriForm.messaggio = "Ciao, sono Angular";
    this.valoriForm.altri = " sono Serge";
  }
  else {
    this.valoriForm.cognome ="";
    this.valoriForm.nome = "";
    this.valoriForm.email = "";
    this.valoriForm.telefono = "";
    this.valoriForm.option = "";
    this.valoriForm.messaggio = "";
    this.valoriForm.altri = "";
  }


}

componentClasses = {
  header: true
};

componentStyle = {
  'margin-top': '50px',
  'background-color' : 'white'
}

cognomeInput= {
  cognome:false  //nuova classe, cambia in base all'evento
}
nomeInput={
  nome:false
}

focus() {
  this.cognomeInput.cognome = true;
  this.nomeInput.nome = true;
}


focusOut() {
  this.cognomeInput.cognome = false;
  this.nomeInput.nome = false;
}

}







