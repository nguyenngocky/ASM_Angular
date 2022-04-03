import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  category:any;
  products:any;
  constructor(
    private pv: CategoryService,
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    this.onGetCategoryList();
    this.onGetList();
  }
  onGetCategoryList(){
    this.pv.getCategorys().subscribe(data => {
      this.category = data;
    });
  }
  onGetList(){
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      // console.log(this.products);
    });
  }

}
