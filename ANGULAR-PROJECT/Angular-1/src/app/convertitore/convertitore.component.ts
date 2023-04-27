import { Component } from '@angular/core';

@Component({
  selector: 'app-convertitore',
  templateUrl: './convertitore.component.html',
  styleUrls: ['./convertitore.component.css']
})
export class ConvertitoreComponent {
  // creo una variabile privata _eur e una pubblica usd

  private _eur = 0;
  usd = 0;
  conversionRate = 1.1498;

  // creo un getter e un setter per la variabile privata _eur
  get eur(): number {
    return this._eur;
  }

  set eur(value: number) {
    this._eur = value;
    this.usd = this._eur * this.conversionRate;
  }

  updateEUR(increment: number) {
    this.eur += increment;
  }

}

