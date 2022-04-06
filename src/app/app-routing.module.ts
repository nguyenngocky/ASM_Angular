import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { ProductDetailComponent } from './client/product-detail/product-detail.component'
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { HomeComponent } from './client/home/home.component';
import { ListProductComponent } from './client/list-product/list-product.component';
import { ProductFormComponent } from './Admin/product-form/product-form.component';
import { ProductComponent } from './Admin/product/product.component';
import { HomeAdminComponent } from './Admin/home-admin/home-admin.component';

const routes: Routes = [

  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'phones',
        component: ListProductComponent
      },
      {
        path: 'phones/:id',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'home-admin',
        pathMatch: 'full'
      },
      {
        path: 'home-admin',
        component: HomeAdminComponent
      },
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: 'products/create',
        component: ProductFormComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'products/:id/edit',
        component: ProductFormComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
