import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {
  id: any;
  titolo!: string;
  prezzo!: number;
  descrizion!: string;
  urlImg!: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.id = id;
    this.titolo = this.dataService.getArticle(id).titoloArticle;
    this.prezzo = this.dataService.getArticle(id).prizzoArticle;
    this.descrizion = this.dataService.getArticle(id).descrizion;
    this.urlImg = this.dataService.getArticle(id).urlImg;
  }


}


