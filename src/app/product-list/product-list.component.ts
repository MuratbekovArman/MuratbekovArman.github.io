import { Component, OnInit } from '@angular/core';
import {COFFEE} from '../coffee';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  coffee = COFFEE;
  amount: number;

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
