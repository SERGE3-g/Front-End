import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  totalNbrLike: number = 0;
  comment: string = "questi sono i commenti";
  @Output() info = new EventEmitter<string>();

  @Input() titoloArticoli: string;
  @Input() prezzoArticoli: number;
  @Input()
  description!: string;
  @Input() urlImg: string;
  @Input() textAltImg: string;
  @Input() dispo: boolean;
  @Input() idArticoli: number;
  like: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
    if (this.like === true) {
      this.totalNbrLike++;
      this.like = false;
    } else {
      this.totalNbrLike--;
      this.like = true;
    }
    this.info.emit(this.titoloArticoli);
  }

  getColor() {
    if (this.dispo === true) {
      return "green"
    } else {
      return "red"
    }
  }

}


