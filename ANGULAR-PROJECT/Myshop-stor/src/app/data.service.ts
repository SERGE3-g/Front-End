import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

   listaArticoli : any = [];

  constructor( private httpClient : HttpClient) { }

  getArticle(id: number) {
    const articoli = this.listaArticoli.find((a: { id: number; }) => {
      return a.id == id;
    });
    return articoli;
  }

}
