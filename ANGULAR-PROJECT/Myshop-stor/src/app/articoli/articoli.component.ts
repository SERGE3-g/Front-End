import { Component } from '@angular/core';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  totalNbrLike: number = 0;
  comment: string = "Ceci est un commentaire";
  @Output() info = new EventEmitter<string>();

  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Input() description: string;
  @Input() urlImg: string;
  @Input() textAltImg: string;
  @Input() dispo: boolean;
  @Input() idArticle: number;
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
    this.info.emit(this.titreArticle);
  }

  getColor() {
    if (this.dispo === true) {
      return "green"
    } else {
      return "red"
    }
  }

}


