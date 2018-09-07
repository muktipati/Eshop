import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGaurd } from './admin-auth-gaurd.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from './auth.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import {DataTableModule} from "angular-6-datatable";


import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessfulComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,  NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},
      {path:'login',component:LoginComponent},

      {
        path:'my-orders',
        component:MyOrdersComponent,
        canActivate:[AuthGaurdService]
      },
      {
        path:'checkout',
        component:CheckoutComponent,
        canActivate:[AuthGaurdService]
      },
      {
        path:'order-successful',
        component:OrderSuccessfulComponent,
        canActivate:[AuthGaurdService]
      },
      
      {
        path:'admin/admin-orders',
        component:AdminProductsComponent,
        canActivate:[AuthGaurdService,AdminAuthGaurd]
      },
      {
        path:'admin/product/new',
        component:ProductFormComponent,
        canActivate:[AuthGaurdService,AdminAuthGaurd]
      },
      {
        path:'admin/product/:id',
        component:ProductFormComponent,
        canActivate:[AuthGaurdService,AdminAuthGaurd]
      },
      {
        path:'admin/admin-products',
        component:AdminOrdersComponent,
        canActivate:[AuthGaurdService,
          AdminAuthGaurd]
        },
      
    ])
  ],
  providers: [AuthService,
              AuthGaurdService,
              UserService,
              AdminAuthGaurd,
              CategoryService,
              ProductService
            ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
