import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;
  images = ['https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/25/637838421361404018_F-H1_800x300.png', 'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/31/637843679027086461_F-H1_800x300.png', 'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/1/637844031172411929_F-H1_800x300.png'];
  constructor(
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      // console.log(this.products);
    });
  }

}
