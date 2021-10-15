import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders = this.cartService.getOrders();
  changeStatus(order) {
    order.status = 'approved';
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
