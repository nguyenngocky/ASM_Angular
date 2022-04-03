
import { formatNumber } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {
  @Input() price: number;
  @Input() discount: number;
  constructor() {
    this.price = 0;
    this.discount = 0;
   }

  ngOnInit(): void {
    this.discount = this.price * this.discount / 100;
    this.price = this.price - this.discount;
  }

}