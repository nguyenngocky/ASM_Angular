import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component'
import { AppComponent } from './app.component'
import { StudentComponent } from './student/student.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductFormComponent } from './product-form/product-form.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { HomeComponent } from './home/home.component';

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
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
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
      },
      {
        path: 'student',
        component: StudentComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
