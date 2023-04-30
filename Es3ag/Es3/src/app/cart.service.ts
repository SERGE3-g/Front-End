import { Injectable } from '@angular/core';
import { MenuItem } from './menu/model/menu-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: MenuItem[] = [];

  

  constructor() { }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((total, item) => total
      + item.price, 0);


}
  checkout() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    this.items.push(item);
  }

  removeItem(item: MenuItem) {
    this.items = this.items.filter(i => i !== item);
  }

  hasItem(item: MenuItem) {
    return this.items.includes(item);
  }

  clear() {
    this.items = [];
  }




}
