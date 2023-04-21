import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-aggiungere',
  templateUrl: './aggiungere.component.html',
  styleUrls: ['./aggiungere.component.css']
})
export class AggiungereComponent implements OnInit {
  titleToAdd = new FormControl('');
  priceToAdd = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;
    console.log("newTitle : " + newTitle);
    console.log("newPrice : " + newPrice);
  }

}

