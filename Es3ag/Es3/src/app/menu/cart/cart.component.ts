import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService) { }


  get cartItems() {
    return this.cartService.getItems();
  }

  get total() {
    return this.cartService.getTotal();
  }

  checkout() {
    this.cartService.checkout();
  }

}

