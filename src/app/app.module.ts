import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent} from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserEditComponent} from './user/user-edit/user-edit.component';
import { UserDetailComponent} from './user/user-detail/user-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component'
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestLineComponent } from './requestline/requestline.component';
import { RequestLineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestLineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestReviewListComponent } from './request-review/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './request-review/request-review-item/request-review-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    UserEditComponent,
    UserDetailComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestCreateComponent,
    RequestLineComponent,
    RequestLineEditComponent,
    RequestLineCreateComponent,
    RequestReviewListComponent,
    RequestReviewItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
