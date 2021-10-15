import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  order = {};
  orders = this.getOrders();

  getSum() {
    let sum = 0;
    this.items.map((item) => {
      sum += item.price * item.amount;
    });
    return sum;
  }
  makeOrder() {
    let id = Math.floor(Math.random() * 1000);
    let status = 'Not approved';
    let cost = this.getSum();
    this.order = {id, status, cost};
    this.cartService.makeOrder(this.order);
    this.cartService.clearItems();
  }
  getOrders() {
    return this.cartService.getOrders();
  }


  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
