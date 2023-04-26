export class Articolo {
  titolo: string;
  autore: string;
  testo: string;
  numApprezzamenti: number = 0;

  constructor();
  constructor(titolo:string, autore:string, testo: string);
  constructor(titolo?:string, autore?:string, testo?: string){
      this.titolo = titolo || "";
      this.autore = autore || "";
      this.testo = testo || "";
  }

  getTitolo(): string {
      return this.titolo;
  }
}
