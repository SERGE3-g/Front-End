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

  @Input() titoloArticolo: string;
  @Input() prezzoArticolo: number;
  @Input() descrizion: string;
  @Input() urlImg: string;
  @Input() textAltImg: string;
  @Input() dispo: boolean;
  @Input() idArticolo: number;
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
    this.info.emit(this.titoloArticolo);
  }

  getColor() {
    if (this.dispo === true) {
      return "green"
    } else {
      return "red"
    }
  }

}


