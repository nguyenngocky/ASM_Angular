import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductService } from './services/product.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductFormComponent } from './product-form/product-form.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { ProductNameComponent } from './components/product-name/product-name.component';
import { StatusComponent } from './components/status/status.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    StudentComponent,
    ProductDetailComponent,
    ProductFormComponent,
    HomeLayoutComponent,
    ShowValidateComponent,
    ProductNameComponent,
    StatusComponent,
    AdminComponent,
    HomeComponent,
    ProductPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
