import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';

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

  // products = [
  //   {
  //     id: 1,
  //     name: 'Iphone 12',
  //     price: 12000000,
  //     desc: 'Sieu cap vippro'
  //   },
  //   {
  //     id: 2,
  //     name: 'Iphone 13',
  //     price: 12000000,
  //     desc: 'Sieu cap vippro'
  //   },
  //   {
  //     id: 3,
  //     name: 'Iphone 14',
  //     price: 12000000,
  //     desc: 'Sieu cap vippro'
  //   }
  // ];

  // ListProduct = this.products;
  // newProduct = {
  //   id: 0,
  //   name: '',
  //   price: 0,
  //   desc: ''
  // }
  // OnSubmit(product :any){

  //   if(!this.onValidate(this.newProduct)){
  //     return;
  //   }

  //   if (this.newProduct.id) {
  //     for (let i = 0; i < this.products.length; i++) {
  //       if (this.products[i].id === this.newProduct.id) {
  //         this.products[i] = this.newProduct;
  //       }
  //     }
  //   }else {

  //     this.newProduct = {
  //       ...this.newProduct,
  //       id: this.products.length + 1,
  //       price: Number(this.newProduct.price),
  //     }
  
  //     this.products.push(this.newProduct);

  //   }
  
  // }

  // remove(id :number){
  //   const confirm = window.confirm("Bạn có muốn xóa không")
  //   this.ListProduct = this.ListProduct.filter(pro => pro.id !== id);
  // }

  // onValidate(obj :any) {
  //   if (!obj.name || !obj.price || !obj.desc){
  //     return false;
  //   }
  //   return true;
  // }

  // onEdit(pro: any) {
  //   this.newProduct = pro;
  // }

}
