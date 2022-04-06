import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

type PRODUCT_TYPE = {
  id: number,
  name: string,
  desc: string,
  price: number
};
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  constructor(
    private ps: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.onGetList();
  }
  onGetList(){
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      // console.log(this.products);
    });
  }

  onDelete(id: number | string) {
    if(id) {
      window.confirm("Bạn có muốn xóa ?");
      this.ps.deleteProduct(id).subscribe(data => {
      this.onGetList();
      });
      this.toastr.success("Xóa thành công")
    }
  }

  parentChangeStatus(newStatus:number, productId:number) {
    const currentProduct = this.products.find((product:any) =>
      product.id === productId
    );

    if (currentProduct) {
      this.ps.updateProduct(
        productId,
        {
          ...currentProduct,
          status: newStatus
        }
      ).subscribe((data) => {
        this.onGetList();
      });
    }
    
  }

}
