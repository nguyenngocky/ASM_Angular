import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productDetail:any;
  id :any;
  constructor(
    private activRoute: ActivatedRoute,
    private router: Router,
    private ps: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];

    if(this.id){
      this.onGetList();
    }else {
      this.productDetail = {
        name: "",
        price: 0,
        desc: ""
      };
      this.onGetList();
    }
  }
  onGetList(){
    this.ps.getProduct(this.id).subscribe(data => {
      this.productDetail = data;
      // console.log(this.productDetail);
    })
  }

  OnUpdate(obj :any) {
    if(this.id){
      this.ps.updateProduct(this.id, obj).subscribe();
    // console.log(obj);
    setTimeout(() => {
      this.router.navigate(['/products']);
      this.toastr.success("Cập nhật thành công")
    }, 500)
    }else {
      this.ps.createProduct(obj).subscribe();
      setTimeout(() => {
        this.router.navigate(['/products']);
        this.toastr.success("Thêm mới thành công")
      }, 500)
    }
  }

  

}
