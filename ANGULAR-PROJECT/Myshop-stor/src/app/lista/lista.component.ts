import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  message: string = "";

  lista = [
    {
      id: 1,
      titoloArticle: "Bicicletta",
      prezzoArticle: 80,
      descrizion: "Bici da corsa",
      urlImg: "../assets/images/velo.jpeg",
      textAltImg: "Una bicicletta",
      dispo: false
    },
    {
      id: 2,
      titoloArticle: "TV",
      prezzoArticle: 230,
      description: "TV 4K",
      urlImg: "../assets/images/tv.jpeg",
      textAltImg: "Una TV",
      dispo: true
    },
    {
      id: 3,
      titreArticle: " giocattolo",
      prixArticle: 15,
      description: " nuovo giocattolo per bambini",
      urlImg: "../assets/images/jouet.jpeg",
      textAltImg: "Un giocattolo per bambini",
      dispo: true
    }
  ]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //this.getList();
  }

  getList() {
    //this.dataService.getListFromServer().subscribe(liste => { this.liste = liste });
  }

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }


}

