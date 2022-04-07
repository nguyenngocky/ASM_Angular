import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products:any;
  constructor(
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

}
