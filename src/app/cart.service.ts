import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  orders = [];

  addToCart(product) {
    this.items.push(product);
    alert('Product is added!');
  }
  getItems() {
    return this.items;
  }
  makeOrder(order) {
    this.orders.push(order);
  }
  getOrders() {
    return this.orders;
  }
  clearItems() {
    this.items = [];
  }

  constructor() { }
}
